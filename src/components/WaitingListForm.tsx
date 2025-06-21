import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { addToWaitingList, checkEmailInOtherWaitlist } from '@/lib/supabase';
import { useLanguage } from '@/lib/LanguageContext';
import { Shield, ChevronDown, ChevronUp } from 'lucide-react';
import SocialShare from '@/components/SocialShare';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { trackWaitlistSignup, trackFormInteraction, trackReferralUsage } from '@/lib/analytics';

// Define form schema with Zod
const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  referralCode: z.string().optional(),
  userType: z.enum(['passenger', 'driver']),
  dsgvoAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the privacy policy'
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface WaitingListFormProps {
  className?: string;
  referralCode?: string;
  simplified?: boolean; // For popup version
  onSignupSuccess?: () => void; // Callback for successful signup
  defaultUserType?: 'passenger' | 'driver'; // Default user type based on page context
}

const WaitingListForm: React.FC<WaitingListFormProps> = ({
  className = '',
  referralCode: initialReferralCode,
  simplified = false,
  onSignupSuccess,
  defaultUserType = 'passenger'
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReferralSuccess, setShowReferralSuccess] = useState(false);
  const [userReferralCode, setUserReferralCode] = useState<string | null>(null);
  const [userPosition, setUserPosition] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [showReferralField, setShowReferralField] = useState(!!initialReferralCode);
  const { toast } = useToast();
  const { t } = useLanguage();

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      referralCode: initialReferralCode || '',
      userType: defaultUserType,
      dsgvoAccepted: false,
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Track form start
      trackFormInteraction('waitlist_form', 'start');

      // Check if user is already on the other waitlist
      const otherWaitlistCheck = await checkEmailInOtherWaitlist(data.email, data.userType);

      const result = await addToWaitingList(data.email, data.referralCode, data.userType);

      if (result.success) {
        // Track successful waitlist signup
        trackWaitlistSignup(data.userType, data.email);
        trackFormInteraction('waitlist_form', 'complete');

        // Track referral usage if referral code was provided
        if (data.referralCode) {
          trackReferralUsage(data.referralCode);
        }

        // Mark user as signed up to disable exit-intent popup
        localStorage.setItem('femrideSignedUp', 'true');

        // Show verification message with additional info if on both lists
        let description = 'Please check your email to verify your account and confirm your position.';
        if (otherWaitlistCheck.exists) {
          const otherType = data.userType === 'driver' ? 'passenger' : 'driver';
          const otherTypeText = otherType === 'driver' ? t('userTypeDriverShort') : t('userTypePassengerShort');
          description += ` ${t('alreadyOnOtherList').replace('{otherType}', otherTypeText.toLowerCase())}`;
        }

        toast({
          title: t('waitingListSuccess'),
          description,
          variant: 'default',
        });

        // If we have a referral code, show the success message with referral info
        if (result.referralCode) {
          setUserReferralCode(result.referralCode);
          setUserPosition(result.position);
          setShowReferralSuccess(true);
        }
        form.reset();

        // Call success callback if provided (for popup)
        if (onSignupSuccess) {
          onSignupSuccess();
        }
      } else {
        // Check if it's a duplicate email message
        if (result.message?.includes('already on our waiting list')) {
          // Also mark as signed up since they're already on the list
          localStorage.setItem('femrideSignedUp', 'true');

          toast({
            title: t('waitingListDuplicate'),
            description: t('waitingListDuplicateMessage'),
            variant: 'default',
          });

          // Call success callback if provided (for popup) since user is already signed up
          if (onSignupSuccess) {
            onSignupSuccess();
          }
        } else if (result.message?.includes('Invalid referral code')) {
          toast({
            title: t('waitingListInvalidReferral'),
            description: t('waitingListInvalidReferralMessage'),
            variant: 'destructive',
          });
        } else {
          // Generic error
          toast({
            title: t('waitingListError'),
            description: t('waitingListErrorMessage'),
            variant: 'destructive',
          });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      // Track form error
      trackFormInteraction('waitlist_form', 'abandon');

      toast({
        title: t('waitingListError'),
        description: t('waitingListErrorMessage'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (showReferralSuccess && userReferralCode) {
    return (
      <div className={`${className} bg-white p-6 rounded-lg shadow-md text-center`}>
        <h3 className="text-xl font-bold mb-2">{t('waitingListSuccess')}</h3>
        <p className="mb-4">{t('waitingListSuccessMessage')}</p>

        {userPosition && (
          <p className="mb-4">{t('waitingListPositionMessage').replace('{position}', userPosition.toString())}</p>
        )}

        <div className="mb-6">
          <h4 className="font-semibold mb-2">{t('waitingListReferralSuccess')}</h4>
          <p className="text-sm mb-3">{t('waitingListReferralSuccessMessage')}</p>

          <SocialShare
            referralCode={userReferralCode}
            onCopy={handleCopy}
            copied={copied}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-4">
            {/* User Type Selection - always show */}
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-3">
                    <Label className="text-sm font-medium text-gray-700">
                      {t('userTypeLabel')}
                    </Label>
                  </div>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className={simplified ? "grid grid-cols-2 gap-2" : "grid grid-cols-1 gap-3"}
                    >
                      <label
                        className={`flex items-center space-x-3 ${simplified ? 'p-3' : 'p-4'} border-2 rounded-xl transition-all duration-200 cursor-pointer ${
                          field.value === 'passenger'
                            ? 'border-[#fa9de3] bg-[#fa9de3]/5'
                            : 'border-gray-200 hover:border-[#fa9de3]'
                        }`}
                      >
                        <RadioGroupItem
                          value="passenger"
                          id="passenger"
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          field.value === 'passenger'
                            ? 'border-[#fa9de3] bg-[#fa9de3]'
                            : 'border-gray-300'
                        }`}>
                          {field.value === 'passenger' && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="flex-1 text-sm font-medium">
                          {simplified ? t('userTypePassengerShort') : t('userTypePassenger')}
                        </span>
                      </label>
                      <label
                        className={`flex items-center space-x-3 ${simplified ? 'p-3' : 'p-4'} border-2 rounded-xl transition-all duration-200 cursor-pointer ${
                          field.value === 'driver'
                            ? 'border-[#a3adf4] bg-[#a3adf4]/5'
                            : 'border-gray-200 hover:border-[#a3adf4]'
                        }`}
                      >
                        <RadioGroupItem
                          value="driver"
                          id="driver"
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          field.value === 'driver'
                            ? 'border-[#a3adf4] bg-[#a3adf4]'
                            : 'border-gray-300'
                        }`}>
                          {field.value === 'driver' && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="flex-1 text-sm font-medium">
                          {simplified ? t('userTypeDriverShort') : t('userTypeDriver')}
                        </span>
                      </label>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Referral bonus info and both waitlists info - only show if not simplified */}
            {!simplified && (
              <div className="space-y-2">
                <div className="text-center p-3 bg-gradient-to-r from-[#fa9de3]/10 to-[#a3adf4]/10 rounded-lg">
                  <p className="text-sm text-gray-600">
                    {form.watch('userType') === 'driver' ? t('driverReferralBonus') : t('passengerReferralBonus')}
                  </p>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-700">
                    {t('bothWaitlistsInfo')}
                  </p>
                </div>
              </div>
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t('waitingListEmailPlaceholder')}
                      {...field}
                      className="h-14 rounded-full px-6 text-base border-2 border-gray-200 focus:border-[#fa9de3] transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Referral code field - only show if not simplified or if toggled on */}
            {(!simplified || showReferralField) && (
              <FormField
                control={form.control}
                name="referralCode"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder={t('waitingListReferralPlaceholder')}
                        {...field}
                        className="h-14 rounded-full px-6 text-base border-2 border-gray-200 focus:border-[#a3adf4] transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Referral code toggle for simplified mode */}
            {simplified && !showReferralField && (
              <button
                type="button"
                onClick={() => setShowReferralField(true)}
                className="text-sm text-gray-600 hover:text-[#fa9de3] transition-colors flex items-center justify-center gap-1"
              >
                {t('waitingListReferralOptional')}
                <ChevronDown size={16} />
              </button>
            )}

            {/* DSGVO Checkbox */}
            <FormField
              control={form.control}
              name="dsgvoAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <Label className="text-sm text-gray-700 cursor-pointer">
                      {t('waitingListDsgvoCheckbox')}
                    </Label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#fa9de3] hover:bg-[#e989cc] text-black font-semibold h-14 rounded-full px-8 text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 min-h-[56px] min-w-[200px]"
            >
              {isSubmitting
                ? t('waitingListSubmitting')
                : (simplified ? t('waitingListExitButton') : t('waitingListButton'))}
            </Button>

            {/* Trust signals for simplified mode */}
            {simplified && (
              <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-1">
                  <Shield size={12} />
                  {t('waitingListFree')}
                </div>
              </div>
            )}

            {/* Trust signals for full mode */}
            {!simplified && (
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  <Shield size={16} className="text-[#fa9de3]" />
                  {t('waitingListFree')}
                </p>
                <p className="text-xs text-gray-500">
                  {t('waitingListPrivacy')}
                </p>
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WaitingListForm;

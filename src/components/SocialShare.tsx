import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';
import { generateReferralUrl } from '@/lib/referralUtils';
import { trackSocialShare } from '@/lib/analytics';
import {
  MessageCircle,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Copy,
  AtSign
} from 'lucide-react';

interface SocialShareProps {
  referralCode: string;
  onCopy?: () => void;
  copied?: boolean;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  referralCode,
  onCopy,
  copied = false,
  className = ''
}) => {
  const { t } = useLanguage();


  // Generate sharing content
  const shareText = `🚗 Join FemRide - Europe's first ride-hailing platform exclusively for women!

✨ Safe rides by women, for women
🔒 Verified drivers only
🎯 Priority access with my referral code: ${referralCode}

Join the waitlist now:`;

  const shareUrl = generateReferralUrl(referralCode);
  const fullShareText = `${shareText}\n${shareUrl}`;

  // Platform-specific messages
  const facebookMessage = `🚗 Exciting news! FemRide is coming - Europe's first ride-hailing platform exclusively for women!

✨ Safe rides by women, for women
🔒 Verified drivers only
🎯 Get priority access with my referral code: ${referralCode}

Join the waitlist: ${shareUrl}`;

  const linkedInMessage = `I'm excited to share FemRide - Europe's first ride-hailing platform exclusively for women!

This innovative platform focuses on safety and empowerment:
✨ Safe rides by women, for women
🔒 Verified drivers only
🎯 Priority access available

Join the waitlist with my referral code: ${referralCode}
${shareUrl}`;

  const twitterMessage = `🚗 FemRide is coming! Europe's first ride-hailing platform exclusively for women!

✨ Safe rides by women, for women
🔒 Verified drivers only
🎯 Get priority access: ${shareUrl}`;

  const threadsMessage = `🚗 FemRide is launching soon! Europe's first ride-hailing platform exclusively for women.

✨ Safe rides by women, for women
🔒 Verified drivers only
🎯 Priority access with my referral code: ${referralCode}

Join the waitlist: ${shareUrl}`;

  // Detect if user is on mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);



  // Social media sharing functions
  const shareToWhatsApp = () => {
    trackSocialShare('whatsapp', 'referral_link');
    const whatsappText = encodeURIComponent(fullShareText);

    if (isMobile) {
      // Mobile: open WhatsApp app directly
      window.open(`whatsapp://send?text=${whatsappText}`, '_blank');
    } else {
      // Desktop: open WhatsApp Web in new tab
      window.open(`https://web.whatsapp.com/send?text=${whatsappText}`, '_blank');
    }
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(facebookMessage)}`;

    if (isMobile) {
      // Mobile: Try to open Facebook app first
      const appUrl = `fb://share?href=${encodeURIComponent(shareUrl)}`;
      window.location.href = appUrl;
    } else {
      // Desktop: open in new tab
      window.open(facebookUrl, '_blank');
    }
  };

  const shareToLinkedIn = () => {
    // LinkedIn no longer supports custom text in URL parameters
    // It pulls title and description from the page's meta tags
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

    if (isMobile) {
      // Mobile: Try to open LinkedIn app first
      const appUrl = `linkedin://sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
      window.location.href = appUrl;
    } else {
      // Desktop: open in new tab
      window.open(linkedinUrl, '_blank');
    }
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterMessage)}`;

    if (isMobile) {
      // Mobile: Try to open Twitter/X app first
      const appUrl = `twitter://post?message=${encodeURIComponent(twitterMessage)}`;
      window.location.href = appUrl;
    } else {
      // Desktop: open in new tab
      window.open(twitterUrl, '_blank');
    }
  };

  const shareToThreads = () => {
    const threadsUrl = `https://www.threads.net/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(threadsMessage)}`;

    if (isMobile) {
      // Mobile: Try to open Threads app first
      const appUrl = `threads://share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(threadsMessage)}`;
      window.location.href = appUrl;
    } else {
      // Desktop: open in new tab
      window.open(threadsUrl, '_blank');
    }
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent('🚗 Join FemRide - Europe\'s First Women-Only Ride Platform!');
    const emailBody = `Hi there!

I wanted to share something exciting with you - FemRide is launching soon!

🚗 FemRide is Europe's first ride-hailing platform exclusively for women, focusing on safety and empowerment.

✨ Safe rides by women, for women
🔒 Verified drivers only
🎯 Priority access available

I have a referral code that gives you priority access: ${referralCode}

Join the waitlist here: ${shareUrl}

Looking forward to safer rides together!

Best regards`;

    const body = encodeURIComponent(emailBody);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    if (onCopy) onCopy();
  };





  return (
    <div className={`space-y-6 ${className}`}>
      {/* Referral code section with improved design */}
      <div className="bg-gradient-to-r from-[#fa9de3]/10 to-[#a3adf4]/10 p-6 rounded-xl border border-[#fa9de3]/20">
        <div className="text-center mb-4">
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            {t('referralCodeTitle')}
          </h4>
          <p className="text-sm text-gray-600">
            {t('referralCodeDescription')}
          </p>
        </div>

        <div className="flex items-center justify-center mb-4">
          <div className="bg-white px-6 py-4 rounded-l-xl font-mono text-xl font-bold flex-1 text-center border-2 border-r-0 border-[#fa9de3]/30 shadow-sm">
            {referralCode}
          </div>
          <Button
            type="button"
            onClick={copyToClipboard}
            className="bg-[#fa9de3] hover:bg-[#e989cc] text-black rounded-r-xl h-16 px-6 border-2 border-l-0 border-[#fa9de3] shadow-sm transition-all duration-200"
          >
            {copied ? (
              <span className="text-sm font-medium">✓ {t('waitingListCopied')}</span>
            ) : (
              <Copy size={20} />
            )}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            {t('referralCodeShareHint')}
          </p>
        </div>
      </div>

      {/* Social sharing buttons */}
      <div className="space-y-3">
        <h5 className="text-sm font-medium text-gray-700 text-center mb-3">
          {t('socialShareTitle')}
        </h5>

        {/* Primary sharing options */}
        <div className="grid grid-cols-2 gap-3">
          {/* WhatsApp */}
          <Button
            type="button"
            onClick={shareToWhatsApp}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white h-12 rounded-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium">WhatsApp</span>
          </Button>

          {/* Facebook */}
          <Button
            type="button"
            onClick={shareToFacebook}
            className="bg-[#1877F2] hover:bg-[#166FE5] text-white h-12 rounded-lg flex items-center justify-center gap-2"
          >
            <Facebook size={18} />
            <span className="text-sm font-medium">Facebook</span>
          </Button>

          {/* Threads */}
          <Button
            type="button"
            onClick={shareToThreads}
            className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white h-12 rounded-lg flex items-center justify-center gap-2"
          >
            <AtSign size={18} />
            <span className="text-sm font-medium">Threads</span>
          </Button>

          {/* LinkedIn */}
          <Button
            type="button"
            onClick={shareToLinkedIn}
            className="bg-[#0A66C2] hover:bg-[#095BB0] text-white h-12 rounded-lg flex items-center justify-center gap-2"
          >
            <Linkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
          </Button>

          {/* X (Twitter) */}
          <Button
            type="button"
            onClick={shareToTwitter}
            className="bg-black hover:bg-gray-800 text-white h-12 rounded-lg flex items-center justify-center gap-2"
          >
            <Twitter size={18} />
            <span className="text-sm font-medium">X</span>
          </Button>

          {/* Email */}
          <Button
            type="button"
            onClick={shareViaEmail}
            className="bg-[#EA4335] hover:bg-[#D93025] text-white h-12 rounded-lg flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            <span className="text-sm font-medium">Email</span>
          </Button>
        </div>


      </div>
    </div>
  );
};

export default SocialShare;

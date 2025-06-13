import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import WaitingListForm from '@/components/WaitingListForm';
import { getPublicWaitlistStats } from '@/lib/supabase';
import { Shield, Users, Clock, Star, TrendingUp, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { getReferralCode } from '@/lib/referralUtils';

interface WaitingListSectionProps {
  className?: string;
}

const WaitingListSection: React.FC<WaitingListSectionProps> = ({ className = '' }) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [totalSignups, setTotalSignups] = useState<number>(0);
  const [recentSignups, setRecentSignups] = useState<any[]>([]);
  const [currentRecentIndex, setCurrentRecentIndex] = useState(0);

  // Check for referral code using utility function
  useEffect(() => {
    const ref = getReferralCode();
    if (ref) {
      setReferralCode(ref);
    }
  }, []);

  // Fetch waitlist stats
  useEffect(() => {
    const fetchStats = async () => {
      const stats = await getPublicWaitlistStats();
      if (stats.success) {
        setTotalSignups(stats.total_count);
        setRecentSignups(stats.recent_signups);
      }
    };
    fetchStats();
  }, []);

  // Rotate recent signups with realistic timing (8-15 seconds, randomized)
  useEffect(() => {
    if (recentSignups.length > 0) {
      const getRandomInterval = () => Math.floor(Math.random() * 7000) + 8000; // 8-15 seconds

      const scheduleNext = () => {
        const timeout = setTimeout(() => {
          setCurrentRecentIndex((prev) => (prev + 1) % recentSignups.length);
          scheduleNext(); // Schedule the next rotation with a new random interval
        }, getRandomInterval());

        return timeout;
      };

      const timeout = scheduleNext();
      return () => clearTimeout(timeout);
    }
  }, [recentSignups]);

  return (
    <section id="waitlist" className={`py-16 bg-gradient-to-b from-white to-[#fa9de3]/10 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222]">
              {t('waitingListTitle')}
            </h2>
            <p className="text-gray-600 text-lg mb-4 max-w-2xl mx-auto">
              {t('waitingListDescription')}
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              {totalSignups > 0 && (
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">
                    {t('waitingListSocialProof').replace('{count}', totalSignups.toString())}
                  </span>
                </div>
              )}

              {recentSignups.length > 0 && (
                <div className="flex items-center gap-2 bg-[#fa9de3]/10 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">
                    {t('waitingListRecentSignup')
                      .replace('{name}', recentSignups[currentRecentIndex]?.email?.split('@')[0] || 'Lisa')
                      .replace('{city}', recentSignups[currentRecentIndex]?.city || 'München')}
                  </span>
                </div>
              )}
            </div>

            {/* Urgency */}
            <div className="bg-gradient-to-r from-[#fa9de3]/20 to-[#a3adf4]/20 px-6 py-3 rounded-lg mb-6 max-w-lg mx-auto">
              <p className="text-sm font-medium text-gray-700">
                {t('waitingListUrgency')}
              </p>
            </div>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-5 rounded-lg shadow-sm flex items-start">
              <div className="bg-[#fa9de3]/20 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-[#fa9de3]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('waitingListTrustSafety')}</h3>
                <p className="text-gray-600">{t('waitingListTrustSafetyDesc')}</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm flex items-start">
              <div className="bg-[#a3adf4]/20 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-[#a3adf4]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('waitingListTrustCommunity')}</h3>
                <p className="text-gray-600">{t('waitingListTrustCommunityDesc')}</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm flex items-start">
              <div className="bg-[#fa9de3]/20 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-[#fa9de3]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('waitingListTrustEarly')}</h3>
                <p className="text-gray-600">{t('waitingListTrustEarlyDesc')}</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm flex items-start">
              <div className="bg-[#a3adf4]/20 p-3 rounded-full mr-4">
                <Star className="h-6 w-6 text-[#a3adf4]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{t('waitingListTrustInvite')}</h3>
                <p className="text-gray-600">{t('waitingListReferralDescription')}</p>
              </div>
            </div>
          </div>

          <div id="waitlist-form" className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto mb-12">
            <h3 className="text-xl font-bold mb-4 text-center">{t('waitingListJoinToday')}</h3>
            <WaitingListForm
              className="w-full"
              referralCode={referralCode || undefined}
            />
          </div>

          {/* What You're Joining Section */}
          <div className="bg-gradient-to-br from-[#fa9de3]/5 to-[#a3adf4]/5 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('waitingListWhatYoureJoining')}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('waitingListWhatYoureJoiningDesc')}
              </p>
            </div>

            {/* App Preview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fa9de3]/10 to-[#a3adf4]/10 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">{t('waitingListInDevelopment')}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('waitingListAppPreview')}</h4>
                <p className="text-gray-600">{t('waitingListAppPreviewDesc')}</p>
              </div>

              {/* App Store Preview Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* App Store Preview */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl px-6 py-4 flex items-center gap-3 transition-all hover:border-[#fa9de3]/50 hover:bg-[#fa9de3]/5">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-[#fa9de3] font-medium">{t('downloadOn')}</span>
                    <span className="font-semibold text-base text-gray-700">App Store</span>
                  </div>
                </div>

                {/* Google Play Preview */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl px-6 py-4 flex items-center gap-3 transition-all hover:border-[#a3adf4]/50 hover:bg-[#a3adf4]/5">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-[#a3adf4] font-medium">{t('getItOn')}</span>
                    <span className="font-semibold text-base text-gray-700">Google Play</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="mt-8 text-center">
              <div className="bg-white rounded-lg p-6 max-w-xl mx-auto shadow-sm border border-gray-200">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">{t('waitingListWhatsNext')}</h4>
                <p className="text-gray-600 mb-4">{t('waitingListWhatsNextDesc')}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Bell size={16} className="text-[#fa9de3]" />
                  <span>{t('waitingListNotifyWhenReady')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingListSection;

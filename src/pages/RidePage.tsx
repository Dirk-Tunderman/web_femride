import { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import Navbar from "@/shared/Navbar";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useScrollTop } from "@/hooks/use-scroll-top";

interface RideRequest {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupTime: string;
  passengerCount: string;
  accessibility: string;
  additionalInfo: string;
}

const RidePage = () => {
  useScrollTop();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RideRequest>({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupTime: "",
    passengerCount: "",
    accessibility: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (data: RideRequest) => {
    const templateParams = {
      to_email: import.meta.env.VITE_ADMIN_EMAIL,
      from_name: data.name,
      from_email: data.email,
      subject: t('rideRequestEmailSubject'),
      message: `
New Ride Request Details:

Personal Information:
-------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Ride Details:
------------
Pickup Location: ${data.pickupLocation}
Dropoff Location: ${data.dropoffLocation}
Pickup Time: ${data.pickupTime}
Number of Passengers: ${data.passengerCount}

Special Requirements:
-------------------
Accessibility Needs: ${data.accessibility || "None specified"}
Additional Information: ${data.additionalInfo || "None provided"}

This request was submitted through the FemRide Ride Request Form.
      `.trim(),
    };

    return emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      toast({
        title: t('rideRequestSuccessTitle'),
        description: t('rideRequestSuccessMessage'),
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        pickupLocation: "",
        dropoffLocation: "",
        pickupTime: "",
        passengerCount: "",
        accessibility: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: t('rideRequestErrorTitle'),
        description: t('rideRequestErrorMessage'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fa9de3]/10 to-[#a3adf4]/20">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="flex items-center gap-2 text-gray-600 hover:text-[#fa9de3] transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          {t('backButton')}
        </Button>
      </div>

      {/* Header Section */}
      <div className="pt-6 pb-10 text-center">
        <p className="text-[#fa9de3] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
          {t('forPassengers')}
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#fa9de3]"></span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">
          {t('requestRideTitle')}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg px-4">
          {t('rideRequestDesc')}
        </p>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-10 w-1 bg-[#fa9de3] rounded-full"></div>
                <h2 className="text-2xl font-semibold text-[#222]">{t('personalInfoTitle')}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    {t('rideRequestNameLabel')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('rideRequestNamePlaceholder')}
                    className="rounded-xl border-gray-200 focus:border-[#fa9de3] focus:ring-[#fa9de3]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    {t('rideRequestEmailLabel')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('rideRequestEmailPlaceholder')}
                    className="rounded-xl border-gray-200 focus:border-[#fa9de3] focus:ring-[#fa9de3]"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    {t('rideRequestPhoneLabel')}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('rideRequestPhonePlaceholder')}
                    className="rounded-xl border-gray-200 focus:border-[#fa9de3] focus:ring-[#fa9de3]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Ride Details */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-10 w-1 bg-[#a3adf4] rounded-full"></div>
                <h2 className="text-2xl font-semibold text-[#222]">{t('rideDetailsTitle')}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="pickupLocation" className="text-sm font-medium text-gray-700">
                    {t('pickupLocationLabel')}
                  </label>
                  <Input
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder={t('pickupLocationPlaceholder')}
                    className="rounded-xl border-gray-200 focus:border-[#a3adf4] focus:ring-[#a3adf4]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="dropoffLocation" className="text-sm font-medium text-gray-700">
                    {t('dropoffLocationLabel')}
                  </label>
                  <Input
                    id="dropoffLocation"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleChange}
                    placeholder={t('dropoffLocationPlaceholder')}
                    className="rounded-xl border-gray-200 focus:border-[#a3adf4] focus:ring-[#a3adf4]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="pickupTime" className="text-sm font-medium text-gray-700">
                    {t('pickupTimeLabel')}
                  </label>
                  <Input
                    id="pickupTime"
                    name="pickupTime"
                    type="datetime-local"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="rounded-xl border-gray-200 focus:border-[#a3adf4] focus:ring-[#a3adf4]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="passengerCount" className="text-sm font-medium text-gray-700">
                    {t('passengerCountLabel')}
                  </label>
                  <Input
                    id="passengerCount"
                    name="passengerCount"
                    type="number"
                    min="1"
                    value={formData.passengerCount}
                    onChange={handleChange}
                    placeholder={t('passengerCountPlaceholder')}
                    className="rounded-xl border-gray-200 focus:border-[#a3adf4] focus:ring-[#a3adf4]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-10 w-1 bg-[#fa9de3] rounded-full"></div>
                <h2 className="text-2xl font-semibold text-[#222]">{t('additionalInfoTitle')}</h2>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="accessibility" className="text-sm font-medium text-gray-700">
                    {t('accessibilityLabel')}
                  </label>
                  <Input
                    id="accessibility"
                    name="accessibility"
                    value={formData.accessibility}
                    onChange={handleChange}
                    placeholder={t('accessibilityPlaceholder')}
                    className="rounded-xl border-gray-200 focus:border-[#fa9de3] focus:ring-[#fa9de3]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
                    {t('additionalRequestsLabel')}
                  </label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder={t('additionalRequestsPlaceholder')}
                    className="rounded-xl border-gray-200 focus:border-[#fa9de3] focus:ring-[#fa9de3] min-h-[100px]"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-[#fa9de3] hover:bg-[#e989cc] text-black font-semibold text-sm px-8 py-6 h-auto rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {isSubmitting ? t('submittingButton') : t('submitRideRequestButton')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RidePage;
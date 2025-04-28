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

interface DeleteAccountRequest {
  email: string;
  reason: string;
  confirmation: string;
}

const DeletePassengerAccount = () => {
  useScrollTop();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<DeleteAccountRequest>({
    email: "",
    reason: "",
    confirmation: "",
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

  const sendEmail = async (data: DeleteAccountRequest) => {
    const templateParams = {
      to_email: import.meta.env.VITE_ADMIN_EMAIL,
      from_email: data.email,
      subject: "FemRide Passenger Account Deletion Request",
      message: `
Account Deletion Request Details:

Email: ${data.email}
Reason for Deletion: ${data.reason}
Confirmation Text: ${data.confirmation}

This request was submitted through the FemRide Account Deletion Form.
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

    if (formData.confirmation !== "DELETE MY ACCOUNT") {
      toast({
        variant: "destructive",
        title: "Confirmation text does not match",
        description: "Please type 'DELETE MY ACCOUNT' to confirm deletion",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      toast({
        title: "Request Submitted Successfully",
        description: "We will process your account deletion request within 48 hours.",
      });
      setFormData({
        email: "",
        reason: "",
        confirmation: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Error Submitting Request",
        description: "There was a problem submitting your request. Please try again later.",
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
          Back
        </Button>
      </div>

      <div className="pt-6 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">
          Delete Passenger Account
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg px-4">
          We're sorry to see you go. Please fill out this form to request account deletion.
        </p>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your account email"
                  className="rounded-xl border-gray-200 focus:border-[#fa9de3] focus:ring-[#fa9de3]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="reason" className="text-sm font-medium text-gray-700">
                  Reason for Deletion
                </label>
                <Textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Please tell us why you want to delete your account"
                  className="rounded-xl border-gray-200 focus:border-[#fa9de3] focus:ring-[#fa9de3]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmation" className="text-sm font-medium text-gray-700">
                  Confirmation
                </label>
                <Input
                  id="confirmation"
                  name="confirmation"
                  value={formData.confirmation}
                  onChange={handleChange}
                  placeholder="Type 'DELETE MY ACCOUNT' to confirm"
                  className="rounded-xl border-gray-200 focus:border-[#fa9de3] focus:ring-[#fa9de3]"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  Please type 'DELETE MY ACCOUNT' to confirm your request
                </p>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold text-sm px-8 py-6 h-auto rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {isSubmitting ? "Submitting..." : "Delete My Account"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeletePassengerAccount;
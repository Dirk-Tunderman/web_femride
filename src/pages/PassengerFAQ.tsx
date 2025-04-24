import React, { useEffect } from 'react';
import { useLanguage } from "@/lib/LanguageContext";
import Navbar from "@/shared/Navbar";
import { Footer } from "@/shared/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const PassengerFAQ = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Button
            variant="ghost"
            className="mb-8 flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4" />
            {t('backButton')}
          </Button>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
              {t('faqTitlePassengers')}
            </h1>

            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqPassengerQ1')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqPassengerA1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqPassengerQ2')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqPassengerA2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqPassengerQ3')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqPassengerA3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqPassengerQ4')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqPassengerA4')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    How can I delete my passenger account?
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    <p>If you wish to delete your FemRide passenger account, you can submit a deletion request through our dedicated form. Please note that this action is permanent and cannot be undone.</p>
                    <Link 
                      to="/delete-passenger-account" 
                      className="text-[#fa9de3] hover:text-[#e989cc] font-medium mt-2 inline-block"
                    >
                      Click here to delete your passenger account →
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PassengerFAQ; 
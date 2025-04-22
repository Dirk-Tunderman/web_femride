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
import { useNavigate } from "react-router-dom";

const FleetFAQ = () => {
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
              {t('faqTitleFleet')}
            </h1>

            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqFleetQ1')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqFleetA1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqFleetQ2')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqFleetA2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqFleetQ3')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqFleetA3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqFleetQ4')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqFleetA4')}
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

export default FleetFAQ; 
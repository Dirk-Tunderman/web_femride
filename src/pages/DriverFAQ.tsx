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

const DriverFAQ = () => {
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
              {t('faqTitleDrivers')}
            </h1>

            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqDriverQ1')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqDriverA1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqDriverQ2')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    <p className="mb-4">{t('faqDriverA2Part1')}</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <span className="text-[#fa9de3] mr-2">•</span>
                        <span>{t('faqDriverA2Item1')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#fa9de3] mr-2">•</span>
                        <span>{t('faqDriverA2Item2')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#fa9de3] mr-2">•</span>
                        <span>{t('faqDriverA2Item3')}</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqDriverQ3')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqDriverA3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {t('faqDriverQ4')}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-600">
                    {t('faqDriverA4')}
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

export default DriverFAQ; 
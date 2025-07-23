import React, { useEffect } from 'react';
import Navbar from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { useLanguage } from "@/lib/LanguageContext";

const Impressum = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-5xl mt-16">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 border-b border-[#fa9de3]/30 pb-4">
              {isGerman ? 'Impressum' : 'Legal Notice'}
            </h1>
            <p className="text-gray-600 mb-8 text-left">
              {isGerman ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
            </p>
            
            <div className="prose max-w-none text-gray-700 text-left">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Anbieter' : 'Provider'}
              </h2>
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>FemRide UG (haftungsbeschränkt)</strong></p>
                <p className="mb-2">Waldstraße 222A</p>
                <p className="mb-2">12527 Berlin</p>
                <p className="mb-2">Deutschland</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Vertreten durch' : 'Represented by'}
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-2">Aykut Atli (Geschäftsführer)</p>
                <p className="mb-2">Dr. Kerstin Wendt (Geschäftsführerin)</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Kontakt' : 'Contact'}
              </h2>
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-2">
                  <strong>{isGerman ? 'Telefon:' : 'Phone:'}</strong> +49 (0) 30 12345678
                </p>
                <p className="mb-2">
                  <strong>E-Mail:</strong> <a href="mailto:info@femride.de" className="text-[#fa9de3] hover:underline">info@femride.de</a>
                </p>
                <p className="mb-2">
                  <strong>{isGerman ? 'Webseite:' : 'Website:'}</strong> <a href="https://femride.de" className="text-[#fa9de3] hover:underline">www.femride.de</a>
                </p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Registereintrag' : 'Register Entry'}
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-2">
                  <strong>{isGerman ? 'Eintragung im Handelsregister:' : 'Entry in the commercial register:'}</strong>
                </p>
                <p className="mb-2">{isGerman ? 'Registergericht:' : 'Register court:'} Amtsgericht Berlin (Charlottenburg)</p>
                <p className="mb-2">{isGerman ? 'Registernummer:' : 'Registration number:'} HRB 272631 B</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Umsatzsteuer-ID' : 'VAT ID'}
              </h2>
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-2">
                  {isGerman 
                    ? 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:'
                    : 'VAT identification number according to § 27 a VAT Tax Act:'
                  }
                </p>
                <p><strong>DE123456789</strong> {isGerman ? '(wird beantragt)' : '(application pending)'}</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV' : 'Responsible for content according to § 18 para. 2 MStV'}
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-2">Aykut Atli</p>
                <p className="mb-2">Waldstraße 222A</p>
                <p className="mb-2">12527 Berlin</p>
                <p className="mb-2">Deutschland</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'EU-Streitschlichtung' : 'EU Dispute Resolution'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: '
                  : 'The European Commission provides a platform for online dispute resolution (ODR): '
                }
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Unsere E-Mail-Adresse finden Sie oben im Impressum.'
                  : 'You can find our email address above in the legal notice.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Verbraucherstreitbeilegung/Universalschlichtungsstelle' : 'Consumer Dispute Resolution'}
              </h2>
              <p className="mb-6">
                {isGerman
                  ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                  : 'We are not willing or obliged to participate in dispute resolution procedures at a consumer arbitration board.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Haftung für Inhalte' : 'Liability for Contents'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
                  : 'As a service provider, we are liable for own contents of these websites according to Sec. 7, para. 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), we as a service provider are not under obligation to monitor external information provided or stored on our website. Once we have become aware of a specific infringement of law, we will immediately remove the content in question.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Haftung für Links' : 'Liability for Links'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
                  : 'Our website contains links to external websites of third parties. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Urheberrecht' : 'Copyright'}
              </h2>
              <p className="mb-6">
                {isGerman
                  ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
                  : 'Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator.'
                }
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;

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
              {isGerman ? 'Angaben gemäß § 5 TMG und § 55 RStV' : 'Information according to § 5 TMG and § 55 RStV'}
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-sm text-gray-700">
                {isGerman
                  ? 'Dieses Impressum gilt für alle Auftritte der FemRide UG im Internet, einschließlich Social Media Profile und zukünftige mobile Anwendungen.'
                  : 'This legal notice applies to all FemRide UG internet presences, including social media profiles and future mobile applications.'
                }
              </p>
            </div>
            
            <div className="prose max-w-none text-gray-700 text-left">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Diensteanbieter' : 'Service Provider'}
              </h2>
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-3"><strong>FemRide UG (haftungsbeschränkt)</strong></p>
                <p className="mb-2"><strong>{isGerman ? 'Anschrift:' : 'Address:'}</strong></p>
                <p className="mb-1">Waldstraße 222A</p>
                <p className="mb-1">12527 Berlin</p>
                <p className="mb-3">Deutschland</p>
                <p className="mb-2">
                  <strong>{isGerman ? 'Rechtsform:' : 'Legal form:'}</strong>
                  {isGerman ? ' Unternehmergesellschaft (haftungsbeschränkt)' : ' Limited liability company (UG)'}
                </p>
                <p className="mb-2">
                  <strong>{isGerman ? 'Gegenstand des Unternehmens:' : 'Business purpose:'}</strong>
                  {isGerman ? ' Entwicklung und Betrieb einer Fahrvermittlungsplattform für Frauen' : ' Development and operation of a ride-hailing platform for women'}
                </p>
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
                  <strong>E-Mail:</strong> <a href="mailto:info@femride.de" className="text-[#fa9de3] hover:underline">info@femride.de</a>
                </p>
                <p className="mb-2">
                  <strong>{isGerman ? 'Webseite:' : 'Website:'}</strong> <a href="https://femride.de" className="text-[#fa9de3] hover:underline">www.femride.de</a>
                </p>
                <p className="mb-2">
                  <strong>{isGerman ? 'Geschäftszeiten:' : 'Business hours:'}</strong> {isGerman ? 'Montag bis Freitag, 9:00 - 17:00 Uhr' : 'Monday to Friday, 9:00 AM - 5:00 PM'}
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
                {isGerman ? 'Aufsichtsbehörde' : 'Supervisory Authority'}
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-2">
                  {isGerman
                    ? 'Zuständige Aufsichtsbehörde für Datenschutz:'
                    : 'Competent supervisory authority for data protection:'
                  }
                </p>
                <p className="mb-2">Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
                <p className="mb-2">Friedrichstr. 219, 10969 Berlin</p>
                <p className="mb-2">
                  <strong>E-Mail:</strong> <a href="mailto:mailbox@datenschutz-berlin.de" className="text-[#fa9de3] hover:underline">mailbox@datenschutz-berlin.de</a>
                </p>
                <p>
                  <strong>Website:</strong> <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">www.datenschutz-berlin.de</a>
                </p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Berufsrechtliche Regelungen und Aufsicht' : 'Professional Regulations and Supervision'}
              </h2>
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">{isGerman ? 'Anwendbare Gesetze:' : 'Applicable Laws:'}</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>{isGerman ? 'Personenbeförderungsgesetz (PBefG)' : 'Passenger Transport Act (PBefG)'}</li>
                  <li>{isGerman ? 'Straßenverkehrsgesetz (StVG)' : 'Road Traffic Act (StVG)'}</li>
                  <li>{isGerman ? 'Gewerbeordnung (GewO)' : 'Trade Regulation Act (GewO)'}</li>
                  <li>{isGerman ? 'Datenschutz-Grundverordnung (DSGVO)' : 'General Data Protection Regulation (GDPR)'}</li>
                  <li>{isGerman ? 'Telemediengesetz (TMG)' : 'Telemedia Act (TMG)'}</li>
                </ul>
                <p className="mb-3">
                  <strong>{isGerman ? 'Zuständige Behörde:' : 'Competent Authority:'}</strong>
                </p>
                <p className="mb-2">Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz</p>
                <p className="mb-2">Brückenstraße 6, 10179 Berlin</p>
                <p>
                  {isGerman
                    ? 'Weitere Informationen zu den geltenden Bestimmungen finden Sie beim Bundesministerium für Verkehr und digitale Infrastruktur (BMDV).'
                    : 'Further information on applicable regulations can be found at the Federal Ministry of Transport and Digital Infrastructure (BMDV).'
                  }
                </p>
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
              <p className="mb-4">
                {isGerman
                  ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                  : 'We are not willing or obliged to participate in dispute resolution procedures at a consumer arbitration board.'
                }
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">{isGerman ? 'Hinweis zur Streitbeilegung:' : 'Note on Dispute Resolution:'}</h3>
                <p className="mb-3">
                  {isGerman
                    ? 'Die FemRide UG ist als Startup-Unternehmen derzeit nicht zur Teilnahme an Streitbeilegungsverfahren vor Verbraucherschlichtungsstellen verpflichtet. Wir sind jedoch stets bemüht, Streitigkeiten mit unseren Kunden einvernehmlich zu lösen.'
                    : 'FemRide UG, as a startup company, is currently not obligated to participate in dispute resolution procedures before consumer arbitration boards. However, we always strive to resolve disputes with our customers amicably.'
                  }
                </p>
                <p>
                  {isGerman
                    ? 'Bei Beschwerden wenden Sie sich bitte zunächst an unseren Kundenservice unter info@femride.de.'
                    : 'For complaints, please first contact our customer service at info@femride.de.'
                  }
                </p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Redaktionelle Verantwortung' : 'Editorial Responsibility'}
              </h2>
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-3">
                  <strong>{isGerman ? 'Inhaltlich verantwortlich für journalistisch-redaktionelle Inhalte:' : 'Content responsible for journalistic-editorial content:'}</strong>
                </p>
                <p className="mb-2">Aykut Atli</p>
                <p className="mb-2">Waldstraße 222A, 12527 Berlin</p>
                <p className="mb-4">E-Mail: info@femride.de</p>
                <p className="text-sm text-gray-600">
                  {isGerman
                    ? 'Verantwortlich im Sinne des § 18 Abs. 2 MStV (Medienstaatsvertrag)'
                    : 'Responsible within the meaning of § 18 para. 2 MStV (Media State Treaty)'
                  }
                </p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Haftungsausschluss' : 'Disclaimer'}
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Haftung für Inhalte' : 'Liability for Contents'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
                  : 'As a service provider, we are liable for own contents of these websites according to Sec. 7, para. 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), we as a service provider are not under obligation to monitor external information provided or stored on our website. Once we have become aware of a specific infringement of law, we will immediately remove the content in question.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
                  : 'Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the point in time at which knowledge of a specific infringement of law exists. Upon becoming aware of corresponding infringements of law, we will remove this content immediately.'
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

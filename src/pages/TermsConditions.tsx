import React, { useEffect } from 'react';
import Navbar from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { useLanguage } from "@/lib/LanguageContext";

const TermsConditions = () => {
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
              {isGerman ? 'Allgemeine Geschäftsbedingungen' : 'Terms & Conditions'}
            </h1>
            <p className="text-gray-600 mb-8 text-left">
              {isGerman ? 'Gültig ab: 05. April 2025.' : 'Effective from April 05, 2025.'}
            </p>
            
            <div className="prose max-w-none text-gray-700 text-left">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
                {isGerman ? 'Akzeptanz der Allgemeinen Geschäftsbedingungen' : 'Acceptance of Terms and Conditions'}
              </h2>
              <p className="mb-4">
                {isGerman 
                  ? 'Diese AGB, die von Zeit zu Zeit geändert werden können, gelten für die Nutzung unserer Femride App. Durch den Zugriff, das Durchsuchen und die Nutzung unserer Femride App erkennen Sie an und stimmen zu, dass Sie die unten aufgeführten Bedingungen, die auch die Datenschutzrichtlinie umfassen, gelesen, verstanden und akzeptiert haben.'
                  : 'These Terms as may be amended from time to time, apply to the use of our Femride App. By accessing, browsing and using our Femride App, you acknowledge and agree to have read, understood and agreed to the Terms set out below which shall also include the privacy policy.'
                }
              </p>
              
              <p className="mb-8">
                {isGerman
                  ? 'Wir werden Sie per E-Mail oder durch eine Benachrichtigung in der Femride App informieren, falls wir eine wesentliche Änderung an diesen AGB vornehmen. Es wird davon ausgegangen, dass Sie eine solche Änderung akzeptiert haben, wenn Sie die Femride App weiterhin nutzen.'
                  : 'We will notify you by email or through a notification on the Femride App in the event that we make a significant change to these Terms. You will be deemed to have accepted such change if you keep on using the Femride App.'
                }
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Definitionen' : 'Definitions'}
              </h2>
              <p className="mb-2">
                <strong>{isGerman ? '"Konto"' : '"Account"'}</strong> 
                {isGerman
                  ? ' bezeichnet das Konto, das jeder Nutzer beantragen muss, um die Femride App zur Nutzung der Femride-Dienste zu verwenden.'
                  : ' means the account that each User must apply for to use the Femride App to access Femride Services.'
                }
              </p>
              
              <p className="mb-2">
                <strong>{isGerman ? '"Buchung"' : '"Booking"'}</strong> 
                {isGerman
                  ? ' bezeichnet eine Buchung, die ein Fahrgast für Dienstleistungen über einen unserer Buchungskanäle vornimmt.'
                  : ' means a booking made by a Passenger for Services via any of our booking channels.'
                }
              </p>
              
              <p className="mb-2">
                <strong>{isGerman ? '"Fahrerin"' : '"Driver"'}</strong> 
                {isGerman
                  ? ' bezeichnet eine Fahrerin, die die Registrierung für Fahrerinnen abgeschlossen hat und von uns als Fahrerin akzeptiert wurde. Diese Definition erstreckt sich auf jeden lizenzierten Flottenunternehmer, dessen Mitarbeiterinnen oder autorisiertes Personal rechtmäßig Transportdienste über das Konto ausführen dürfen.'
                  : ' mean a driver who has completed the registration for drivers and is accepted by us to participate as a Driver. This definition shall extend to any licenced fleet operator whose employees or authorised personnel may legally carry out Transport Services by using the Account.'
                }
              </p>
              
              <p className="mb-2">
                <strong>{isGerman ? '"Zielort"' : '"Drop-off"'}</strong> 
                {isGerman
                  ? ' bezeichnet den Ankunftsort für den/die Fahrgast/Fahrgäste, der uns bei der Anfrage einer Fahrt angegeben wird.'
                  : ' means the location of arrival for the Passenger/s indicated to us when requesting a trip.'
                }
              </p>
              
              <p className="mb-2">
                <strong>"Femride"</strong> 
                {isGerman
                  ? ' bezeichnet FemRide UG (haftungsbeschränkt), eine deutsche Gesellschaft mit beschränkter Haftung, eingetragen in Berlin, mit einem Stammkapital von 5.000,00 EUR, deren eingetragener Sitz sich in der Waldstraße 222A, 12527 Berlin, Deutschland (die "Gesellschaft") befindet. Die Gesellschaft wurde am 13. Februar 2025 gegründet und wird von Herrn Aykut Atli, geboren am 7. November 1996 in Berlin, geführt. In diesen AGB bezieht sich jeder Verweis auf die Begriffe "uns", "wir" oder "unser" auf Femride.'
                  : ' means FemRide UG (haftungsbeschränkt), a German limited liability company, registered in Berlin, with a share capital of 5,000.00 EUR, whose registered office is situated at Waldstraße 222A, 12527 Berlin, Germany (the \'Company\'). The company was established on February 13, 2025 and is managed by Mr. Aykut Atli, born on November 7, 1996 in Berlin. Throughout these Terms any reference to the terms \'us\', \'we\' or \'our\' will be a reference to Femride.'
                }
              </p>
              
              <p className="mb-2"><strong>"Femride App"</strong> means the software program provided by Femride downloaded by You on any electronic device.</p>
              
              <p className="mb-2"><strong>"Femride Circle"</strong> means the loyalty scheme operated by Femride.</p>
              
              <p className="mb-2"><strong>"Femride Services"</strong> means the services provided by Femride to Passengers and shall include the Transport Services.</p>
              
              <p className="mb-2"><strong>"Passenger"</strong> means the person requesting Transport Services via any of our booking channels.</p>
              
              <p className="mb-2"><strong>"Pick-up"</strong> means the location of departure for the Passenger/s indicated to us when requesting a trip.</p>
              
              <p className="mb-2"><strong>"Privacy Policy"</strong> means the privacy policy which is accessible on our Website and Femride App.</p>
              
              <p className="mb-2"><strong>"Services"</strong> means the services provided by us to you which shall include the Transport Services.</p>
              
              <p className="mb-2"><strong>"Terms"</strong> means these terms and conditions.</p>
              
              <p className="mb-2"><strong>"Transport Services"</strong> means the transportation services provided to you by the Driver.</p>
              
              <p className="mb-2"><strong>"User"</strong> refers to anyone who downloads the Femride App.</p>
              
              <p className="mb-2"><strong>"Website"</strong> means www.femride.de</p>
              
              <p className="mb-2"><strong>"You"</strong> means the individual accessing or using the Femride App, or the company, or other legal entity on behalf of which such individual is accessing or using the Femride App, as applicable.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Nutzung der Femride App' : 'Using the Femride App'}
              </h2>
              
              <p className="mb-4">
                {isGerman
                  ? 'Sie müssen mindestens 18 Jahre alt sein, um die Femride App nutzen zu können. Durch die Nutzung der Femride App garantieren und versichern Sie, dass Sie mindestens 18 Jahre alt sind.'
                  : 'You must be at least 18 years old to use the Femride App. By using the Femride App, you warrant and represent that you are at least 18 years old.'
                }
              </p>
              
              <p className="mb-4">
                {isGerman
                  ? 'Sie müssen sich für ein Konto registrieren, um auf bestimmte Funktionen der Femride App zugreifen und diese nutzen zu können. Bei der Registrierung für ein Konto müssen Sie bestimmte persönliche Informationen angeben, wie Ihren Namen, Ihre E-Mail-Adresse und Ihre Telefonnummer. Sie sind dafür verantwortlich, sicherzustellen, dass die von Ihnen angegebenen Informationen korrekt und aktuell sind.'
                  : 'You must register for an Account in order to access and use certain features of the Femride App. When you register for an Account, you will be required to provide certain personal information, such as your name, email address, and phone number. You are responsible for ensuring that the information you provide is accurate and up-to-date.'
                }
              </p>
              
              <p className="mb-4">
                {isGerman
                  ? 'Sie sind dafür verantwortlich, die Vertraulichkeit Ihrer Kontoanmeldedaten zu wahren. Sie dürfen Ihre Anmeldedaten mit keinem anderen Person teilen. Falls Sie der Meinung sind, dass Ihr Konto kompromittiert wurde, müssen Sie uns unverzüglich mitteilen.'
                  : 'You are responsible for maintaining the confidentiality of your Account login credentials. You must not share your login credentials with any other person. If you believe that your Account has been compromised, you must notify us immediately.'
                }
              </p>
              
              <p className="mb-4">
                {isGerman
                  ? 'Sie sind dafür verantwortlich für alle Aktivitäten, die unter Ihrem Konto auftreten. Sie dürfen Ihr Konto nicht für irgendwelche illegalen oder unbefugten Zwecke verwenden.'
                  : 'You are responsible for all activity that occurs under your Account. You must not use your Account for any illegal or unauthorized purpose.'
                }
              </p>
              
              <p className="mb-4">
                {isGerman
                  ? 'Wir behalten uns das Recht vor, Ihr Konto jederzeit, aus beliebigen Gründen und ohne Vorankündigung zu sperren oder zu terminieren.'
                  : 'We reserve the right to suspend or terminate your Account at any time, for any reason, without notice.'
                }
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Buchung einer Fahrt' : 'Booking a Ride'}
              </h2>
              
              <p className="mb-4">
                {isGerman
                  ? 'Sie können eine Fahrt über die Femride App buchen. Bei der Buchung einer Fahrt müssen Sie bestimmte Informationen angeben, wie Ihren Abholort, Ihren Zielort und die Anzahl der Fahrgäste.'
                  : 'You can book a ride through the Femride App. When you book a ride, you will be required to provide certain information, such as your Pick-up location, your Drop-off location, and the number of passengers.'
                }
              </p>
              
              <p className="mb-4">
                {isGerman
                  ? 'Wir werden angemessene Anstrengungen unternehmen, um eine Fahrerin zu finden, die Ihnen Transportdienste anbietet. Wir können jedoch nicht garantieren, dass wir für jede Fahrtanfrage eine Fahrerin finden können.'
                  : 'We will use reasonable efforts to find a Driver to provide you with Transport Services. However, we do not guarantee that we will be able to find a Driver for every ride request.'
                }
              </p>
              
              <p className="mb-4">
                {isGerman
                  ? 'Die Preisangabe für die Fahrt wird Ihnen vor der Buchung der Fahrt angezeigt. Der Preis kann je nach Fahrtentfernung, Fahrzeit und Fahrtdemand variieren.'
                  : 'The price of the ride will be displayed to you before you book the ride. The price may vary depending on factors such as the distance of the ride, the time of day, and the demand for rides.'
                }
              </p>
              
              <p className="mb-4">
                {isGerman
                  ? 'Sie sind dafür verantwortlich, den Preis für die Fahrt zu zahlen. Sie können den Preis für die Fahrt über die Femride App mit einer Kreditkarte oder einem anderen von uns akzeptierten Zahlungsmittel zahlen.'
                  : 'You are responsible for paying the price of the ride. You can pay for the ride through the Femride App using a credit card or other payment method that we accept.'
                }
              </p>
              
              <p className="mb-4">
                {isGerman
                  ? 'Wir behalten uns das Recht vor, Ihre Fahrt jederzeit, aus beliebigen Gründen und ohne Vorankündigung zu stornieren. Wenn wir Ihre Fahrt stornieren, geben wir Ihnen den Preis für die Fahrt zurück.'
                  : 'We reserve the right to cancel your ride at any time, for any reason, without notice. If we cancel your ride, we will refund you the price of the ride.'
                }
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Ihr Verhalten' : 'Your Conduct'}
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-4">
                  {isGerman
                    ? 'Sie erklären sich damit einverstanden, bei der Nutzung der Femride App und beim Erhalt von Transportdiensten alle geltenden Gesetze und Vorschriften einzuhalten.'
                    : 'You agree to comply with all applicable laws and regulations when using the Femride App and receiving Transport Services.'
                  }
                </p>
                
                <p className="mb-4">
                  {isGerman
                    ? 'Sie verpflichten sich, die Femride App oder Transportdienste nicht für illegale oder unbefugte Zwecke zu nutzen.'
                    : 'You agree not to use the Femride App or receive Transport Services for any illegal or unauthorized purpose.'
                  }
                </p>
                
                <p className="mb-4">
                  {isGerman
                    ? 'Sie verpflichten sich, die Femride App oder die Transportdienste nicht zu stören oder zu unterbrechen.'
                    : 'You agree not to interfere with or disrupt the Femride App or the Transport Services.'
                  }
                </p>
                
                <p className="mb-4">
                  {isGerman
                    ? 'Sie verpflichten sich, keine Fahrerin oder Fahrgast zu belästigen, zu bedrohen oder zu beleidigen.'
                    : 'You agree not to harass, threaten, or abuse any Driver or other user of the Femride App.'
                  }
                </p>
                
                <p className="mb-4">
                  {isGerman
                    ? 'Sie verpflichten sich, keine Eigentumsrechte von Femride, einer Fahrerin oder einem anderen Nutzer der Femride App zu beschädigen oder zu vernichten.'
                    : 'You agree not to damage or destroy any property belonging to Femride, a Driver, or another user of the Femride App.'
                  }
                </p>
                
                <p className="mb-4">
                  {isGerman
                    ? 'Sie verpflichten sich, nicht mehr als ein Konto zu eröffnen.'
                    : 'You agree not to create more than one account.'
                  }
                </p>
                
                <p className="mb-4">
                  {isGerman
                    ? 'Sie verpflichten sich, keine falsche Identität zu imitieren oder einen Namen zu verwenden, den Sie nicht berechtigt sind zu verwenden.'
                    : 'You agree not to impersonate any other person or use a false name or a name you are not authorised to use.'
                  }
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Geistiges Eigentum' : 'Intellectual Property'}
              </h2>
              
              <p className="mb-4">
                {isGerman
                  ? 'Die Femride App und alle Inhalte, die in der Femride App enthalten sind, wie Text, Grafiken, Logos, Bilder und Software, sind Eigentum von Femride oder seinen Lizenzgebern und durch Urheberrechte und andere Gesetze zum Schutz des geistigen Eigentums geschützt.'
                  : 'The Femride App and all content included on the Femride App, such as text, graphics, logos, images, and software, is the property of Femride or its licensors and is protected by copyright and other intellectual property laws.'
                }
              </p>
              
              <p className="mb-4">
                {isGerman
                  ? 'Sie dürfen keine Inhalte aus der Femride App verwenden, ohne unsere ausdrückliche schriftliche Genehmigung.'
                  : 'You may not use any content from the Femride App without our express written permission.'
                }
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Haftungsausschluss' : 'Disclaimer of Warranties'}
              </h2>
              
              <p className="mb-4">
                {isGerman
                  ? 'DIE FEMRIDE APP UND DIE TRANSPORTDIENSTE WERDEN "WIE GESEHEN" UND "WIE VERFÜGBAR" OHNE JEGLICHE GARANTIE, WEDER AUSDRÜCKLICH NOCH STILLSCHWEIGEND, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN GARANTIEN DER MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG VON RECHTEN DRITTER, BEREITGESTELLT.'
                  : 'THE FEMRIDE APP AND THE TRANSPORT SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.'
                }
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Kontakt' : 'Contact Us'}
              </h2>
              
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-4">
                  {isGerman
                    ? 'Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte unter: '
                    : 'If you have any questions about these Terms, please contact us at: '
                  }
                  <a href="mailto:info@femride.de" className="text-[#fa9de3] hover:underline">info@femride.de</a>
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Schlussbestimmungen' : 'Final Provisions'}
              </h2>
              
              <p className="mb-4">
                {isGerman
                  ? 'Die Bedingungen unterliegen in jeder Hinsicht dem deutschen Recht und werden entsprechend ausgelegt. Jeder Streit bezüglich der Auslegung oder Durchsetzung der Bedingungen unterliegt der ausschließlichen Zuständigkeit der Berliner Gerichte.'
                  : 'The Terms will be governed by and construed in all respects in accordance with the laws of Germany. Any dispute concerning the interpretation or enforcement of the Terms shall be subject to the exclusive jurisdiction of the Berlin Courts.'
                }
              </p>
              
              <p className="mb-8">
                {isGerman
                  ? 'Die Nichtigkeit einer der Bestimmungen oder Absätze dieser AGB berührt nicht die Anwendbarkeit der anderen Bestimmungen oder Absätze. In einer solchen Situation werden die nichtigen Bestimmungen oder Absätze durch neue Bestimmungen oder Absätze ersetzt, deren Inhalt, Umfang und Zweck so weit wie möglich den alten, nichtigen Bestimmungen entsprechen.'
                  : 'Nullity of one of the provisions or paragraphs thereof in these Terms shall not affect the applicability of the other provisions or other paragraphs. In such a situation, the null and void provisions or paragraphs thereof shall be replaced by new provisions or paragraphs, the contents, scope and objective of which correspond as far as possible with the old, null and void, provisions.'
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

export default TermsConditions;

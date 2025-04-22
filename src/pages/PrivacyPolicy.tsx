import React, { useEffect } from 'react';
import Navbar from '../shared/Navbar';
import { Footer } from '../shared/Footer';
import { useLanguage } from "@/lib/LanguageContext";

const PrivacyPolicy = () => {
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
              {isGerman ? 'Datenschutzrichtlinie' : 'Privacy Policy'}
            </h1>
            <p className="text-gray-600 mb-8 text-left">
              {isGerman ? 'Gültig ab: 05. April 2025.' : 'Effective from April 05, 2025.'}
            </p>
            
            <div className="prose max-w-none text-gray-700 text-left">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
                {isGerman ? 'Einleitung' : 'Introduction'}
              </h2>
              <p className="mb-4">
                {isGerman 
                  ? 'Femride (nachfolgend als "wir", "uns" oder "unser" bezeichnet) ist bestrebt, den Schutz Ihrer Privatsphäre zu gewährleisten. Diese Datenschutzrichtlinie erklärt, wie wir Ihre personenbezogenen Daten bei der Nutzung der Femride App und der Femride-Dienste erheben, nutzen, offenlegen, übertragen und speichern.'
                  : 'Femride (referred to as "we", "us" or "our") is committed to ensuring your privacy is protected. This Privacy Policy explains how we collect, use, disclose, transfer and store your personal data when you use the Femride App and Femride Services.'
                }
              </p>
              
              <p className="mb-8">
                {isGerman
                  ? 'Durch die Nutzung der Femride App und der Femride-Dienste stimmen Sie den in dieser Datenschutzrichtlinie beschriebenen Praktiken zu.'
                  : 'By using the Femride App and Femride Services, you consent to the practices described in this Privacy Policy.'
                }
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Welche Daten wir erheben' : 'Information We Collect'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Wir erheben verschiedene Arten von Informationen, die Sie uns zur Verfügung stellen, und solche, die wir automatisch erheben, wenn Sie die Femride App und die Femride-Dienste nutzen.'
                  : 'We collect various types of information that you provide to us, and information that we collect automatically when you use the Femride App and Femride Services.'
                }
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Informationen, die Sie uns zur Verfügung stellen' : 'Information You Provide to Us'}
              </h3>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>
                  <strong>{isGerman ? 'Registrierungsinformationen:' : 'Registration Information:'}</strong> 
                  {isGerman
                    ? ' Wenn Sie sich für ein Konto registrieren, erheben wir Informationen wie Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer und Ihr Passwort.'
                    : ' When you register for an Account, we collect information such as your name, email address, phone number, and password.'
                  }
                </li>
                <li>
                  <strong>{isGerman ? 'Profilinformationen:' : 'Profile Information:'}</strong> 
                  {isGerman
                    ? ' Wir erheben Informationen, die Sie in Ihrem Profil angeben, wie Ihr Profilbild und andere Details, die Sie uns zur Verfügung stellen möchten.'
                    : ' We collect information that you provide in your profile, such as your profile picture and other details you wish to provide us with.'
                  }
                </li>
                <li>
                  <strong>{isGerman ? 'Zahlungsinformationen:' : 'Payment Information:'}</strong> 
                  {isGerman
                    ? ' Wenn Sie Zahlungen über die Femride App tätigen, erheben wir Zahlungsinformationen, wie Kreditkartendaten oder andere Zahlungsmethoden.'
                    : ' When you make payments through the Femride App, we collect payment information, such as credit card details or other payment methods.'
                  }
                </li>
                <li>
                  <strong>{isGerman ? 'Kommunikation:' : 'Communications:'}</strong> 
                  {isGerman
                    ? ' Wenn Sie uns kontaktieren, erheben wir Informationen, die Sie in Ihren Nachrichten angeben.'
                    : ' When you contact us, we collect information that you provide in your messages.'
                  }
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Automatisch erhobene Informationen' : 'Information We Collect Automatically'}
              </h3>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li>
                  <strong>{isGerman ? 'Standortinformationen:' : 'Location Information:'}</strong> 
                  {isGerman
                    ? ' Wir erheben Informationen über Ihren Standort, wenn Sie die Femride App nutzen, einschließlich Ihres Abhol- und Zielortes für eine Fahrt.'
                    : ' We collect information about your location when you use the Femride App, including your pick-up and drop-off locations for a ride.'
                  }
                </li>
                <li>
                  <strong>{isGerman ? 'Geräteinformationen:' : 'Device Information:'}</strong> 
                  {isGerman
                    ? ' Wir erheben Informationen über das Gerät, das Sie für den Zugriff auf die Femride App verwenden, wie Gerätetyp, Betriebssystem, eindeutige Gerätekennung, IP-Adresse und mobile Netzwerkinformationen.'
                    : ' We collect information about the device you use to access the Femride App, such as device type, operating system, unique device identifier, IP address, and mobile network information.'
                  }
                </li>
                <li>
                  <strong>{isGerman ? 'Nutzungsinformationen:' : 'Usage Information:'}</strong> 
                  {isGerman
                    ? ' Wir erheben Informationen darüber, wie Sie die Femride App nutzen, wie die von Ihnen aufgerufenen Seiten oder Bereiche der Femride App, die Zeit und Dauer Ihrer Besuche und andere Informationen über Ihre Interaktionen mit der Femride App.'
                    : ' We collect information about how you use the Femride App, such as the pages or areas of the Femride App that you visit, the time and duration of your visits, and other information about your interactions with the Femride App.'
                  }
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Wie wir Ihre Informationen verwenden' : 'How We Use Your Information'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Wir verwenden die von uns erhobenen Informationen für verschiedene Zwecke, darunter:'
                  : 'We use the information we collect for various purposes, including:'
                }
              </p>
              
              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li>
                  {isGerman
                    ? 'Um Ihnen die Femride App und die Femride-Dienste zur Verfügung zu stellen, zu personalisieren und zu verbessern.'
                    : 'To provide, personalize, and improve the Femride App and Femride Services.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Um Fahrten zu bearbeiten und zu vermitteln.'
                    : 'To process and facilitate rides.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Um mit Ihnen zu kommunizieren, einschließlich der Bereitstellung von Kundenservice.'
                    : 'To communicate with you, including providing customer service.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Um Ihre Sicherheit zu gewährleisten und die Einhaltung unserer Nutzungsbedingungen zu überwachen.'
                    : 'To ensure your safety and monitor compliance with our Terms of Use.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Um unsere Produkte und Dienstleistungen zu vermarkten und zu bewerben.'
                    : 'To market and promote our products and services.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Um betrügerische, unbefugte oder illegale Aktivitäten zu erkennen, zu verhindern und zu bekämpfen.'
                    : 'To detect, prevent, and address fraudulent, unauthorized, or illegal activity.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Um unseren gesetzlichen Verpflichtungen nachzukommen.'
                    : 'To comply with our legal obligations.'
                  }
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Wie wir Ihre Informationen weitergeben' : 'How We Share Your Information'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Wir können Ihre Informationen unter bestimmten Umständen an bestimmte Dritte weitergeben, darunter:'
                  : 'We may share your information with certain third parties in certain circumstances, including:'
                }
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>{isGerman ? 'Fahrerinnen:' : 'Drivers:'}</strong> 
                    {isGerman
                      ? ' Wir geben bestimmte Informationen an Fahrerinnen weiter, die Ihnen Transportdienste anbieten, wie Ihren Namen, Ihren Abhol- und Zielort und Ihre Kontaktdaten.'
                      : ' We share certain information with Drivers who provide you with Transport Services, such as your name, pick-up and drop-off locations, and contact information.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Dienstleister:' : 'Service Providers:'}</strong> 
                    {isGerman
                      ? ' Wir können Ihre Informationen an Dienstleister weitergeben, die Dienste für uns erbringen, wie Zahlungsabwicklung, Datenanalyse und Kundenservice.'
                      : ' We may share your information with service providers who perform services for us, such as payment processing, data analysis, and customer service.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Gesetzliche Anforderungen:' : 'Legal Requirements:'}</strong> 
                    {isGerman
                      ? ' Wir können Ihre Informationen offenlegen, wenn wir gesetzlich dazu verpflichtet sind oder als Reaktion auf rechtmäßige Anfragen von Behörden.'
                      : ' We may disclose your information if required to do so by law or in response to valid requests by public authorities.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Geschäftsübertragungen:' : 'Business Transfers:'}</strong> 
                    {isGerman
                      ? ' Wir können Ihre Informationen im Zusammenhang mit einer Fusion, Übernahme, Umstrukturierung, Verkauf von Vermögenswerten oder ähnlichen Geschäftstransaktionen übertragen.'
                      : ' We may transfer your information in connection with a merger, acquisition, reorganization, sale of assets, or similar business transaction.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Mit Ihrer Zustimmung:' : 'With Your Consent:'}</strong> 
                    {isGerman
                      ? ' Wir können Ihre Informationen auch in anderen Fällen mit Ihrer Zustimmung weitergeben.'
                      : ' We may also share your information in other instances with your consent.'
                    }
                  </li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Datensicherheit' : 'Data Security'}
              </h2>
              <p className="mb-8">
                {isGerman
                  ? 'Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten vor Verlust, Missbrauch und unbefugtem Zugriff, Weitergabe, Änderung und Zerstörung zu schützen. Bitte beachten Sie jedoch, dass keine Internet-Übertragung oder elektronische Speicherung vollständig sicher ist. Daher können wir die absolute Sicherheit Ihrer personenbezogenen Daten nicht garantieren.'
                  : 'We implement appropriate security measures to protect your personal data against loss, misuse, and unauthorized access, disclosure, alteration, and destruction. However, please note that no Internet transmission or electronic storage is completely secure. Therefore, we cannot guarantee the absolute security of your personal data.'
                }
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Ihre Rechte' : 'Your Rights'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Je nach geltendem Recht haben Sie möglicherweise bestimmte Rechte in Bezug auf Ihre personenbezogenen Daten, darunter:'
                  : 'Depending on applicable law, you may have certain rights regarding your personal data, including:'
                }
              </p>
              
              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li>
                  {isGerman
                    ? 'Das Recht auf Zugang zu Ihren personenbezogenen Daten.'
                    : 'The right to access your personal data.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Das Recht auf Berichtigung unrichtiger personenbezogener Daten.'
                    : 'The right to rectification of inaccurate personal data.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Das Recht auf Löschung Ihrer personenbezogenen Daten.'
                    : 'The right to erasure of your personal data.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Das Recht auf Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.'
                    : 'The right to restriction of processing of your personal data.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Das Recht auf Datenübertragbarkeit.'
                    : 'The right to data portability.'
                  }
                </li>
                <li>
                  {isGerman
                    ? 'Das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.'
                    : 'The right to object to the processing of your personal data.'
                  }
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Änderungen dieser Datenschutzrichtlinie' : 'Changes to This Privacy Policy'}
              </h2>
              <p className="mb-8">
                {isGerman
                  ? 'Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir eine Benachrichtigung in der Femride App veröffentlichen oder Ihnen eine E-Mail senden.'
                  : 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice in the Femride App or by sending you an email.'
                }
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Kontakt' : 'Contact Us'}
              </h2>
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-4">
                  {isGerman
                    ? 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter: '
                    : 'If you have any questions about this Privacy Policy, please contact us at: '
                  }
                  <a href="mailto:info@femride.de" className="text-[#fa9de3] hover:underline">info@femride.de</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

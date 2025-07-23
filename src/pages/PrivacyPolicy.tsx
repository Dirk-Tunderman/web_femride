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
                {isGerman ? 'Cookies und ähnliche Technologien' : 'Cookies and Similar Technologies'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Unsere Website verwendet Cookies und ähnliche Technologien. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen.'
                  : 'Our website uses cookies and similar technologies. Cookies are small text files that are stored on your device when you visit our website.'
                }
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Notwendige Cookies' : 'Necessary Cookies'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden. Sie speichern keine persönlich identifizierbaren Informationen.'
                  : 'These cookies are necessary for the website to function and cannot be disabled. They do not store personally identifiable information.'
                }
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Analyse-Cookies' : 'Analytics Cookies'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden. Diese Cookies werden nur mit Ihrer Einwilligung gesetzt.'
                  : 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. These cookies are only set with your consent.'
                }
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Cookie-Verwaltung' : 'Cookie Management'}
              </h3>
              <p className="mb-6">
                {isGerman
                  ? 'Sie können Ihre Cookie-Präferenzen jederzeit über die Cookie-Einstellungen Ihres Browsers verwalten. Beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Website beeinträchtigen kann.'
                  : 'You can manage your cookie preferences at any time through your browser\'s cookie settings. Please note that disabling certain cookies may affect the functionality of our website.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Drittanbieter-Services und Tools' : 'Third-Party Services and Tools'}
              </h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Cloudflare' : 'Cloudflare'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Wir nutzen den Service von Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA ("Cloudflare") zur Optimierung und Sicherung unserer Website. Cloudflare fungiert als Content Delivery Network (CDN) und Web Application Firewall (WAF). Dabei werden Ihre IP-Adresse und weitere technische Daten verarbeitet, um die Ladezeiten zu verbessern und Angriffe abzuwehren.'
                  : 'We use the service of Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA ("Cloudflare") to optimize and secure our website. Cloudflare acts as a Content Delivery Network (CDN) and Web Application Firewall (WAF). Your IP address and other technical data are processed to improve loading times and defend against attacks.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Unser berechtigtes Interesse liegt in der sicheren und effizienten Bereitstellung unserer Website.'
                  : 'The legal basis for processing is Art. 6 para. 1 lit. f GDPR (legitimate interest). Our legitimate interest lies in the secure and efficient provision of our website.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von Cloudflare: '
                  : 'More information can be found in Cloudflare\'s privacy policy: '
                }
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://www.cloudflare.com/privacypolicy/
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Google Analytics' : 'Google Analytics'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"). Google Analytics verwendet Cookies und ähnliche Technologien, um die Nutzung der Website zu analysieren.'
                  : 'This website uses Google Analytics, a web analytics service provided by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"). Google Analytics uses cookies and similar technologies to analyze website usage.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Die Verarbeitung erfolgt nur nach Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen in Ihrem Browser ändern.'
                  : 'Processing only occurs after your explicit consent according to Art. 6 para. 1 lit. a GDPR. You can withdraw your consent at any time by changing the cookie settings in your browser.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von Google: '
                  : 'More information can be found in Google\'s privacy policy: '
                }
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://policies.google.com/privacy
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Cookie-Consent-Tool' : 'Cookie Consent Tool'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Wir verwenden ein eigenes Cookie-Consent-Tool, um Ihre Einwilligung zur Verwendung von Cookies und ähnlichen Technologien einzuholen. Das Tool speichert Ihre Präferenzen lokal in Ihrem Browser und überträgt keine personenbezogenen Daten an externe Server.'
                  : 'We use our own cookie consent tool to obtain your consent for the use of cookies and similar technologies. The tool stores your preferences locally in your browser and does not transmit any personal data to external servers.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Die Speicherung Ihrer Consent-Präferenzen erfolgt auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) zur Erfüllung der Cookie-Richtlinie.'
                  : 'The storage of your consent preferences is based on Art. 6 para. 1 lit. c GDPR (legal obligation) to comply with the cookie directive.'
                }
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Resend (E-Mail-Service)' : 'Resend (Email Service)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Für den Versand von E-Mails (z.B. Wartelisten-Bestätigungen) nutzen wir den Service von Resend, Inc. Dabei werden Ihre E-Mail-Adresse und der Nachrichteninhalt an Resend übertragen.'
                  : 'For sending emails (e.g., waitlist confirmations), we use the service of Resend, Inc. Your email address and message content are transmitted to Resend.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bei Wartelisten-Anmeldungen.'
                  : 'The legal basis is Art. 6 para. 1 lit. b GDPR (contract performance) or Art. 6 para. 1 lit. a GDPR (consent) for waitlist registrations.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von Resend: '
                  : 'More information can be found in Resend\'s privacy policy: '
                }
                <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://resend.com/legal/privacy-policy
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Supabase (Datenbank-Service)' : 'Supabase (Database Service)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Wir nutzen Supabase, Inc. für die Speicherung und Verwaltung von Benutzerdaten (Wartelisten-Anmeldungen). Supabase ist ein Cloud-Datenbank-Service mit Servern in der EU.'
                  : 'We use Supabase, Inc. for storing and managing user data (waitlist registrations). Supabase is a cloud database service with servers in the EU.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für Wartelisten-Anmeldungen und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für technische Speicherung.'
                  : 'The legal basis is Art. 6 para. 1 lit. a GDPR (consent) for waitlist registrations and Art. 6 para. 1 lit. f GDPR (legitimate interest) for technical storage.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von Supabase: '
                  : 'More information can be found in Supabase\'s privacy policy: '
                }
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://supabase.com/privacy
                </a>
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Ihre Rechte als betroffene Person' : 'Your Rights as a Data Subject'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:'
                  : 'You have the following rights regarding your personal data:'
                }
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>{isGerman ? 'Auskunftsrecht (Art. 15 DSGVO):' : 'Right of access (Art. 15 GDPR):'}</strong>
                    {isGerman
                      ? ' Sie können Auskunft über die von uns verarbeiteten personenbezogenen Daten verlangen.'
                      : ' You can request information about the personal data we process about you.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Berichtigungsrecht (Art. 16 DSGVO):' : 'Right to rectification (Art. 16 GDPR):'}</strong>
                    {isGerman
                      ? ' Sie können die Berichtigung unrichtiger Daten verlangen.'
                      : ' You can request the correction of incorrect data.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Löschungsrecht (Art. 17 DSGVO):' : 'Right to erasure (Art. 17 GDPR):'}</strong>
                    {isGerman
                      ? ' Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.'
                      : ' You can request the deletion of your data, provided there are no legal retention obligations.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Einschränkungsrecht (Art. 18 DSGVO):' : 'Right to restriction (Art. 18 GDPR):'}</strong>
                    {isGerman
                      ? ' Sie können die Einschränkung der Verarbeitung verlangen.'
                      : ' You can request the restriction of processing.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Datenübertragbarkeit (Art. 20 DSGVO):' : 'Data portability (Art. 20 GDPR):'}</strong>
                    {isGerman
                      ? ' Sie können die Übertragung Ihrer Daten an einen anderen Anbieter verlangen.'
                      : ' You can request the transfer of your data to another provider.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Widerspruchsrecht (Art. 21 DSGVO):' : 'Right to object (Art. 21 GDPR):'}</strong>
                    {isGerman
                      ? ' Sie können der Verarbeitung Ihrer Daten widersprechen.'
                      : ' You can object to the processing of your data.'
                    }
                  </li>
                  <li>
                    <strong>{isGerman ? 'Widerruf der Einwilligung:' : 'Withdrawal of consent:'}</strong>
                    {isGerman
                      ? ' Sie können erteilte Einwilligungen jederzeit widerrufen.'
                      : ' You can withdraw given consents at any time.'
                    }
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                {isGerman
                  ? 'Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter: '
                  : 'To exercise your rights, please contact us at: '
                }
                <a href="mailto:privacy@femride.de" className="text-[#fa9de3] hover:underline">privacy@femride.de</a>
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Beschwerderecht' : 'Right to Lodge a Complaint'}
              </h2>
              <p className="mb-6">
                {isGerman
                  ? 'Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die für uns zuständige Aufsichtsbehörde ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.'
                  : 'You have the right to lodge a complaint with a supervisory authority regarding our processing of your personal data. The supervisory authority responsible for us is the Berlin Commissioner for Data Protection and Freedom of Information.'
                }
              </p>

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

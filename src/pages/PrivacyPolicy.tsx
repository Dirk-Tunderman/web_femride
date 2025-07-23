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
                {isGerman ? 'Verantwortlicher' : 'Data Controller'}
              </h2>
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-2">
                  {isGerman
                    ? 'Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:'
                    : 'The data controller within the meaning of the General Data Protection Regulation (GDPR) is:'
                  }
                </p>
                <p className="mb-2"><strong>FemRide UG (haftungsbeschränkt)</strong></p>
                <p className="mb-2">Waldstraße 222A, 12527 Berlin</p>
                <p className="mb-2">
                  <strong>E-Mail:</strong> <a href="mailto:privacy@femride.de" className="text-[#fa9de3] hover:underline">privacy@femride.de</a>
                </p>
                <p>
                  <strong>{isGerman ? 'Vertreten durch:' : 'Represented by:'}</strong> Aykut Atli, Dr. Kerstin Wendt
                </p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
                {isGerman ? 'Datenschutzbeauftragter' : 'Data Protection Officer'}
              </h2>
              <p className="mb-6">
                {isGerman
                  ? 'Aufgrund der Größe unseres Unternehmens sind wir derzeit nicht verpflichtet, einen Datenschutzbeauftragten zu bestellen. Bei Fragen zum Datenschutz wenden Sie sich bitte direkt an uns unter privacy@femride.de.'
                  : 'Due to the size of our company, we are currently not required to appoint a data protection officer. For data protection questions, please contact us directly at privacy@femride.de.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
                {isGerman ? 'Geltungsbereich und Zweck' : 'Scope and Purpose'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten") im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot").'
                  : 'This privacy policy informs you about the nature, scope and purpose of the processing of personal data (hereinafter referred to as "data") within the framework of the provision of our services as well as within our online offering and the websites, functions and content associated with it as well as external online presences (hereinafter collectively referred to as "online offering").'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung" oder „Verantwortlicher" verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).'
                  : 'With regard to the terminology used, such as "processing" or "controller", we refer to the definitions in Art. 4 of the General Data Protection Regulation (GDPR).'
                }
              </p>

              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">{isGerman ? 'Geltungsbereich:' : 'Scope:'}</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>{isGerman ? 'Website: www.femride.de' : 'Website: www.femride.de'}</li>
                  <li>{isGerman ? 'Zukünftige FemRide-App (in Entwicklung)' : 'Future FemRide app (in development)'}</li>
                  <li>{isGerman ? 'Wartelisten-Funktionalität' : 'Waitlist functionality'}</li>
                  <li>{isGerman ? 'Kontaktformulare und E-Mail-Kommunikation' : 'Contact forms and email communication'}</li>
                  <li>{isGerman ? 'Social Media Verlinkungen' : 'Social media links'}</li>
                </ul>
              </div>
              
              <p className="mb-8">
                {isGerman
                  ? 'Durch die Nutzung der Femride App und der Femride-Dienste stimmen Sie den in dieser Datenschutzrichtlinie beschriebenen Praktiken zu.'
                  : 'By using the Femride App and Femride Services, you consent to the practices described in this Privacy Policy.'
                }
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Kategorien verarbeiteter Daten' : 'Categories of Processed Data'}
              </h2>
              <p className="mb-6">
                {isGerman
                  ? 'Wir verarbeiten personenbezogene Daten nur im Rahmen der gesetzlichen Bestimmungen. Nachfolgend informieren wir Sie über die konkreten Kategorien personenbezogener Daten, die wir verarbeiten, sowie über die Zwecke der Verarbeitung:'
                  : 'We process personal data only within the framework of legal provisions. Below we inform you about the specific categories of personal data that we process, as well as the purposes of processing:'
                }
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Wartelisten-Registrierung (Art. 6 Abs. 1 lit. a DSGVO)' : 'Waitlist Registration (Art. 6 para. 1 lit. a GDPR)'}
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-3">
                  <strong>{isGerman ? 'Verarbeitungsvorgang:' : 'Processing operation:'}</strong>
                  {isGerman ? ' Anmeldung zur Warteliste für die FemRide-App' : ' Registration for the FemRide app waitlist'}
                </p>
                <p className="mb-2"><strong>{isGerman ? 'Kategorien personenbezogener Daten:' : 'Categories of personal data:'}</strong></p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>{isGerman ? 'Kontaktdaten: E-Mail-Adresse' : 'Contact data: Email address'}</li>
                  <li>{isGerman ? 'Nutzungsdaten: Nutzertyp (Fahrgast/Fahrerin)' : 'Usage data: User type (passenger/driver)'}</li>
                  <li>{isGerman ? 'Metadaten: Zeitpunkt der Anmeldung, IP-Adresse (anonymisiert)' : 'Metadata: Registration timestamp, IP address (anonymized)'}</li>
                  <li>{isGerman ? 'Referral-Daten: Empfehlungscode (falls verwendet)' : 'Referral data: Referral code (if used)'}</li>
                </ul>
                <p className="mb-2">
                  <strong>{isGerman ? 'Verarbeitungszwecke:' : 'Processing purposes:'}</strong>
                  {isGerman ? ' Verwaltung der Warteliste, Benachrichtigung über App-Verfügbarkeit, Priorisierung basierend auf Anmeldezeitpunkt' : ' Waitlist management, notification about app availability, prioritization based on registration time'}
                </p>
                <p className="mb-2">
                  <strong>{isGerman ? 'Rechtsgrundlage:' : 'Legal basis:'}</strong>
                  {isGerman ? ' Art. 6 Abs. 1 lit. a DSGVO (Einwilligung der betroffenen Person)' : ' Art. 6 para. 1 lit. a GDPR (consent of the data subject)'}
                </p>
                <p className="mb-2">
                  <strong>{isGerman ? 'Speicherdauer:' : 'Retention period:'}</strong>
                  {isGerman ? ' Bis zum App-Launch + 24 Monate oder bis zum Widerruf der Einwilligung' : ' Until app launch + 24 months or until consent withdrawal'}
                </p>
                <p>
                  <strong>{isGerman ? 'Empfänger:' : 'Recipients:'}</strong>
                  {isGerman ? ' Supabase Inc. (Datenbank-Hosting), Resend Inc. (E-Mail-Versand)' : ' Supabase Inc. (database hosting), Resend Inc. (email delivery)'}
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Kontaktformular' : 'Contact Form'}
              </h3>
              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>{isGerman ? 'Erhobene Daten:' : 'Data collected:'}</strong></p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>{isGerman ? 'Name' : 'Name'}</li>
                  <li>{isGerman ? 'E-Mail-Adresse' : 'Email address'}</li>
                  <li>{isGerman ? 'Telefonnummer (optional)' : 'Phone number (optional)'}</li>
                  <li>{isGerman ? 'Nachrichteninhalt' : 'Message content'}</li>
                </ul>
                <p className="mb-2"><strong>{isGerman ? 'Zweck:' : 'Purpose:'}</strong> {isGerman ? 'Bearbeitung von Anfragen, Kundenservice' : 'Processing inquiries, customer service'}</p>
                <p className="mb-2"><strong>{isGerman ? 'Rechtsgrundlage:' : 'Legal basis:'}</strong> {isGerman ? 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)' : 'Art. 6 para. 1 lit. f GDPR (legitimate interest)'}</p>
                <p><strong>{isGerman ? 'Speicherdauer:' : 'Retention period:'}</strong> {isGerman ? '3 Jahre nach Abschluss der Korrespondenz' : '3 years after completion of correspondence'}</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Technische Daten' : 'Technical Data'}
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>{isGerman ? 'Automatisch erhobene Daten:' : 'Automatically collected data:'}</strong></p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>{isGerman ? 'IP-Adresse (anonymisiert)' : 'IP address (anonymized)'}</li>
                  <li>{isGerman ? 'Browser-Typ und -Version' : 'Browser type and version'}</li>
                  <li>{isGerman ? 'Betriebssystem' : 'Operating system'}</li>
                  <li>{isGerman ? 'Referrer-URL' : 'Referrer URL'}</li>
                  <li>{isGerman ? 'Zugriffszeitpunkt' : 'Access time'}</li>
                </ul>
                <p className="mb-2"><strong>{isGerman ? 'Zweck:' : 'Purpose:'}</strong> {isGerman ? 'Technische Bereitstellung, Sicherheit, Fehleranalyse' : 'Technical provision, security, error analysis'}</p>
                <p className="mb-2"><strong>{isGerman ? 'Rechtsgrundlage:' : 'Legal basis:'}</strong> {isGerman ? 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)' : 'Art. 6 para. 1 lit. f GDPR (legitimate interest)'}</p>
                <p><strong>{isGerman ? 'Speicherdauer:' : 'Retention period:'}</strong> {isGerman ? '7 Tage (Server-Logs)' : '7 days (server logs)'}</p>
              </div>
              
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
                {isGerman ? 'Rechtsgrundlagen der Verarbeitung' : 'Legal Basis for Processing'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage für die Verarbeitung personenbezogener Daten.'
                  : 'Insofar as we obtain consent from the data subject for processing operations of personal data, Art. 6 para. 1 lit. a EU General Data Protection Regulation (GDPR) serves as the legal basis for the processing of personal data.'
                }
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">{isGerman ? 'Übersicht der Rechtsgrundlagen:' : 'Overview of Legal Bases:'}</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong>
                    {isGerman ? ' Einwilligung (Wartelisten-Anmeldung, Analytics-Cookies)' : ' Consent (waitlist registration, analytics cookies)'}
                  </li>
                  <li>
                    <strong>Art. 6 Abs. 1 lit. b DSGVO:</strong>
                    {isGerman ? ' Vertragserfüllung (zukünftige App-Nutzung)' : ' Contract performance (future app usage)'}
                  </li>
                  <li>
                    <strong>Art. 6 Abs. 1 lit. c DSGVO:</strong>
                    {isGerman ? ' Rechtliche Verpflichtung (Aufbewahrungsfristen, Impressumspflicht)' : ' Legal obligation (retention periods, legal notice requirements)'}
                  </li>
                  <li>
                    <strong>Art. 6 Abs. 1 lit. f DSGVO:</strong>
                    {isGerman ? ' Berechtigte Interessen (Website-Sicherheit, Kontaktanfragen, technische Bereitstellung)' : ' Legitimate interests (website security, contact inquiries, technical provision)'}
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)' : 'Legitimate Interests (Art. 6 para. 1 lit. f GDPR)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Ist die Verarbeitung zur Wahrung unserer oder der berechtigten Interessen eines Dritten erforderlich und überwiegen diese Interessen die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.'
                  : 'If processing is necessary to protect our legitimate interests or those of a third party and these interests do not override the interests or fundamental rights and freedoms of the data subject, Art. 6 para. 1 lit. f GDPR serves as the legal basis for processing.'
                }
              </p>

              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>{isGerman ? 'Unsere berechtigten Interessen umfassen:' : 'Our legitimate interests include:'}</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isGerman ? 'Gewährleistung der IT-Sicherheit und des Betriebs der Website' : 'Ensuring IT security and website operation'}</li>
                  <li>{isGerman ? 'Bearbeitung von Kundenanfragen und Kommunikation' : 'Processing customer inquiries and communication'}</li>
                  <li>{isGerman ? 'Verbesserung unserer Dienstleistungen und Nutzererfahrung' : 'Improving our services and user experience'}</li>
                  <li>{isGerman ? 'Schutz vor Missbrauch und betrügerischen Aktivitäten' : 'Protection against abuse and fraudulent activities'}</li>
                  <li>{isGerman ? 'Erfüllung regulatorischer Anforderungen im Mobilitätssektor' : 'Meeting regulatory requirements in the mobility sector'}</li>
                </ul>
              </div>

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
                {isGerman ? 'Google Analytics 4 & Google Tag Manager' : 'Google Analytics 4 & Google Tag Manager'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Diese Website benutzt Google Analytics 4, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"). Google Analytics verwendet Cookies und ähnliche Technologien, um die Nutzung der Website zu analysieren. Das Tracking-Script wird über Google Tag Manager (gtag.js) geladen.'
                  : 'This website uses Google Analytics 4, a web analytics service provided by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"). Google Analytics uses cookies and similar technologies to analyze website usage. The tracking script is loaded via Google Tag Manager (gtag.js).'
                }
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="mb-2"><strong>{isGerman ? 'Verwendete Google-Services:' : 'Google Services Used:'}</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Google Analytics 4 (Tracking-ID: G-EZZ2025DS8)</li>
                  <li>Google Tag Manager (gtag.js)</li>
                  <li>{isGerman ? 'Google-Server für Script-Bereitstellung' : 'Google servers for script delivery'}</li>
                </ul>
              </div>

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
                {isGerman ? 'Cookie-Consent-Tool (Eigenentwicklung)' : 'Cookie Consent Tool (Self-Developed)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Wir verwenden ein selbst entwickeltes Cookie-Consent-Tool, um Ihre Einwilligung zur Verwendung von Cookies und ähnlichen Technologien einzuholen. Das Tool ist vollständig lokal implementiert und überträgt keine Daten an externe Server.'
                  : 'We use a self-developed cookie consent tool to obtain your consent for the use of cookies and similar technologies. The tool is fully implemented locally and does not transmit any data to external servers.'
                }
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="mb-2"><strong>{isGerman ? 'Gespeicherte Daten (lokal im Browser):' : 'Stored data (locally in browser):'}</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isGerman ? 'Einwilligungsstatus (akzeptiert/abgelehnt)' : 'Consent status (accepted/declined)'}</li>
                  <li>{isGerman ? 'Zeitstempel der Einwilligung' : 'Consent timestamp'}</li>
                  <li>{isGerman ? 'Version der Einwilligungserklärung' : 'Consent declaration version'}</li>
                  <li>{isGerman ? 'Granulare Cookie-Kategorien' : 'Granular cookie categories'}</li>
                </ul>
              </div>

              <p className="mb-4">
                {isGerman
                  ? 'Bei Ablehnung werden automatisch alle nicht-notwendigen Cookies gelöscht und das Laden von Tracking-Skripten verhindert. Bei Zustimmung werden nur die explizit gewählten Cookie-Kategorien aktiviert.'
                  : 'Upon decline, all non-necessary cookies are automatically deleted and loading of tracking scripts is prevented. Upon consent, only explicitly chosen cookie categories are activated.'
                }
              </p>

              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) zur Erfüllung der Cookie-Richtlinie und Art. 7 DSGVO für die Dokumentation der Einwilligung.'
                  : 'The legal basis is Art. 6 para. 1 lit. c GDPR (legal obligation) to comply with the cookie directive and Art. 7 GDPR for documenting consent.'
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
                {isGerman ? 'Supabase (Datenbank-Service & JavaScript-Client)' : 'Supabase (Database Service & JavaScript Client)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Wir nutzen Supabase, Inc. für die Speicherung und Verwaltung von Benutzerdaten (Wartelisten-Anmeldungen). Supabase ist ein Cloud-Datenbank-Service mit Servern in der EU. Die Verbindung erfolgt über die Supabase JavaScript-Client-Bibliothek.'
                  : 'We use Supabase, Inc. for storing and managing user data (waitlist registrations). Supabase is a cloud database service with servers in the EU. Connection is established via the Supabase JavaScript client library.'
                }
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="mb-2"><strong>{isGerman ? 'Verwendete Supabase-Services:' : 'Supabase Services Used:'}</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isGerman ? 'PostgreSQL-Datenbank (EU-Server)' : 'PostgreSQL database (EU servers)'}</li>
                  <li>{isGerman ? 'Supabase JavaScript-Client (@supabase/supabase-js)' : 'Supabase JavaScript client (@supabase/supabase-js)'}</li>
                  <li>{isGerman ? 'API-Endpunkte für Datenoperationen' : 'API endpoints for data operations'}</li>
                  <li>{isGerman ? 'RPC-Funktionen für Wartelisten-Verwaltung' : 'RPC functions for waitlist management'}</li>
                </ul>
              </div>

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

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'EmailJS (E-Mail-Service & Browser-Bibliothek)' : 'EmailJS (Email Service & Browser Library)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Für den Versand von Kontaktformular-E-Mails nutzen wir EmailJS, einen Service von EmailJS Ltd. Die Integration erfolgt über die EmailJS Browser-Bibliothek (@emailjs/browser). Dabei werden Ihre E-Mail-Adresse, Name und der Nachrichteninhalt an EmailJS übertragen.'
                  : 'For sending contact form emails, we use EmailJS, a service by EmailJS Ltd. Integration is done via the EmailJS browser library (@emailjs/browser). Your email address, name, and message content are transmitted to EmailJS.'
                }
              </p>

              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-4">
                <p className="mb-2"><strong>{isGerman ? 'Verwendete EmailJS-Komponenten:' : 'EmailJS Components Used:'}</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isGerman ? 'EmailJS Browser-Bibliothek (@emailjs/browser)' : 'EmailJS browser library (@emailjs/browser)'}</li>
                  <li>{isGerman ? 'EmailJS API-Endpunkte' : 'EmailJS API endpoints'}</li>
                  <li>{isGerman ? 'E-Mail-Templates und Service-Konfiguration' : 'Email templates and service configuration'}</li>
                </ul>
              </div>

              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur Bearbeitung von Kundenanfragen.'
                  : 'The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest) for processing customer inquiries.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von EmailJS: '
                  : 'More information can be found in EmailJS\'s privacy policy: '
                }
                <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://www.emailjs.com/legal/privacy-policy/
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Vercel (Hosting-Service)' : 'Vercel (Hosting Service)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Unsere Website wird über Vercel Inc. gehostet. Vercel verarbeitet technische Daten wie IP-Adressen, Browser-Informationen und Zugriffszeitpunkte für die Bereitstellung der Website.'
                  : 'Our website is hosted via Vercel Inc. Vercel processes technical data such as IP addresses, browser information, and access times for website provision.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur technischen Bereitstellung der Website.'
                  : 'The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest) for technical website provision.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel: '
                  : 'More information can be found in Vercel\'s privacy policy: '
                }
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'jsDelivr CDN (Schriftarten)' : 'jsDelivr CDN (Fonts)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Wir nutzen jsDelivr CDN für das Laden von Webschriftarten (Gilroy Font). Dabei wird Ihre IP-Adresse an die Server von jsDelivr übertragen, um die Schriftdateien bereitzustellen.'
                  : 'We use jsDelivr CDN for loading web fonts (Gilroy Font). Your IP address is transmitted to jsDelivr servers to provide the font files.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur einheitlichen Darstellung der Website.'
                  : 'The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest) for consistent website presentation.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von jsDelivr: '
                  : 'More information can be found in jsDelivr\'s privacy policy: '
                }
                <a href="https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Social Media Plattformen (Weiterleitung)' : 'Social Media Platforms (Redirect)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Unsere Website enthält Funktionen zum Teilen von Inhalten auf sozialen Medien (WhatsApp, Facebook, LinkedIn, X/Twitter, Threads). Diese Funktionen leiten Sie direkt zu den jeweiligen Plattformen weiter, ohne dass Daten an diese übertragen werden, bevor Sie die Weiterleitung bestätigen.'
                  : 'Our website contains functions for sharing content on social media (WhatsApp, Facebook, LinkedIn, X/Twitter, Threads). These functions redirect you directly to the respective platforms without transmitting data to them before you confirm the redirect.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur Bereitstellung von Sharing-Funktionen.'
                  : 'The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest) for providing sharing functions.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Hinweis: Sobald Sie auf eine Weiterleitung klicken, gelten die Datenschutzbestimmungen der jeweiligen Plattform.'
                  : 'Note: Once you click on a redirect, the privacy policies of the respective platform apply.'
                }
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Instagram (Social Media Integration)' : 'Instagram (Social Media Integration)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Unsere Website enthält Verlinkungen zu unserem Instagram-Profil. Instagram ist ein Service der Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.'
                  : 'Our website contains links to our Instagram profile. Instagram is a service of Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur Bereitstellung von Social Media Verlinkungen.'
                  : 'The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest) for providing social media links.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von Instagram: '
                  : 'More information can be found in Instagram\'s privacy policy: '
                }
                <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://help.instagram.com/519522125107875
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'LinkedIn (Social Media Integration)' : 'LinkedIn (Social Media Integration)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Unsere Website enthält Verlinkungen zu unserem LinkedIn-Profil und Sharing-Funktionen. LinkedIn ist ein Service der LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland.'
                  : 'Our website contains links to our LinkedIn profile and sharing functions. LinkedIn is a service of LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur Bereitstellung von Social Media Funktionen.'
                  : 'The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest) for providing social media functions.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von LinkedIn: '
                  : 'More information can be found in LinkedIn\'s privacy policy: '
                }
                <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://www.linkedin.com/legal/privacy-policy
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Lovable CDN (Bild-Hosting)' : 'Lovable CDN (Image Hosting)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Für das Hosting von Bildern und statischen Inhalten nutzen wir den Lovable CDN-Service. Dabei werden technische Daten wie IP-Adressen an die Lovable-Server übertragen, um die Bilder bereitzustellen.'
                  : 'For hosting images and static content, we use the Lovable CDN service. Technical data such as IP addresses are transmitted to Lovable servers to provide the images.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur technischen Bereitstellung von Website-Inhalten.'
                  : 'The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest) for technical provision of website content.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Weitere Informationen finden Sie in der Datenschutzerklärung von Lovable: '
                  : 'More information can be found in Lovable\'s privacy policy: '
                }
                <a href="https://lovable.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  https://lovable.dev/privacy
                </a>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                {isGerman ? 'Google Drive (Interne Dokumentenverwaltung)' : 'Google Drive (Internal Document Management)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'Für die interne Verwaltung von Geschäftsdokumenten nutzen wir Google Drive, einen Service der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Drive wird ausschließlich für interne Zwecke verwendet und verarbeitet keine Website-Besucherdaten.'
                  : 'For internal management of business documents, we use Google Drive, a service of Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Drive is used exclusively for internal purposes and does not process website visitor data.'
                }
              </p>
              <p className="mb-4">
                {isGerman
                  ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur internen Geschäftsabwicklung.'
                  : 'The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest) for internal business operations.'
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
                {isGerman ? 'Entwicklungstools (nur Entwicklungsumgebung)' : 'Development Tools (Development Environment Only)'}
              </h3>
              <p className="mb-4">
                {isGerman
                  ? 'In der Entwicklungsumgebung verwenden wir das Lovable Tagger Tool zur Verbesserung der Entwicklererfahrung. Dieses Tool ist nur in der Entwicklungsphase aktiv und wird nicht in der Produktionsumgebung geladen.'
                  : 'In the development environment, we use the Lovable Tagger tool to improve the developer experience. This tool is only active during development and is not loaded in the production environment.'
                }
              </p>
              <p className="mb-6">
                {isGerman
                  ? 'Hinweis: Dieses Tool verarbeitet keine Benutzerdaten und ist für Website-Besucher nicht sichtbar oder aktiv.'
                  : 'Note: This tool does not process user data and is not visible or active for website visitors.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Speicherdauer und Löschung' : 'Retention Period and Deletion'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.'
                  : 'We store your personal data only as long as necessary for the respective purposes or as required by legal retention periods.'
                }
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">{isGerman ? 'Konkrete Speicherfristen:' : 'Specific Retention Periods:'}</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>{isGerman ? 'Wartelisten-Daten:' : 'Waitlist data:'}</strong>
                    {isGerman ? ' Bis zum App-Launch + 2 Jahre oder bis zum Widerruf der Einwilligung' : ' Until app launch + 2 years or until consent withdrawal'}
                  </li>
                  <li>
                    <strong>{isGerman ? 'Kontaktanfragen:' : 'Contact inquiries:'}</strong>
                    {isGerman ? ' 3 Jahre nach Abschluss der Korrespondenz' : ' 3 years after completion of correspondence'}
                  </li>
                  <li>
                    <strong>{isGerman ? 'Server-Logs:' : 'Server logs:'}</strong>
                    {isGerman ? ' 7 Tage (automatische Löschung)' : ' 7 days (automatic deletion)'}
                  </li>
                  <li>
                    <strong>{isGerman ? 'Cookie-Einwilligungen:' : 'Cookie consents:'}</strong>
                    {isGerman ? ' 12 Monate (dann erneute Abfrage)' : ' 12 months (then re-query)'}
                  </li>
                  <li>
                    <strong>{isGerman ? 'Analytics-Daten:' : 'Analytics data:'}</strong>
                    {isGerman ? ' 14 Monate (Google Analytics Standard)' : ' 14 months (Google Analytics standard)'}
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                {isGerman
                  ? 'Sie können jederzeit die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Kontaktieren Sie uns unter privacy@femride.de.'
                  : 'You can request deletion of your data at any time, provided there are no legal retention obligations. Contact us at privacy@femride.de.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Datenübertragung in Drittländer' : 'Data Transfer to Third Countries'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Einige der von uns genutzten Dienstleister haben ihren Sitz außerhalb der Europäischen Union oder verarbeiten dort Daten. Dies erfolgt nur, wenn ein angemessenes Datenschutzniveau gewährleistet ist.'
                  : 'Some of the service providers we use are based outside the European Union or process data there. This only occurs when an adequate level of data protection is ensured.'
                }
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">{isGerman ? 'Internationale Datenübertragungen:' : 'International Data Transfers:'}</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Google Analytics 4 & Tag Manager:</strong> {isGerman ? 'Übertragung in die USA auf Basis von Standardvertragsklauseln und zusätzlichen Schutzmaßnahmen (gtag.js von googletagmanager.com)' : 'Transfer to USA based on standard contractual clauses and additional protective measures (gtag.js from googletagmanager.com)'}
                  </li>
                  <li>
                    <strong>Cloudflare:</strong> {isGerman ? 'Globales CDN mit Datenverarbeitung in verschiedenen Regionen, einschließlich EU-Servern' : 'Global CDN with data processing in various regions, including EU servers'}
                  </li>
                  <li>
                    <strong>Resend:</strong> {isGerman ? 'E-Mail-Service mit Servern in der EU und USA' : 'Email service with servers in EU and USA'}
                  </li>
                  <li>
                    <strong>EmailJS:</strong> {isGerman ? 'E-Mail-Service mit Servern in verschiedenen Regionen (Browser-Bibliothek)' : 'Email service with servers in various regions (browser library)'}
                  </li>
                  <li>
                    <strong>Vercel:</strong> {isGerman ? 'Hosting-Service mit globaler Infrastruktur, einschließlich EU-Servern' : 'Hosting service with global infrastructure, including EU servers'}
                  </li>
                  <li>
                    <strong>jsDelivr CDN:</strong> {isGerman ? 'Globales CDN für Schriftarten mit Servern weltweit (Gilroy Font)' : 'Global CDN for fonts with servers worldwide (Gilroy Font)'}
                  </li>
                  <li>
                    <strong>Supabase:</strong> {isGerman ? 'Datenbank-Service mit EU-Servern (JavaScript-Client-Bibliothek)' : 'Database service with EU servers (JavaScript client library)'}
                  </li>
                  <li>
                    <strong>Instagram (Meta):</strong> {isGerman ? 'Social Media Verlinkungen (Irland/USA)' : 'Social media links (Ireland/USA)'}
                  </li>
                  <li>
                    <strong>LinkedIn:</strong> {isGerman ? 'Social Media Verlinkungen und Sharing (Irland/USA)' : 'Social media links and sharing (Ireland/USA)'}
                  </li>
                  <li>
                    <strong>Google Drive:</strong> {isGerman ? 'Interne Dokumentenverwaltung (USA)' : 'Internal document management (USA)'}
                  </li>
                  <li>
                    <strong>Lovable CDN:</strong> {isGerman ? 'Bild-Hosting und statische Inhalte' : 'Image hosting and static content'}
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                {isGerman
                  ? 'Sie haben das Recht, eine Kopie der geeigneten Garantien zu erhalten, die für die Übertragung Ihrer Daten in Drittländer getroffen wurden. Kontaktieren Sie uns unter privacy@femride.de.'
                  : 'You have the right to obtain a copy of the appropriate safeguards taken for the transfer of your data to third countries. Contact us at privacy@femride.de.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Automatisierte Entscheidungsfindung und Profiling' : 'Automated Decision Making and Profiling'}
              </h2>
              <p className="mb-6">
                {isGerman
                  ? 'Wir setzen keine automatisierte Entscheidungsfindung oder Profiling im Sinne von Art. 22 DSGVO ein. Alle Entscheidungen bezüglich Ihrer Daten werden von Menschen getroffen oder unterliegen einer menschlichen Überprüfung.'
                  : 'We do not use automated decision-making or profiling within the meaning of Art. 22 GDPR. All decisions regarding your data are made by humans or subject to human review.'
                }
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-l-4 border-[#fa9de3] pl-4">
                {isGerman ? 'Datensicherheit' : 'Data Security'}
              </h2>
              <p className="mb-4">
                {isGerman
                  ? 'Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer personenbezogenen Daten vor unbefugtem Zugriff, Verlust, Zerstörung oder Veränderung.'
                  : 'We take appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, destruction, or alteration.'
                }
              </p>

              <div className="bg-[#fa9de3]/10 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">{isGerman ? 'Sicherheitsmaßnahmen:' : 'Security Measures:'}</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>{isGerman ? 'SSL/TLS-Verschlüsselung für alle Datenübertragungen' : 'SSL/TLS encryption for all data transmissions'}</li>
                  <li>{isGerman ? 'Sichere Datenbankverbindungen mit Verschlüsselung' : 'Secure database connections with encryption'}</li>
                  <li>{isGerman ? 'Regelmäßige Sicherheitsupdates und Patches' : 'Regular security updates and patches'}</li>
                  <li>{isGerman ? 'Zugriffskontrolle und Berechtigungsmanagement' : 'Access control and permission management'}</li>
                  <li>{isGerman ? 'Monitoring und Logging von Systemzugriffen' : 'Monitoring and logging of system access'}</li>
                </ul>
              </div>

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

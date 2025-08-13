import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';
type Translations = Record<string, Record<Language, string>>;

// Translations for different components
export const translations: Translations = {
  // Navigation
  navSupport: {
    de: 'Support',
    en: 'Support'
  },
  navRegister: {
    de: 'Registrieren',
    en: 'Register'
  },

  // Footer
  footerTerms: {
    de: 'AGB',
    en: 'Terms & Conditions'
  },
  footerPrivacy: {
    de: 'Datenschutz',
    en: 'Privacy Policy'
  },
  footerImpressum: {
    de: 'Impressum',
    en: 'Legal Notice'
  },
  footerRights: {
    de: 'Alle Rechte vorbehalten.',
    en: 'All rights reserved.'
  },

  // Founder Section
  founderTitle: {
    de: 'Gründer & CEO',
    en: 'Founder & CEO'
  },
  founderText1: {
    de: 'Sicherheit und Chancengleichheit stehen für uns an erster Stelle. Mit FemRide haben wir es uns zur Aufgabe gemacht, die Straßen sicherer und freier für alle Frauen zu gestalten. Dafür setzen wir auf starke Partnerschaften mit Unternehmen, NGOs und Behörden, die unsere Vision teilen. Denn echte Veränderung entsteht nur gemeinsam – für eine Zukunft, in der Frauen sich überall frei und unbesorgt bewegen können.',
    en: 'Safety and equal opportunities are our top priorities. With FemRide, we have made it our mission to make roads safer and freer for all women. To achieve this, we rely on strong partnerships with companies, NGOs and authorities who share our vision. Because real change only happens together - for a future where women can move freely and without worry everywhere.'
  },
  founderText2: {
    de: 'Als Mann setze ich mich bewusst für diese Mission ein, denn jeder von uns hat eine Frau in seinem Leben – sei es eine Mutter, Schwester, Tochter, Partnerin oder Freundin – für die es sich lohnt, eine sicherere und gerechtere Welt zu schaffen. Doch darüber hinaus geht es nicht nur um Einzelpersonen, sondern um die gesellschaftliche Verantwortung, die wir alle tragen.',
    en: "As a man, I am consciously committed to this mission because each of us has a woman in our life - whether a mother, sister, daughter, partner or friend - for whom it is worth creating a safer and more just world. But beyond that, it's not just about individuals, but about the social responsibility that we all bear."
  },

  // Hero Section
  heroTagline: {
    de: 'FemRide',
    en: 'FemRide'
  },
  heroTitle1: {
    de: 'Driven for Women',
    en: 'Driven for Women'
  },
  heroTitle2: {
    de: 'by Women',
    en: 'by Women'
  },
  heroSubtitle: {
    de: 'FemRide - Europas erste Ride-Hailing-App nur für Frauen (sichere Fahrvermittlung)',
    en: 'FemRide - Europe\'s first ride-hailing platform, exclusively for women'
  },
  heroButton: {
    de: 'FemRide App herunterladen',
    en: 'Get the FemRide app'
  },
  heroComingSoon: {
    de: 'Verfügbar ab Sommer 2025',
    en: 'Coming soon to Google Play & App Store'
  },

  // Job Advertisement Section
  jobAdHeader: {
    de: 'WIR STELLEN EIN',
    en: 'NOW HIRING'
  },
  jobAdTitle: {
    de: 'Fahrerinnen gesucht',
    en: 'Female Drivers Wanted'
  },
  jobAdOnlyWomen: {
    de: 'Nur für Frauen • Only for Women',
    en: 'Only for Women • Nur für Frauen'
  },
  jobAdLocation: {
    de: 'Berlin',
    en: 'Berlin'
  },
  jobAdType: {
    de: 'Vollzeit, Teilzeit',
    en: 'Full-time, Part-time'
  },
  jobAdRequirement: {
    de: 'Mit P-Schein',
    en: 'With P-License'
  },
  jobAdDescription: {
    de: 'Werde Teil von FemRide und fahre für Europas erste Ride-Hailing-App nur für Frauen. Flexible Arbeitszeiten, faire Bezahlung und transparente Konditionen.',
    en: 'Join FemRide and drive for Europe\'s first ride-hailing app exclusively for women. Flexible working hours, fair pay and transparent conditions.'
  },
  jobAdButton: {
    de: 'Jetzt bewerben',
    en: 'Apply now'
  },
  jobAdRequirements: {
    de: 'Gültiger Personenbeförderungsschein (P-Schein)',
    en: 'Valid passenger transport license (P-license)'
  },

  // Services Section
  servicesTitle: {
    de: 'Was wir anbieten',
    en: 'What we offer'
  },
  servicesSubtitle: {
    de: 'Entdecke unsere maßgeschneiderten Dienste für Fahrgäste, Fahrerinnen und Flottenpartner',
    en: 'Discover our tailored services for passengers, drivers, and fleet partners'
  },
  servicesHeader1: {
    de: 'FÜR FAHRGÄSTE',
    en: 'FOR PASSENGERS'
  },
  servicesTitle1: {
    de: 'Buche deine erste Fahrt',
    en: 'Book your first ride'
  },
  servicesDesc1: {
    de: 'Nur für Frauen – mit geprüften Fahrerinnen für deinen Schutz.',
    en: 'Exclusively for women, with verified drivers, for maximum safety and trust.'
  },
  servicesButton1: {
    de: 'Jetzt buchen',
    en: 'Book now'
  },
  servicesHeader2: {
    de: 'FÜR FAHRERINNEN',
    en: 'FOR DRIVERS'
  },
  servicesTitle2: {
    de: 'Fahrerin werden',
    en: 'Become a driver'
  },
  servicesDesc2: {
    de: 'Fahre nur Frauen, verdiene fair und werde Teil unserer Community.',
    en: 'Drive exclusively women, earn fairly and be part of FemRide and our community.'
  },
  servicesButton2: {
    de: 'Jetzt Fahrerin werden',
    en: 'Become a driver now'
  },
  driverEmailSubject: {
    de: 'Interesse an FemRide Fahrerin Position',
    en: 'Interest in FemRide Driver Position'
  },
  driverEmailBody: {
    de: 'Hallo FemRide Team,\n\nich bin interessiert daran, als Fahrerin bei FemRide zu arbeiten. Bitte kontaktiert mich für weitere Informationen über den Bewerbungsprozess.\n\nVielen Dank!\n\nMit freundlichen Grüßen',
    en: 'Hello FemRide Team,\n\nI am interested in becoming a driver with FemRide. Please contact me for more information about the application process.\n\nThank you!\n\nBest regards'
  },
  driverRedirectTitle: {
    de: 'E-Mail wird geöffnet...',
    en: 'Opening email...'
  },
  driverRedirectMessage: {
    de: 'Wir öffnen dein E-Mail-Programm mit einer vorausgefüllten Nachricht an unser Team.',
    en: 'We are opening your email client with a pre-filled message to our team.'
  },
  driverRedirectNote: {
    de: 'Du wirst in Kürze zur Startseite weitergeleitet.',
    en: 'You will be redirected to the homepage shortly.'
  },
  driverFormMessageLabel: {
    de: 'Nachricht',
    en: 'Message'
  },
  driverFormMessagePlaceholder: {
    de: 'Erzähle uns, warum du Fahrerin bei FemRide werden möchtest...',
    en: 'Tell us why you want to become a driver with FemRide...'
  },
  driverApplicationEmailSubject: {
    de: 'Neue Fahrerbewerbung - FemRide',
    en: 'New Driver Application - FemRide'
  },
  driverApplicationSuccessTitle: {
    de: 'Bewerbung gesendet!',
    en: 'Application Sent!'
  },
  driverApplicationSuccessDesc: {
    de: 'Vielen Dank für dein Interesse! Wir werden deine Bewerbung prüfen und uns in Kürze bei dir melden.',
    en: 'Thank you for your interest! We will review your application and get back to you soon.'
  },
  driverApplicationErrorTitle: {
    de: 'Fehler beim Senden',
    en: 'Sending Failed'
  },
  driverApplicationErrorDesc: {
    de: 'Es gab einen Fehler beim Senden deiner Bewerbung. Bitte versuche es später erneut.',
    en: 'There was an error sending your application. Please try again later.'
  },
  driverFormSubmitting: {
    de: 'Wird gesendet...',
    en: 'Sending...'
  },
  driverFormSubmit: {
    de: 'Bewerbung senden',
    en: 'Send Application'
  },
  servicesHeader3: {
    de: 'FÜR UNTERNEHMEN',
    en: 'FOR BUSINESSES'
  },
  servicesTitle3: {
    de: 'Flottenpartner werden',
    en: 'Become a fleet partner'
  },
  servicesDesc3: {
    de: "Mehr Auslastung für deine Flotte – profitiere vom FemRide-Erfolg.",
    en: "Maximize your fleet utilization and benefit from FemRide's growth and attractive conditions."
  },
  servicesButton3: {
    de: 'Jetzt Flottenpartner werden',
    en: 'Become a fleet partner now'
  },

  // Contact Section
  contactHeader: {
    de: 'KONTAKT',
    en: 'CONTACT'
  },
  contactTitle: {
    de: 'Interessiert an einer Zusammenarbeit mit FemRide?',
    en: 'Interested in collaborating with FemRide?'
  },
  contactText1: {
    de: 'Du hast eine Taxi-Flotte und willst mehr verdienen?',
    en: 'Are you a fleet entrepreneur and want to use your vehicles through FemRide?'
  },
  contactText2: {
    de: 'Du bist Fahrerin und möchtest Teil unserer Plattform werden?',
    en: 'Are you a driver and want to become part of our platform?'
  },
  contactText3: {
    de: 'Oder du möchtest mit uns kooperieren, weil du unsere Vision teilst?',
    en: 'Or would you like to cooperate with us because you share our vision?'
  },
  contactText4: {
    de: 'Dann kontaktiere uns über das Formular – wir melden uns schnell zurück!',
    en: 'Then contact us using the form – we will get back to you immediately!'
  },
  contactText5: {
    de: 'Wir freuen uns darauf, gemeinsam Mobilität sicherer zu machen.',
    en: 'We look forward to making mobility safer and fairer together.'
  },
  contactNameLabel: {
    de: 'Name',
    en: 'Name'
  },
  contactNamePlaceholder: {
    de: 'Dein vollständiger Name',
    en: 'Your full name'
  },
  contactEmailLabel: {
    de: 'E-Mail',
    en: 'Email'
  },
  contactEmailPlaceholder: {
    de: 'Deine E-Mail-Adresse',
    en: 'Your email address'
  },
  contactPhoneLabel: {
    de: 'Telefon',
    en: 'Phone'
  },
  contactPhonePlaceholder: {
    de: 'Deine Telefonnummer (optional)',
    en: 'Your phone number (optional)'
  },
  contactMessageLabel: {
    de: 'Nachricht',
    en: 'Message'
  },
  contactMessagePlaceholder: {
    de: 'Deine Nachricht an uns...',
    en: 'Your message to us...'
  },
  contactSubmitButton: {
    de: 'Absenden',
    en: 'Submit'
  },
  contactSuccessTitle: {
    de: 'Nachricht gesendet',
    en: 'Message sent'
  },
  contactSuccessDesc: {
    de: 'Vielen Dank für deine Nachricht. Wir werden uns umgehend bei dir melden.',
    en: 'Thank you for your message. We will get back to you as soon as possible.'
  },
  contactErrorTitle: {
    de: 'Fehler beim Senden',
    en: 'Error sending message'
  },
  contactErrorDesc: {
    de: 'Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.',
    en: 'There was a problem sending your message. Please try again later.'
  },
  // New translations for the contact form
  contactFormSubject: {
    de: 'Kontaktanfrage von',
    en: 'Contact request from'
  },
  contactFormName: {
    de: 'Name',
    en: 'Name'
  },
  contactFormEmail: {
    de: 'Email',
    en: 'Email'
  },
  contactFormPhone: {
    de: 'Telefon',
    en: 'Phone'
  },
  contactFormPhoneNotSpecified: {
    de: 'Nicht angegeben',
    en: 'Not specified'
  },
  contactFormMessageLabel: {
    de: 'Nachricht',
    en: 'Message'
  },
  contactSubmitting: {
    de: 'Wird gesendet...',
    en: 'Sending...'
  },

  // Footer content
  footerCompany: {
    de: 'FemRide UG',
    en: 'FemRide UG'
  },
  footerAddress: {
    de: 'Adresse: Waldstraße 222A, 12527 Berlin',
    en: 'Address: Waldstraße 222A, 12527 Berlin'
  },
  footerEmail: {
    de: 'E-Mail: info@femride.de',
    en: 'Email: info@femride.de'
  },
  footerWebsite: {
    de: 'Webseite: www.femride.de',
    en: 'Website: www.femride.de'
  },
  footerCEO: {
    de: 'Vertreten durch:',
    en: 'Represented by:'
  },
  footerCEOName: {
    de: 'Aykut Atli (Geschäftsführer), Dr. Kerstin Wendt (Geschäftsführerin)',
    en: 'Aykut Atli (CEO), Dr. Kerstin Wendt (COO)'
  },
  footerRegistry: {
    de: 'Handelsregister:',
    en: 'Commercial register:'
  },
  footerRegistryCourt: {
    de: 'Amtsgericht Berlin (Charlottenburg)',
    en: 'District Court Berlin (Charlottenburg)'
  },
  footerHRB: {
    de: 'HRB 272631 B',
    en: 'HRB 272631 B'
  },
  footerResponsible: {
    de: 'Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV:',
    en: 'Responsible for the content according to § 18 Abs. 2 MStV:'
  },
  footerResponsiblePerson: {
    de: 'Aykut Atli, Waldstraße 222A, 12527 Berlin',
    en: 'Aykut Atli, Waldstraße 222A, 12527 Berlin'
  },

  // Our vision
  visionHeader: {
    de: 'OUR VISION',
    en: 'OUR VISION'
  },
  visionTitle: {
    de: 'Meet Our Founder',
    en: 'Meet Our Founder'
  },

  // Section Headers
  sectionOurServices: {
    de: 'UNSERE DIENSTE',
    en: 'OUR SERVICES'
  },
  sectionAboutUs: {
    de: 'ÜBER UNS',
    en: 'ABOUT US'
  },
  sectionOurVision: {
    de: 'UNSERE VISION',
    en: 'OUR VISION'
  },
  sectionMeetFounder: {
    de: 'Lerne unseren Gründer kennen',
    en: 'Meet Our Founder'
  },
  sectionOurTeam: {
    de: 'UNSER TEAM',
    en: 'OUR TEAM'
  },

  // Latest Features Section
  latestFeaturesSectionTitle: {
    de: 'Fahrt im Voraus buchen',
    en: 'Book a ride in advance'
  },
  latestFeaturesSectionText: {
    de: 'Planst du eine Reise? Buche deine Fahrt im Voraus für noch bequemere Flughafentransfers, wichtige Meetings oder andere Termine, die Pünktlichkeit erfordern. Gib einfach deine Details ein und sichere dir deine Fahrt bis zu 3 Monate im Voraus.',
    en: 'Planning a trip? Schedule a ride in advance for even more convenient airport transfers, important meetings, or any occasion that requires punctuality. Simply enter your details and secure your ride up to 90 days ahead.'
  },
  forFemaleDrivers: {
    de: 'Werde FemRide-Fahrerin!',
    en: 'Become a driver and join a FemRide fleet in Germany!'
  },
  forFleetOperators: {
    de: 'Werde FemRide-Partner!',
    en: 'Become a fleet partner of FemRide in Germany!'
  },

  // Download Section
  downloadSectionTitle: {
    de: 'Lade unsere App herunter',
    en: 'Download our app'
  },
  downloadSectionSubtitle: {
    de: 'Verfügbar ab Sommer 2025',
    en: 'Coming soon to Google Play & App Store'
  },
  downloadSectionDesc: {
    de: 'Scanne den QR-Code mit deiner Handykamera, um die FemRide App herunterzuladen.',
    en: 'Scan the QR code with your phone camera to download the FemRide app.'
  },
  downloadSectionMainText: {
    de: 'Die schnelle, kostengünstige Art zu fahren.',
    en: 'The fast, affordable way to ride.'
  },
  downloadSectionDeviceText: {
    de: 'Verfügbar für iOS und Android Geräte.',
    en: 'Available for iOS and Android devices.'
  },
  downloadSectionAppStore: {
    de: 'App Store',
    en: 'App Store'
  },
  downloadSectionGooglePlay: {
    de: 'Google Play',
    en: 'Google Play'
  },
  downloadSectionSoon: {
    de: 'Bald verfügbar',
    en: 'Coming soon'
  },
  downloadSectionNotify: {
    de: 'Bleibe auf dem Laufenden und erfahre als Erste, wenn unsere App verfügbar ist',
    en: 'Stay updated and be the first to know when our app is available'
  },
  downloadOn: {
    de: 'JETZT BEI',
    en: 'GET ON'
  },
  getItOn: {
    de: 'JETZT BEI',
    en: 'GET ON'
  },

  // About Section
  aboutMainTitle: {
    de: 'Was sagen die Frauen zu FemRide?',
    en: 'What do women say about FemRide?'
  },
  aboutMainDesc: {
    de: 'Das sagen Frauen über FemRide: Umfrage mit 100 Teilnehmerinnen zeigt klaren Bedarf.',
    en: 'FemRide makes the difference! – A survey with over 100 participants, 90% of whom are women, shows: Safe mobility is an urgent need.'
  },
  aboutTestimonial1Title: {
    de: '„Endlich eine sichere Alternative!"',
    en: '"Finally a safe alternative!"'
  },
  aboutTestimonial1Desc: {
    de: 'der Frauen fühlen sich mit einer Ride-Hailing-Plattform speziell für Frauen sicherer. FemRide schafft Vertrauen durch geprüfte Fahrerinnen und Schutzmaßnahmen für alle Nutzerinnen.',
    en: 'of women feel safer with a ride-hailing platform exclusively for women. FemRide creates trust through verified female drivers and protective measures for women and drivers.'
  },
  aboutTestimonial2Title: {
    de: '„Keine Angst mehr vor Übergriffen."',
    en: '"No more fear of harassment."'
  },
  aboutTestimonial2Desc: {
    de: 'der befragten Frauen wollen FemRide nutzen, um sich vor Belästigung und Diskriminierung zu schützen. Unsere Fahrten sind exklusiv von Frauen für Frauen.',
    en: 'of women surveyed want to use FemRide to protect themselves from harassment and discrimination. Our rides are exclusively by women for women.'
  },
  aboutTestimonial3Title: {
    de: '„Genau das hat gefehlt!"',
    en: '"This is exactly what was missing!"'
  },
  aboutTestimonial3Desc: {
    de: 'der Frauen sind überzeugt, dass FemRide die Lösung für sicheres Ride-Hailing bietet. Eine Plattform, die Frauen mehr Freiheit und Unabhängigkeit denn je ermöglicht.',
    en: 'of women are convinced that FemRide offers a sustainable solution for more safety in ride-hailing. A platform that enables women more freedom and independence than ever before.'
  },
  aboutCtaButton: {
    de: 'Jetzt registrieren und Teil der Bewegung werden',
    en: 'Register now and become part of the movement'
  },

  // Join Us Section
  joinUsSectionHeader: {
    de: 'JOIN US',
    en: 'JOIN US'
  },
  joinUsSectionTitle: {
    de: 'Join FemRide',
    en: 'Join FemRide'
  },
  joinUsSectionSubtitle: {
    de: 'Werde Teil von FemRide',
    en: 'Become part of the FemRide movement'
  },
  joinUsSectionDescription: {
    de: 'Für Sichere Mobilität, mehr Chancen, eine gerechtere Zukunft!',
    en: 'For safe mobility, more opportunities, a fairer future!'
  },
  forFemaleDriversDesc: {
    de: 'Auf der Suche nach einer Fahrerin-Position in Deutschland? Werde Teil eines Flottenunternehmens, das mit FemRide kooperiert, und fahre für eine Plattform, die Vertrauen, Chancengleichheit und faire Verdienstmöglichkeiten in den Mittelpunkt stellt. Starte als FemRide-Fahrerin mit fairem Verdienst!',
    en: 'Looking for a driver position in Germany? Become part of a fleet company that cooperates with FemRide, and drive for a platform that focuses on safety, equal opportunities, and fair earning potential. Take advantage of your chance for a flexible, secure job with attractive income prospects!'
  },
  forFemaleDriversButton: {
    de: 'Jetzt als Fahrerin anmelden!',
    en: 'Sign up as a driver now!'
  },
  forFleetOperatorsDesc: {
    de: 'Besitzt du ein Flottenunternehmen und suchst nach besseren Verdienstchancen? Kooperiere mit FemRide und werde Teil einer Plattform, die sozialen Mehrwert und nachhaltige Mobilität in den Mittelpunkt stellt. Nutze dein Potenzial und steigere deine Flottenauslastung mit FemRide!',
    en: 'Do you own a fleet company and are looking for new, lucrative deployment opportunities? Cooperate with FemRide and become part of a platform that focuses on social impact and sustainable mobility. Use your potential and increase your fleet utilization with FemRide!'
  },
  forFleetOperatorsButton: {
    de: 'Partner werden',
    en: 'Register as a fleet partner now!'
  },

  // FAQ Section
  faqMainTitle: {
    de: 'Häufig gestellte Fragen',
    en: 'Frequently Asked Questions'
  },
  faqMainDesc: {
    de: 'Wähle eine Kategorie aus, um alle häufig gestellten Fragen und Antworten zu sehen.',
    en: 'Select a category to see all frequently asked questions and answers.'
  },
  viewAllFAQs: {
    de: 'Mehr erfahren',
    en: 'View All FAQs'
  },
  faqCategoryPassengers: {
    de: 'Fahrgästinnen',
    en: 'Passengers'
  },
  faqCategoryDrivers: {
    de: 'Fahrerinnen',
    en: 'Drivers'
  },
  faqCategoryFleet: {
    de: 'Flottenpartner',
    en: 'Fleet Partners'
  },
  faqTitlePassengers: {
    de: 'FAQs für Fahrgästinnen',
    en: 'FAQs for Passengers'
  },
  faqTitleDrivers: {
    de: 'FAQs für Fahrerinnen',
    en: 'FAQs for Drivers'
  },
  faqTitleFleet: {
    de: 'FAQs für Flottenpartner',
    en: 'FAQs for Fleet Partners'
  },

  // Passenger FAQs
  faqPassengerQ1: {
    de: 'Was ist FemRide?',
    en: 'What is FemRide?'
  },
  faqPassengerA1: {
    de: 'FemRide ist Europas erste Ride-Hailing-Plattform, die ausschließlich für Frauen – für mehr Sicherheit und Vertrauen unterwegs.',
    en: 'FemRide is Europe\'s first ride-hailing platform exclusively for women – for more safety and confidence on the go.'
  },
  faqPassengerQ2: {
    de: 'In welchen Städten ist FemRide verfügbar?',
    en: 'In which cities is FemRide available?'
  },
  faqPassengerA2: {
    de: 'FemRide startet in Berlin und wird bald auch in weiteren deutschen Städten verfügbar sein. Schrittweise erfolgt der Ausbau in weitere Regionen und Länder. 🚀',
    en: 'FemRide is launching in Berlin and will soon be available in other German cities. We\'ll gradually expand to more regions and countries. 🚀'
  },
  faqPassengerQ3: {
    de: 'Wie kann ich eine Fahrt buchen?',
    en: 'How can I book a ride?'
  },
  faqPassengerA3: {
    de: 'Lade die FemRide-App herunter, registriere dich und buche deine Fahrt in wenigen Klicks – sicher und einfach.',
    en: 'Download the FemRide app, register, and book your ride in just a few clicks – safe and simple.'
  },
  faqPassengerQ4: {
    de: 'Welche Sicherheitsmaßnahmen gibt es?',
    en: 'What safety measures are in place?'
  },
  faqPassengerA4: {
    de: 'Unsere App bietet Live-Tracking, Notfall-Button und eine sichere Kommunikation zwischen Fahrerinnen und Passagierinnen. Zusätzlich identifizieren wir mit einem modernen System ob es sich bei dem Fahrgast und Fahrerin wirklich um Frauen handelt und garantieren damit die Sicherheit für die Benutzerin von FemRide.',
    en: 'Our app offers live tracking, an emergency button, and secure communication between drivers and passengers. Additionally, we use a modern system to verify that both passengers and drivers are women, guaranteeing the safety of FemRide users.'
  },

  // Additional Passenger FAQs - For Users
  faqPassengerQ5: {
    de: 'Warum dauert meine Verifizierung länger als üblich?',
    en: 'Why is my verification taking longer than usual?'
  },
  faqPassengerA5: {
    de: 'Deutsche Dokumente erfordern eine manuelle Überprüfung aus Sicherheitsgründen. Dies stellt sicher, dass nur Frauen Zugang zur FemRide-Plattform haben. Die Überprüfung dauert normalerweise 24-48 Stunden.',
    en: 'German documents require manual review for safety reasons. This ensures only women can access FemRide\'s platform. Review typically takes 24-48 hours.'
  },
  faqPassengerQ6: {
    de: 'Kann ich die App nutzen, während ich auf die Verifizierung warte?',
    en: 'Can I use the app while waiting for verification?'
  },
  faqPassengerA6: {
    de: 'Ja! Du kannst alle App-Funktionen erkunden, außer Fahrten zu buchen, bis die Verifizierung abgeschlossen ist.',
    en: 'Yes! You can explore all app features except booking rides until verification is complete.'
  },
  faqPassengerQ7: {
    de: 'Was passiert, wenn ich abgelehnt werde?',
    en: 'What if I\'m declined?'
  },
  faqPassengerA7: {
    de: 'Falls du glaubst, dass dies ein Fehler ist, kontaktiere den Support unter support@femride.de. Unser Team kann die Entscheidung überprüfen.',
    en: 'If you believe this is an error, contact support at support@femride.de. Our team can review the decision.'
  },



  // Driver FAQs
  faqDriverQ1: {
    de: 'Wie kann ich Fahrerin bei FemRide werden?',
    en: 'How can I become a driver with FemRide?'
  },
  faqDriverA1: {
    de: 'Registriere dich in der FemRide-App oder auf unserer Webseite und wähle ein Flottenunternehmen, mit dem du zusammenarbeiten möchtest.',
    en: 'Register in the FemRide app or on our website and choose a fleet company you would like to work with.'
  },
  faqDriverQ2: {
    de: 'Welche Voraussetzungen muss ich erfüllen?',
    en: 'What requirements do I need to meet?'
  },
  faqDriverA2Part1: {
    de: 'Die Anforderungen hängen von deinem Flottenpartner ab. In der Regel benötigst du:',
    en: 'The requirements depend on your fleet partner. Generally, you will need:'
  },
  faqDriverA2Item1: {
    de: 'Einen gültigen Führerschein & Personenbeförderungsschein (P-Schein)',
    en: 'A valid driver\'s license & passenger transportation license (P-license)'
  },
  faqDriverA2Item2: {
    de: 'Ein polizeiliches Führungszeugnis',
    en: 'A police background check'
  },
  faqDriverA2Item3: {
    de: 'Ein Mindestalter von 21 Jahren',
    en: 'A minimum age of 21 years'
  },
  faqDriverQ3: {
    de: 'Wie sehen die Verdienstmöglichkeiten aus?',
    en: 'What are the earning opportunities?'
  },
  faqDriverA3: {
    de: 'Dein Verdienst hängt vom Flottenpartner und deinem Arbeitsmodell ab. In der Regel gibt es transparente Vergütungsmodelle mit fairen Einnahmen pro Fahrt. Zusätzlich gibt es einen Bonus für eine Anzahl von Fahrten, die dir FemRide zusätzlich zu deinem Gehalt auszahlt.',
    en: 'Your earnings depend on the fleet partner and your work model. There are typically transparent compensation models with fair earnings per ride. Additionally, FemRide pays a bonus for a certain number of rides, which is paid on top of your regular salary.'
  },
  faqDriverQ4: {
    de: 'Brauche ich ein eigenes Auto?',
    en: 'Do I need my own car?'
  },
  faqDriverA4: {
    de: 'Nein, du fährst mit den Fahrzeugen deines Flottenpartners. Die Bedingungen variieren je nach Partnerunternehmen.',
    en: 'No, you drive with the vehicles of your fleet partner. The conditions vary depending on the partner company.'
  },

  // Fleet FAQs
  faqFleetQ1: {
    de: 'Wie kann mein Unternehmen mit FemRide kooperieren?',
    en: 'How can my company cooperate with FemRide?'
  },
  faqFleetA1: {
    de: 'Registriere dich als Flottenpartner und bringe deine Fahrzeuge auf die Straße – wir bieten attraktive Einsatzmöglichkeiten!',
    en: 'Register as a fleet partner and get your vehicles on the road – we offer attractive deployment opportunities!'
  },
  faqFleetQ2: {
    de: 'Welche Vorteile hat eine Partnerschaft mit FemRide?',
    en: 'What are the benefits of partnering with FemRide?'
  },
  faqFleetA2: {
    de: 'Mehr Fahrten & höhere Auslastung, gesellschaftliche Anerkennung und die Vermittlung neuer Fahrerinnen.',
    en: 'More rides & higher utilization, social recognition, and the placement of new drivers.'
  },
  faqFleetQ3: {
    de: 'Wie erfolgt die Abrechnung?',
    en: 'How does the billing process work?'
  },
  faqFleetA3: {
    de: 'Wir bieten transparente Abrechnungsmodelle mit regelmäßigen Auszahlungen für eine nachhaltige Zusammenarbeit.',
    en: 'We offer transparent billing models with regular payouts for sustainable cooperation.'
  },
  faqFleetQ4: {
    de: 'Welche finanziellen Vorteile bietet eine Zusammenarbeit mit FemRide?',
    en: 'What financial benefits does a partnership with FemRide offer?'
  },
  faqFleetA4: {
    de: 'Dank eines fairen Preismodells zahlen Flottenpartner weniger als üblich, um eine langfristige Partnerschaft zu fördern.',
    en: 'Thanks to a fair pricing model, fleet partners pay less than usual to encourage a long-term partnership.'
  },

  // Newsletter translations
  newsletterTitle: {
    de: 'Newsletter abonnieren',
    en: 'Subscribe to newsletter'
  },
  newsletterPlaceholder: {
    de: 'Deine E-Mail-Adresse',
    en: 'Your email address'
  },
  newsletterButton: {
    de: 'Anmelden',
    en: 'Sign up'
  },
  newsletterSuccess: {
    de: 'Vielen Dank für deine Anmeldung!',
    en: 'Thank you for subscribing!'
  },
  newsletterError: {
    de: 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.',
    en: 'An error occurred. Please try again.'
  },
  newsletterInfo: {
    de: 'Erhalte Updates über FemRide und unsere App-Veröffentlichung',
    en: 'Get updates about FemRide and our app release'
  },

  // Cookie Consent translations
  cookieTitle: {
    de: 'Cookie-Einstellungen',
    en: 'Cookie Settings'
  },
  cookieDescription: {
    de: 'Wir verwenden notwendige Cookies für die Funktionalität der Website und optionale Analyse-Cookies (Google Analytics) zur Verbesserung unserer Dienste. Analyse-Cookies werden nur mit Ihrer Zustimmung gesetzt.',
    en: 'We use necessary cookies for website functionality and optional analytics cookies (Google Analytics) to improve our services. Analytics cookies are only set with your consent.'
  },
  cookieAcceptButton: {
    de: 'Akzeptieren',
    en: 'Accept'
  },
  cookieDeclineButton: {
    de: 'Ablehnen',
    en: 'Decline'
  },
  cookiePrivacyLink: {
    de: 'Datenschutzrichtlinie lesen',
    en: 'Read privacy policy'
  },
  cookieCloseButton: {
    de: 'Schließen',
    en: 'Close'
  },

  // Ride Page Translations
  forPassengers: {
    de: 'FÜR FAHRGÄSTE',
    en: 'FOR PASSENGERS'
  },
  bookYourRide: {
    de: 'Buche deine Fahrt mit FemRide',
    en: 'Book Your Ride with FemRide'
  },
  ridePageDesc: {
    de: 'Sicher und komfortabel unterwegs - nur für Frauen, mit verifizierten Fahrerinnen. Erlebe eine neue Art der Mobilität.',
    en: 'Travel safely and comfortably - exclusively for women, with verified drivers. Experience a new way of mobility.'
  },
  ridePageComingSoon: {
    de: 'Die FemRide App wird in Kürze verfügbar sein. Registriere dich für unseren Newsletter, um als Erste informiert zu werden.',
    en: 'The FemRide app will be available soon. Sign up for our newsletter to be the first to know.'
  },
  comingSoon: {
    de: 'Demnächst verfügbar',
    en: 'Coming Soon'
  },

  // Driver Page Translations
  backToHome: {
    de: 'Zurück zur Startseite',
    en: 'Back to Home'
  },
  forDrivers: {
    de: 'FÜR FAHRERINNEN',
    en: 'FOR DRIVERS'
  },
  becomeDriver: {
    de: 'Werde FemRide Fahrerin',
    en: 'Become a FemRide Driver'
  },
  drivePageDesc: {
    de: 'Werde Teil unserer Mission, Mobilität für Frauen sicherer zu machen. Als FemRide Fahrerin genießt du flexible Arbeitszeiten und faire Verdienstmöglichkeiten.',
    en: 'Join our mission to make mobility safer for women. As a FemRide driver, you\'ll enjoy flexible working hours and fair earning opportunities.'
  },
  driverFormNameLabel: {
    de: 'Vollständiger Name',
    en: 'Full Name'
  },
  driverFormNamePlaceholder: {
    de: 'Gib deinen vollständigen Namen ein',
    en: 'Enter your full name'
  },
  driverFormAgeLabel: {
    de: 'Alter',
    en: 'Age'
  },
  driverFormAgePlaceholder: {
    de: 'Gib dein Alter ein',
    en: 'Enter your age'
  },
  driverFormEmailLabel: {
    de: 'E-Mail-Adresse',
    en: 'Email Address'
  },
  driverFormEmailPlaceholder: {
    de: 'Gib deine E-Mail-Adresse ein',
    en: 'Enter your email address'
  },
  driverFormPhoneLabel: {
    de: 'Telefonnummer',
    en: 'Phone Number'
  },
  driverFormPhonePlaceholder: {
    de: 'Gib deine Telefonnummer ein',
    en: 'Enter your phone number'
  },
  driverFormExperienceLabel: {
    de: 'Fahrerfahrung',
    en: 'Driving Experience'
  },
  driverFormExperiencePlaceholder: {
    de: 'Beschreibe deine Erfahrung als Fahrerin (z.B. Taxi, Uber, etc.)',
    en: 'Describe your experience as a driver (e.g., Taxi, Uber, etc.)'
  },
  driverFormReasonLabel: {
    de: 'Motivation',
    en: 'Motivation'
  },
  driverFormReasonPlaceholder: {
    de: 'Warum möchtest du FemRide Fahrerin werden?',
    en: 'Why do you want to become a FemRide driver?'
  },


  // Fleet Manager Application Form
  fleetFormTitle: {
    en: "Fleet Partnership Application",
    de: "Flotten-Partnerschaft Bewerbung",
  },
  fleetFormDesc: {
    en: "Join FemRide as a fleet partner and be part of our mission to provide safe transportation for women. Please fill out the form below and we'll contact you shortly.",
    de: "Werde Flottenpartner bei FemRide und unterstütze unsere Mission, sicheren Transport für Frauen anzubieten. Bitte fülle das untenstehende Formular aus und wir melden uns in Kürze bei dir.",
  },
  fleetFormContactPersonLabel: {
    en: "Contact Person",
    de: "Ansprechpartner",
  },
  fleetFormContactPersonPlaceholder: {
    en: "Enter the name of the primary contact person",
    de: "Gib den Namen der Hauptkontaktperson ein",
  },
  fleetFormCompanyLabel: {
    en: "Company Name",
    de: "Firmenname",
  },
  fleetFormCompanyPlaceholder: {
    en: "Enter your company name",
    de: "Gib deinen Firmennamen ein",
  },
  fleetFormBusinessEmailLabel: {
    en: "Business Email",
    de: "Geschäftliche E-Mail",
  },
  fleetFormBusinessEmailPlaceholder: {
    en: "Enter your business email address",
    de: "Gib deine geschäftliche E-Mail-Adresse ein",
  },
  fleetFormPhoneLabel: {
    en: "Contact Phone",
    de: "Kontakttelefon",
  },
  fleetFormPhonePlaceholder: {
    en: "Enter your contact phone number",
    de: "Gib deine Kontakttelefonnummer ein",
  },
  fleetFormFleetSizeLabel: {
    en: "Current Fleet Size",
    de: "Aktuelle Flottengröße",
  },
  fleetFormFleetSizePlaceholder: {
    en: "Enter your current fleet size",
    de: "Gib deine aktuelle Flottengröße ein",
  },
  fleetFormMessageLabel: {
    en: "Additional Information",
    de: "Zusätzliche Informationen",
  },
  fleetFormMessagePlaceholder: {
    en: "Please provide any additional information about your fleet and business",
    de: "Bitte gib zusätzliche Informationen über deine Flotte und dein Unternehmen an",
  },
  fleetFormSubmitButton: {
    en: "Submit Application",
    de: "Bewerbung Absenden",
  },
  fleetFormSubmitting: {
    en: "Submitting...",
    de: "Wird Gesendet...",
  },
  fleetFormSuccessMessage: {
    en: "Thank you for your interest in becoming a FemRide fleet partner! We will review your application and contact you soon.",
    de: "Vielen Dank für dein Interesse, Flottenpartner bei FemRide zu werden! Wir werden deine Bewerbung prüfen und uns in Kürze bei dir melden.",
  },
  fleetFormErrorMessage: {
    en: "There was a problem submitting your application. Please try again later.",
    de: "Es gab ein Problem beim Senden deiner Bewerbung. Bitte versuche es später erneut.",
  },
  fleetApplicationEmailSubject: {
    en: "FemRide Fleet Partnership Application",
    de: "FemRide Flottenpartnerschaft Bewerbung",
  },

  // Ride Request Form Translations
  requestRideTitle: {
    en: "Request a Ride",
    de: "Fahrt anfragen",
  },
  rideRequestDesc: {
    en: "Fill out the form below to request a ride. We'll match you with a verified female driver.",
    de: "Fülle das untenstehende Formular aus, um eine Fahrt anzufragen. Wir vermitteln dir eine verifizierte Fahrerin.",
  },
  personalInfoTitle: {
    en: "Personal Information",
    de: "Persönliche Informationen",
  },
  rideDetailsTitle: {
    en: "Ride Details",
    de: "Fahrtdetails",
  },
  additionalInfoTitle: {
    en: "Additional Information",
    de: "Zusätzliche Informationen",
  },
  rideRequestNameLabel: {
    en: "Full Name",
    de: "Vollständiger Name",
  },
  rideRequestNamePlaceholder: {
    en: "Enter your full name",
    de: "Gib deinen vollständigen Namen ein",
  },
  rideRequestEmailLabel: {
    en: "Email Address",
    de: "E-Mail-Adresse",
  },
  rideRequestEmailPlaceholder: {
    en: "Enter your email address",
    de: "Gib deine E-Mail-Adresse ein",
  },
  rideRequestPhoneLabel: {
    en: "Phone Number",
    de: "Telefonnummer",
  },
  rideRequestPhonePlaceholder: {
    en: "Enter your phone number",
    de: "Gib deine Telefonnummer ein",
  },
  pickupLocationLabel: {
    en: "Pickup Location",
    de: "Abholort",
  },
  pickupLocationPlaceholder: {
    en: "Enter pickup address",
    de: "Gib die Abholadresse ein",
  },
  dropoffLocationLabel: {
    en: "Dropoff Location",
    de: "Zielort",
  },
  dropoffLocationPlaceholder: {
    en: "Enter destination address",
    de: "Gib die Zieladresse ein",
  },
  pickupTimeLabel: {
    en: "Pickup Time",
    de: "Abholzeit",
  },
  passengerCountLabel: {
    en: "Number of Passengers",
    de: "Anzahl der Fahrgäste",
  },
  passengerCountPlaceholder: {
    en: "Enter number of passengers",
    de: "Gib die Anzahl der Fahrgäste ein",
  },
  accessibilityLabel: {
    en: "Accessibility Requirements",
    de: "Barrierefreiheit Anforderungen",
  },
  accessibilityPlaceholder: {
    en: "Any special accessibility needs?",
    de: "Besondere Anforderungen an die Barrierefreiheit?",
  },
  additionalRequestsLabel: {
    en: "Additional Requests",
    de: "Zusätzliche Wünsche",
  },
  additionalRequestsPlaceholder: {
    en: "Any additional information or special requests?",
    de: "Weitere Informationen oder besondere Wünsche?",
  },
  submitRideRequestButton: {
    en: "Request Ride",
    de: "Fahrt anfragen",
  },
  submittingButton: {
    en: "Submitting...",
    de: "Wird gesendet...",
  },
  rideRequestSuccessTitle: {
    en: "Request Submitted",
    de: "Anfrage gesendet",
  },
  rideRequestSuccessMessage: {
    en: "Your ride request has been submitted successfully. We'll contact you shortly with driver details.",
    de: "Deine Fahrtanfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze mit den Fahrerdetails.",
  },
  rideRequestErrorTitle: {
    en: "Request Failed",
    de: "Anfrage fehlgeschlagen",
  },
  rideRequestErrorMessage: {
    en: "There was a problem submitting your request. Please try again later.",
    de: "Es gab ein Problem beim Senden deiner Anfrage. Bitte versuche es später erneut.",
  },
  rideRequestEmailSubject: {
    en: "New FemRide Ride Request",
    de: "Neue FemRide Fahrtanfrage",
  },

  // Waiting List Translations
  waitingListTitle: {
    de: "Endlich sicher unterwegs - Von Frauen für Frauen",
    en: "Finally Safe Travel - By Women, For Women"
  },
  waitingListDescription: {
    de: "Trage dich in unsere Warteliste ein und erfahre als Erste, wenn unsere App verfügbar ist. Wir verbessern die Mobilität für Frauen mit Sicherheit als oberste Priorität.",
    en: "Join our waiting list and be the first to know when our app launches. We're revolutionizing mobility for women with safety as our top priority."
  },
  waitingListUrgency: {
    de: "Nur die ersten 1.000 Nutzerinnen erhalten ersten Monat gratis",
    en: "Only the first 1,000 users get a free trial month"
  },
  waitingListSocialProof: {
    de: "Bereits 150+ Frauen angemeldet",
    en: "Over {count} women already signed up"
  },
  waitingListRecentSignup: {
    de: "{name} aus {city} ist gerade dabei",
    en: "{name} from {city} just joined"
  },
  waitingListReferralDescription: {
    de: "Lade Freunde ein und steige in der Warteliste auf! Empfiehlst du eine Fahrerin, rückst du 10 Plätze vor. Empfiehlst du eine Fahrgast, rückst du 2 Plätze vor.",
    en: "Invite friends and move up the waitlist! Refer a driver and move up 10 places. Refer a passenger and move up 2 places."
  },
  waitingListTrustSafety: {
    de: "Schutz zuerst",
    en: "Safety First"
  },
  waitingListTrustSafetyDesc: {
    de: "Fahrerinnen für Fahrgäste. Dein Schutz ist unsere oberste Priorität.",
    en: "Women drivers for women passengers. Your safety is our top priority."
  },
  waitingListTrustCommunity: {
    de: "Wachsende Gemeinschaft",
    en: "Growing Community"
  },
  waitingListTrustCommunityDesc: {
    de: "Schließe dich hunderten Frauen an, die bereits auf unserer Warteliste stehen.",
    en: "Join thousands of women already on our waitlist."
  },
  waitingListTrustEarly: {
    de: "Frühzeitiger Zugang",
    en: "Early Access"
  },
  waitingListTrustEarlyDesc: {
    de: "Mitglieder der Warteliste erhalten vorrangigen Zugang, wenn wir starten.",
    en: "Waitlist members get priority access when we launch."
  },
  waitingListTrustInvite: {
    de: "Freunde einladen",
    en: "Invite Friends"
  },
  waitingListJoinToday: {
    de: "Tritt unserer Warteliste noch heute bei",
    en: "Join Our Waitlist Today"
  },
  waitingListEmailPlaceholder: {
    de: "Deine E-Mail-Adresse",
    en: "Your email address"
  },
  waitingListReferralPlaceholder: {
    de: "Referral-Code (optional)",
    en: "Referral code (optional)"
  },
  waitingListButton: {
    de: "Kostenlos anmelden",
    en: "Secure Your Spot"
  },
  waitingListButtonSecondary: {
    de: "Frühen Zugang erhalten",
    en: "Get Early Access"
  },
  waitingListFree: {
    de: "100% kostenlos & unverbindlich",
    en: "100% free & no commitment"
  },
  waitingListPrivacy: {
    de: "Deine Daten sind sicher bei uns",
    en: "Your data is safe with us"
  },
  waitingListDsgvoCheckbox: {
    de: "Ich stimme der Datenschutzerklärung zu",
    en: "I agree to the privacy policy"
  },
  waitingListReferralOptional: {
    de: "Hast du einen Referral-Code?",
    en: "Have a referral code?"
  },
  // Exit-intent popup translations
  waitingListExitTitle: {
    de: "Warte! Verpasse nicht den sicheren Start",
    en: "Wait! Don't miss the safe start"
  },
  waitingListExitDescription: {
    de: "Sichere dir deinen Platz bevor wir voll sind",
    en: "Secure your spot before we're full"
  },
  waitingListExitButton: {
    de: "Letzten Platz sichern",
    en: "Secure Last Spot"
  },
  waitingListExitDisclaimer: {
    de: "Kostenlos & jederzeit abmeldbar",
    en: "Free & unsubscribe anytime"
  },
  waitingListSubmitting: {
    de: "Wird angemeldet...",
    en: "Registering..."
  },
  waitingListSuccess: {
    de: "Erfolgreich angemeldet!",
    en: "Successfully registered!"
  },
  waitingListSuccessMessage: {
    de: "Wir werden dich benachrichtigen, sobald die App verfügbar ist.",
    en: "We will notify you when the app is available."
  },
  waitingListReferralSuccess: {
    de: "Dein Referral-Code",
    en: "Your Referral Code"
  },
  waitingListReferralSuccessMessage: {
    de: "Teile diesen Code mit Freunden! Fahrerinnen bringen dir 10 Plätze, Fahrgäste 2 Plätze nach vorne.",
    en: "Share this code with friends! Drivers get you 10 places up, passengers get you 2 places up."
  },
  waitingListPositionMessage: {
    de: "Deine aktuelle Position in der Warteliste: {position}",
    en: "Your current position in the waitlist: {position}"
  },
  waitingListCopyButton: {
    de: "Kopieren",
    en: "Copy"
  },
  waitingListCopied: {
    de: "Kopiert!",
    en: "Copied!"
  },
  waitingListShareButton: {
    de: "Teilen",
    en: "Share"
  },
  waitingListError: {
    de: "Fehler",
    en: "Error"
  },
  waitingListErrorMessage: {
    de: "Es gab ein Problem bei der Anmeldung. Bitte versuche es später erneut.",
    en: "There was a problem with your registration. Please try again later."
  },
  waitingListDuplicate: {
    de: "E-Mail bereits registriert",
    en: "Email already registered"
  },
  waitingListDuplicateMessage: {
    de: "Diese E-Mail ist bereits auf unserer Warteliste.",
    en: "This email is already on our waiting list."
  },
  waitingListInvalidReferral: {
    de: "Ungültiger Referral-Code",
    en: "Invalid referral code"
  },
  waitingListInvalidReferralMessage: {
    de: "Der eingegebene Referral-Code ist ungültig. Bitte überprüfe ihn und versuche es erneut.",
    en: "The referral code you entered is invalid. Please check and try again."
  },

  // New translations for redesigned waiting list section
  waitingListWhatYoureJoining: {
    de: "Das erwartet dich",
    en: "What You're Joining"
  },
  waitingListWhatYoureJoiningDesc: {
    de: "Willkommen in der FemRide Community! Hier ist ein Vorgeschmack auf die App, die deine Mobilität verbessern wird.",
    en: "Welcome to the FemRide community! Here's a preview of the app that will revolutionize your mobility."
  },
  waitingListInDevelopment: {
    de: "In Entwicklung",
    en: "In Development"
  },
  waitingListAppPreview: {
    de: "App-Vorschau",
    en: "App Preview"
  },
  waitingListAppPreviewDesc: {
    de: "Bald verfügbar für iOS und Android - deine sichere Fahrt ist nur einen Tap entfernt.",
    en: "Coming soon for iOS and Android - your safe ride is just a tap away."
  },
  waitingListWhatsNext: {
    de: "Was passiert als Nächstes?",
    en: "What's Next?"
  },
  waitingListWhatsNextDesc: {
    de: "Wir arbeiten hart daran, die App fertigzustellen. Du erhältst eine E-Mail, sobald wir bereit für den Start sind.",
    en: "We're working hard to perfect the app. You'll receive an email as soon as we're ready to launch."
  },
  waitingListNotifyWhenReady: {
    de: "Benachrichtigung bei Verfügbarkeit",
    en: "We'll notify you when ready"
  },

  // Social sharing translations
  socialShareTitle: {
    de: "Mit Freunden teilen:",
    en: "Share with friends:"
  },
  instagramCopiedMessage: {
    de: "Text kopiert! Instagram wird geöffnet - einfach einfügen!",
    en: "Text copied! Instagram opening - just paste!"
  },

  // Simplified waiting list translations (passenger-only)
  applyAsDriver: {
    de: 'Bewerben',
    en: 'Apply'
  },
  waitingListReferralBonus: {
    de: '🎁 Teile deinen Referral-Code und erhalte Bonusplätze!',
    en: '🎁 Share your referral code and get bonus places!'
  },
  alreadyOnOtherList: {
    de: "Du bist bereits auf der {otherType}-Warteliste angemeldet.",
    en: "You're already on the {otherType} waitlist."
  },
  referralCodeTitle: {
    de: "Ihr Referral-Code",
    en: "Your Referral Code"
  },
  referralCodeDescription: {
    de: "Teile diesen Code mit Freunden! Fahrerinnen bringen dir 10 Plätze, Fahrgäste 2 Plätze nach vorne.",
    en: "Share this code with friends! Drivers get you 10 places up, passengers get you 2 places up."
  },
  referralCodeShareHint: {
    de: "Klicke auf das Kopiersymbol und teile den Code über die unten stehenden Optionen",
    en: "Click the copy icon and share the code using the options below"
  },

  // Supporters Section
  supportersTitle: {
    de: "Wir werden unterstützt von",
    en: "We are supported by"
  },
  supportersSubtitle: {
    de: "Unsere Partner und Unterstützer, die uns auf unserem Weg begleiten",
    en: "Our partners and supporters who accompany us on our journey"
  },

  // Team Section
  teamMainTitle: {
    de: "Das Team hinter FemRide",
    en: "The Team Behind FemRide"
  },
  teamMissionTitle: {
    de: "Warum machen wir das überhaupt?",
    en: "Why are we doing this?"
  },
  teamMissionText1: {
    de: "Wir haben FemRide gegründet, um die erheblichen Sicherheitsbedenken abzuschaffen, mit denen Frauen bei der Nutzung herkömmlicher Ride-Hailing-Dienste immer noch konfrontiert sind. Studien zeigen, dass sich bis zu 78% der Frauen während Taxi- und Ride-Sharing-Fahrten unwohl fühlen. Frag deine Schwester, Tante, Kollegin, Frau, Nachbarin oder Tochter nach ihren Erfahrungen - sicher wirst du mehr als eine unangenehme Geschichte hören.",
    en: "We founded FemRide to address the significant safety concerns women face when using traditional ride-hailing services, with studies showing that up to 78% of women feel uncomfortable during taxi and ride-sharing trips. Ask your sister, auntie, colleague, wife, neighbour or daughter about their experiences - sure, you will hear that unpleasant story."
  },
  teamMissionText2: {
    de: "Die Idee wurde durch eine persönliche Erfahrung unseres Gründers Aykut ins Leben gerufen: seine Verlobte hatte während einer Ride-Hailing-Fahrt eine negative Begegnung, was ihm den realen Bedarf für sicherere Transportalternativen verdeutlichte. Aktuelle Mobilitätslösungen berücksichtigen die Perspektiven und Sicherheitsbedürfnisse von Frauen nicht angemessen und ausreichend, obwohl Frauen als Nutzerinnen öffentlicher Verkehrsmittel überrepräsentiert sind.",
    en: "The inspiration came from a personal experience when Aykut's fiancée had a negative encounter during a ride-hailing ride, highlighting the real-world need for safer transportation alternatives. Current mobility solutions fail to adequately consider women's perspectives and safety needs, despite women being overrepresented as users of public transportation."
  },
  teamAykutTitle: {
    de: "Gründer & CEO",
    en: "Founder & CEO"
  },
  teamAykutDesc: {
    de: "Aykut bringt umfangreiche unternehmerische Erfahrung aus mehreren Start-ups verschiedener Branchen mit, mit einer bewährten Erfolgsbilanz im Vertrieb und beim Aufbau innovativer Plattformlösungen. Seine Leidenschaft ist es, durch Technologie sinnvollen gesellschaftlichen Wandel zu schaffen.",
    en: "Aykut brings extensive entrepreneurial experience from multiple start-ups across different industries, with a proven track record in sales and building innovative platform solutions. His passion is to create meaningful social change through technology."
  },
  teamAykutFun: {
    de: "Der Name Aykut ist türkischen Ursprungs und bedeutet 'glückverheißender Mond'. Was könnte bei einem Ride-Hailing-Service, der für mehr Sicherheit sorgen will, besonders nachts, schon schiefgehen?",
    en: "The name Aykut is of Turkish origin and means 'auspicious moon'. What could possibly go wrong for a ride-hailing service that wants to ensure greater safety, especially at night?"
  },
  teamKerstinTitle: {
    de: "Co-Gründerin & COO",
    en: "Co-Founder & COO"
  },
  teamKerstinDesc: {
    de: "Kerstin hat einen IT-Background und ergänzt unser Gründungsteam mit über 15 Jahren Expertise in den Bereichen Mobilität und Sicherheit in öffentlichen und privaten Institutionen. Als aktives Mitglied im Netzwerk Women in Mobility setzt sie sich für inklusive Mobilitätslösungen ein und versteht die einzigartigen Anforderungen von Frauen umfassend.",
    en: "Kerstin complements our founding team with over 15 years of expertise in mobility and security across public and private institutions. As an active leader in the Women in Mobility network, she champions inclusive transportation solutions and deeply understands women's unique mobility challenges."
  },
  teamKerstinFun: {
    de: "Kerstin besitzt seit ihrem 18. Lebensjahr einen Führerschein, aber nie ein eigenes Auto. Sie mag es gar nicht, in der Stadt nach einem Parkplatz zu suchen. Daher sieht man sie meist mit ihrem Gravelbike durch die Straßen Berlins fahren.",
    en: "Kerstin holds a driving licence since she turned 18, but never owned a car herself. She very much dislikes looking for a parking space in the city. Thus, she is most often seen riding her gravel bike through the streets of Berlin."
  },
  teamDavidTitle: {
    de: "Operations Manager",
    en: "Operations Manager"
  },
  teamDavidDesc: {
    de: "David überwacht das tägliche Funktionieren der FemRide-Plattform und sorgt für eine reibungslose Koordination zwischen Fahrerinnen und Fahrgästen. Er ist ein großartiger Zuhörer und ein schneller Lerner.",
    en: "David oversees the day-to-day functioning of the FemRide platform and ensures smooth coordination between drivers and passengers. He is a great listener and a quick learner."
  },
  teamDavidFun: {
    de: "David ist von FemRides Mission zutiefst überzeugt und ist erst kürzlich von einem kleinen bayerischen Dorf in die pulsierende Stadt Berlin gezogen. Das nennen wir volles Engagement!",
    en: "David is deeply convinced of FemRide's mission and just recently moved from a small Bavarian village to the buzzling city of Berlin. We call that full engagement!"
  },
  teamMelanieTitle: {
    de: "CMO",
    en: "CMO"
  },
  teamMelanieDesc: {
    de: "Melanie hat einen Background in Social Media und Marketing Management und bringt über 14 Jahre Erfahrung als Selbstständige ins FemRide-Team ein. Durch ihre eigene Rolle als Mutter weiß sie, wie herausfordernd sichere und flexible Mobilität mit Kind sein kann – und setzt sich daher besonders für Lösungen ein, die Müttern und Kindern das Leben erleichtern.",
    en: "Melanie has a background in Social Media and Marketing Management and brings over 14 years of experience as a freelancer to the FemRide team. Through her own role as a mother, she knows how challenging safe and flexible mobility with children can be – and therefore advocates especially for solutions that make life easier for mothers and children."
  },
  teamMelanieFun: {
    de: "Melanie ist nach Barcelona ausgewandert und hat sich ein persönliches Ziel gesetzt: FemRide nicht nur in Deutschland, sondern auch international – am liebsten in ihrer Wahlheimat – auf die Straße zu bringen. In Spanien gibt es schon viel mehr weibliche Fahrerinnen als hier in Deutschland. :)",
    en: "Melanie has moved to Barcelona and has set herself a personal goal: to bring FemRide not only to Germany, but also internationally – preferably to her adopted home. In Spain, there are already many more female drivers than here in Germany. :)"
  },
  teamJoinTitle: {
    de: "Komm in unser Team",
    en: "Join Our Team"
  },
  teamJoinDesc1: {
    de: "Werde Teil von FemRide und sei Teil einer visionären Bewegung, die die urbane Mobilität neu gestaltet und dabei echten gesellschaftlichen Wandel anstößt – wo deine Arbeit nicht nur ein Unternehmen aufbaut, sondern eine sicherere Welt für Frauen überall schafft.",
    en: "Join FemRide and be part of a revolutionary movement that's reshaping urban mobility while creating real social impact – where your work doesn't just build a business, but builds a safer world for women everywhere."
  },
  teamJoinDesc2: {
    de: "Bei FemRide hast du die einzigartige Gelegenheit, beim Aufbau und Betrieb von Europas erster Ride-Hailing-Plattform von und für Frauen von Grund auf zu helfen und dabei modernste Technologien mit sinnvollem Handeln in einem schnell wachsenden Startup-Umfeld zu verbinden.",
    en: "At FemRide, you'll have the unique opportunity to help launch and operate Europe's first women-focused ride-hailing platform from the ground up, combining cutting-edge technology with meaningful purpose in a fast-growing startup environment."
  },
  teamJoinButton: {
    de: "Kontaktiere uns",
    en: "Contact Us"
  },

  // Applicant Pool Consent
  applicantPoolConsentTitle: {
    de: "Aufnahme in den Bewerberpool:",
    en: "Inclusion in the applicant pool:"
  },
  applicantPoolConsentText: {
    de: "Ja, wir fragen eine Einwilligung ab, um unsere Bewerber in einen Bewerberpool aufzunehmen.",
    en: "Yes, we request consent to include our applicants in an applicant pool."
  },
  applicantPoolConsentHint: {
    de: "Die Aufnahme abgelehnter Bewerber in einen Bewerberpool darf nur mit ausdrücklicher Einwilligung des Bewerbers erfolgen. Die Daten sollten nach spätestens zwei (2) Jahren wieder gelöscht werden.",
    en: "The inclusion of rejected applicants in an applicant pool may only be done with the explicit consent of the applicant. The data should be deleted after no more than two (2) years."
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

  // Translate function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

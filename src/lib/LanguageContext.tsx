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
    en: 'Imprint'
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
    de: 'FemRide - Europas erste Ride-Hailing-Plattform, exklusiv für Frauen',
    en: 'FemRide - Europe\'s first ride-hailing platform, exclusively for women'
  },
  heroButton: {
    de: 'FemRide App herunterladen',
    en: 'Get the FemRide app'
  },
  heroComingSoon: {
    de: 'Bald im Google Play & App Store verfügbar',
    en: 'Coming soon to Google Play & App Store'
  },
  
  // Services Section
  servicesTitle: {
    de: 'Was wir anbieten',
    en: 'What we offer'
  },
  servicesSubtitle: {
    de: 'Entdecken Sie unsere maßgeschneiderten Dienste für Fahrgäste, Fahrerinnen und Flottenpartner',
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
    de: 'Exklusiv für Frauen, mit verifizierten Fahrerinnen, für maximale Sicherheit und Vertrauen.',
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
    de: 'Fahre ausschließlich Frauen, verdiene fair und sei Teil von FemRide und unserer Community.',
    en: 'Drive exclusively women, earn fairly and be part of FemRide and our community.'
  },
  servicesButton2: {
    de: 'Jetzt Fahrerin werden',
    en: 'Become a driver now'
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
    de: "Maximieren Sie Ihre Flotten Auslastung und profitieren Sie von FemRide's Wachstum und attraktiven Konditionen.",
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
    de: 'Sie sind Flottenunternehmer und möchten Ihre Fahrzeuge über FemRide einsetzen?',
    en: 'Are you a fleet entrepreneur and want to use your vehicles through FemRide?'
  },
  contactText2: {
    de: 'Sie sind Fahrerin und möchten Teil unserer Plattform werden?',
    en: 'Are you a driver and want to become part of our platform?'
  },
  contactText3: {
    de: 'Oder Sie möchten mit uns kooperieren, weil Sie unsere Vision teilen?',
    en: 'Or would you like to cooperate with us because you share our vision?'
  },
  contactText4: {
    de: 'Dann kontaktieren Sie uns über das Formular – wir melden uns umgehend bei Ihnen!',
    en: 'Then contact us using the form – we will get back to you immediately!'
  },
  contactText5: {
    de: 'Wir freuen uns darauf, gemeinsam Mobilität sicherer und fairer zu gestalten.',
    en: 'We look forward to making mobility safer and fairer together.'
  },
  contactNameLabel: {
    de: 'Name',
    en: 'Name'
  },
  contactNamePlaceholder: {
    de: 'Ihr vollständiger Name',
    en: 'Your full name'
  },
  contactEmailLabel: {
    de: 'E-Mail',
    en: 'Email'
  },
  contactEmailPlaceholder: {
    de: 'Ihre E-Mail-Adresse',
    en: 'Your email address'
  },
  contactPhoneLabel: {
    de: 'Telefon',
    en: 'Phone'
  },
  contactPhonePlaceholder: {
    de: 'Ihre Telefonnummer (optional)',
    en: 'Your phone number (optional)'
  },
  contactMessageLabel: {
    de: 'Nachricht',
    en: 'Message'
  },
  contactMessagePlaceholder: {
    de: 'Ihre Nachricht an uns...',
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
    de: 'Vielen Dank für Ihre Nachricht. Wir werden uns umgehend bei Ihnen melden.',
    en: 'Thank you for your message. We will get back to you as soon as possible.'
  },
  contactErrorTitle: {
    de: 'Fehler beim Senden',
    en: 'Error sending message'
  },
  contactErrorDesc: {
    de: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
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
    de: 'Aykut Atli (Geschäftsführer)',
    en: 'Aykut Atli (CEO)'
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
    de: 'HRB 272631',
    en: 'HRB 272631'
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
    de: 'Lernen Sie unseren Gründer kennen',
    en: 'Meet Our Founder'
  },
  
  // Latest Features Section
  latestFeaturesSectionTitle: {
    de: 'Fahrt im Voraus buchen',
    en: 'Book a ride in advance'
  },
  latestFeaturesSectionText: {
    de: 'Planen Sie eine Reise? Buchen Sie Ihre Fahrt im Voraus für noch bequemere Flughafentransfers, wichtige Meetings oder andere Termine, die Pünktlichkeit erfordern. Geben Sie einfach Ihre Details ein und sichern Sie Ihre Fahrt bis zu 90 Tage im Voraus.',
    en: 'Planning a trip? Schedule a ride in advance for even more convenient airport transfers, important meetings, or any occasion that requires punctuality. Simply enter your details and secure your ride up to 90 days ahead.'
  },
  forFemaleDrivers: {
    de: 'Für Fahrerinnen',
    en: 'For female drivers'
  },
  forFleetOperators: {
    de: 'Für Flottenunternehmen',
    en: 'For fleet operators'
  },
  
  // Download Section
  downloadSectionTitle: {
    de: 'Laden Sie unsere App herunter',
    en: 'Download our app'
  },
  downloadSectionSubtitle: {
    de: 'Bald im Google Play & App Store verfügbar',
    en: 'Coming soon to Google Play & App Store'
  },
  downloadSectionDesc: {
    de: 'Scannen Sie den QR-Code mit Ihrer Handykamera, um die FemRide App herunterzuladen.',
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
    de: 'Bleiben Sie auf dem Laufenden und erfahren Sie als Erste/r, wenn unsere App verfügbar ist',
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
    de: 'FemRide macht den Unterschied! – Eine Umfrage mit über 100 Teilnehmer:innen, davon 90 % Frauen, zeigt: Sichere Mobilität ist ein dringendes Bedürfnis.',
    en: 'FemRide makes the difference! – A survey with over 100 participants, 90% of whom are women, shows: Safe mobility is an urgent need.'
  },
  aboutTestimonial1Title: {
    de: '„Endlich eine sichere Alternative!"',
    en: '"Finally a safe alternative!"'
  },
  aboutTestimonial1Desc: {
    de: 'der Frauen fühlen sich mit einer Ride-Hailing-Plattform, exklusiv für Frauen sicherer. FemRide schafft Vertrauen durch geprüfte Fahrerinnen und Schutzmaßnahmen für Frauen und Fahrerinnen.',
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
    de: 'der Frauen sind überzeugt, dass FemRide eine nachhaltige Lösung für mehr Sicherheit im Ride-Hailing bietet. Eine Plattform, die Frauen mehr Freiheit und Unabhängigkeit denn je ermöglicht.',
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
    de: 'Werde ein Teil der FemRide Bewegung',
    en: 'Become part of the FemRide movement'
  },
  joinUsSectionDescription: {
    de: 'Für Sichere Mobilität, mehr Chancen, eine gerechtere Zukunft!',
    en: 'For safe mobility, more opportunities, a fairer future!'
  },
  forFemaleDriversDesc: {
    de: 'Werde Fahrerin und schließe dich einer FemRide-Flotte in Deutschland an! Auf der Suche nach einer Fahrerin-Position in Deutschland? Werde Teil eines Flottenunternehmens, das mit FemRide kooperiert, und fahre für eine Plattform, die Sicherheit, Chancengleichheit und faire Verdienstmöglichkeiten in den Mittelpunkt stellt. Nutze deine Chance auf einen flexiblen, sicheren Job mit attraktiven Einkommensperspektiven!',
    en: 'Become a driver and join a FemRide fleet in Germany! Looking for a driver position in Germany? Become part of a fleet company that cooperates with FemRide, and drive for a platform that focuses on safety, equal opportunities, and fair earning potential. Take advantage of your chance for a flexible, secure job with attractive income prospects!'
  },
  forFemaleDriversButton: {
    de: 'Jetzt als Fahrerin anmelden!',
    en: 'Sign up as a driver now!'
  },
  forFleetOperatorsDesc: {
    de: 'Werde Flottenpartner von FemRide in Deutschland! Besitzt du ein Flottenunternehmen und suchst nach neuen, lukrativen Einsatzmöglichkeiten? Kooperiere mit FemRide und werde Teil einer Plattform, die gesellschaftlichen Impact und nachhaltige Mobilität in den Mittelpunkt stellt. Nutze dein Potenzial und steigere deine Flottenauslastung mit FemRide!',
    en: 'Become a fleet partner of FemRide in Germany! Do you own a fleet company and are looking for new, lucrative deployment opportunities? Cooperate with FemRide and become part of a platform that focuses on social impact and sustainable mobility. Use your potential and increase your fleet utilization with FemRide!'
  },
  forFleetOperatorsButton: {
    de: 'Jetzt als Flottenpartner registrieren!',
    en: 'Register as a fleet partner now!'
  },
  
  // FAQ Section
  faqMainTitle: {
    de: 'Häufig gestellte Fragen',
    en: 'Frequently Asked Questions'
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
    de: 'Subunternehmer',
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
    de: 'FAQs für Subunternehmer',
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
    de: 'Ihre E-Mail-Adresse',
    en: 'Your email address'
  },
  newsletterButton: {
    de: 'Anmelden',
    en: 'Sign up'
  },
  newsletterSuccess: {
    de: 'Vielen Dank für Ihre Anmeldung!',
    en: 'Thank you for subscribing!'
  },
  newsletterError: {
    de: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    en: 'An error occurred. Please try again.'
  },
  newsletterInfo: {
    de: 'Erhalten Sie Updates über FemRide und unsere App-Veröffentlichung',
    en: 'Get updates about FemRide and our app release'
  },
  
  // Cookie Consent translations
  cookieTitle: {
    de: 'Wir verwenden Cookies',
    en: 'We use cookies'
  },
  cookieDescription: {
    de: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer Datenschutzrichtlinie zu.',
    en: 'We use cookies to provide you with the best experience on our website. By using our website, you agree to the use of cookies in accordance with our privacy policy.'
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

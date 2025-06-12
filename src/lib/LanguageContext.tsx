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
    de: 'Du bist Flottenunternehmerin und möchtest deine Fahrzeuge über FemRide einsetzen?',
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
    de: 'Dann kontaktiere uns über das Formular – wir melden uns umgehend bei dir!',
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
    de: 'Lerne unseren Gründer kennen',
    en: 'Meet Our Founder'
  },

  // Latest Features Section
  latestFeaturesSectionTitle: {
    de: 'Fahrt im Voraus buchen',
    en: 'Book a ride in advance'
  },
  latestFeaturesSectionText: {
    de: 'Planst du eine Reise? Buche deine Fahrt im Voraus für noch bequemere Flughafentransfers, wichtige Meetings oder andere Termine, die Pünktlichkeit erfordern. Gib einfach deine Details ein und sichere dir deine Fahrt bis zu 90 Tage im Voraus.',
    en: 'Planning a trip? Schedule a ride in advance for even more convenient airport transfers, important meetings, or any occasion that requires punctuality. Simply enter your details and secure your ride up to 90 days ahead.'
  },
  forFemaleDrivers: {
    de: 'Werde Fahrerin und tritt einer FemRide-Flotte in Deutschland bei!',
    en: 'Become a driver and join a FemRide fleet in Germany!'
  },
  forFleetOperators: {
    de: 'Werde Flottenpartner von FemRide in Deutschland!',
    en: 'Become a fleet partner of FemRide in Germany!'
  },

  // Download Section
  downloadSectionTitle: {
    de: 'Lade unsere App herunter',
    en: 'Download our app'
  },
  downloadSectionSubtitle: {
    de: 'Bald im Google Play & App Store verfügbar',
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
    de: 'Auf der Suche nach einer Fahrerin-Position in Deutschland? Werde Teil eines Flottenunternehmens, das mit FemRide kooperiert, und fahre für eine Plattform, die Sicherheit, Chancengleichheit und faire Verdienstmöglichkeiten in den Mittelpunkt stellt. Nutze deine Chance auf einen flexiblen, sicheren Job mit attraktiven Einkommensperspektiven!',
    en: 'Looking for a driver position in Germany? Become part of a fleet company that cooperates with FemRide, and drive for a platform that focuses on safety, equal opportunities, and fair earning potential. Take advantage of your chance for a flexible, secure job with attractive income prospects!'
  },
  forFemaleDriversButton: {
    de: 'Jetzt als Fahrerin anmelden!',
    en: 'Sign up as a driver now!'
  },
  forFleetOperatorsDesc: {
    de: 'Besitzt du ein Flottenunternehmen und suchst nach neuen, lukrativen Einsatzmöglichkeiten? Kooperiere mit FemRide und werde Teil einer Plattform, die gesellschaftlichen Impact und nachhaltige Mobilität in den Mittelpunkt stellt. Nutze dein Potenzial und steigere deine Flottenauslastung mit FemRide!',
    en: 'Do you own a fleet company and are looking for new, lucrative deployment opportunities? Cooperate with FemRide and become part of a platform that focuses on social impact and sustainable mobility. Use your potential and increase your fleet utilization with FemRide!'
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
  faqMainDesc: {
    de: 'Wähle eine Kategorie aus, um alle häufig gestellten Fragen und Antworten zu sehen.',
    en: 'Select a category to see all frequently asked questions and answers.'
  },
  viewAllFAQs: {
    de: 'Alle FAQs anzeigen',
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
    de: 'Wir verwenden Cookies',
    en: 'We use cookies'
  },
  cookieDescription: {
    de: 'Wir verwenden Cookies, um dir die bestmögliche Erfahrung auf unserer Website zu bieten. Durch die Nutzung unserer Website stimmst du der Verwendung von Cookies gemäß unserer Datenschutzrichtlinie zu.',
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
    de: 'Sicher und komfortabel unterwegs - exklusiv für Frauen, mit verifizierten Fahrerinnen. Erlebe eine neue Art der Mobilität.',
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
  driverFormSubmit: {
    de: 'Bewerbung absenden',
    en: 'Submit Application'
  },
  driverFormSubmitting: {
    de: 'Wird gesendet...',
    en: 'Submitting...'
  },
  driverApplicationSuccessTitle: {
    de: 'Bewerbung erfolgreich eingereicht',
    en: 'Application Successfully Submitted'
  },
  driverApplicationSuccessDesc: {
    de: 'Vielen Dank für deine Bewerbung. Wir werden uns in Kürze bei dir melden.',
    en: 'Thank you for your application. We will contact you shortly.'
  },
  driverApplicationErrorTitle: {
    de: 'Fehler beim Senden',
    en: 'Error Submitting Application'
  },
  driverApplicationErrorDesc: {
    de: 'Es gab ein Problem beim Senden deiner Bewerbung. Bitte versuche es später erneut.',
    en: 'There was a problem submitting your application. Please try again later.'
  },
  driverApplicationEmailSubject: {
    en: "FemRide Driver Application",
    de: "FemRide Fahrerbewerbung",
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
    de: "Trage dich in unsere Warteliste ein und erfahre als Erste, wenn unsere App verfügbar ist. Wir revolutionieren die Mobilität für Frauen mit Sicherheit als oberste Priorität.",
    en: "Join our waiting list and be the first to know when our app launches. We're revolutionizing mobility for women with safety as our top priority."
  },
  waitingListUrgency: {
    de: "Nur die ersten 1.000 Nutzerinnen erhalten kostenlosen Probemonat",
    en: "Only the first 1,000 users get a free trial month"
  },
  waitingListSocialProof: {
    de: "Über {count} Frauen bereits angemeldet",
    en: "Over {count} women already signed up"
  },
  waitingListRecentSignup: {
    de: "{name} aus {city} ist gerade beigetreten",
    en: "{name} from {city} just joined"
  },
  waitingListReferralDescription: {
    de: "Lade Freunde ein und steige in der Warteliste auf! Für jeden Freund, den du einlädst, rückst du 10 Plätze nach vorne.",
    en: "Invite friends and move up the waitlist! For each friend you invite, you'll move up 10 places."
  },
  waitingListTrustSafety: {
    de: "Sicherheit zuerst",
    en: "Safety First"
  },
  waitingListTrustSafetyDesc: {
    de: "Fahrerinnen für Fahrgäste. Deine Sicherheit ist unsere oberste Priorität.",
    en: "Women drivers for women passengers. Your safety is our top priority."
  },
  waitingListTrustCommunity: {
    de: "Wachsende Gemeinschaft",
    en: "Growing Community"
  },
  waitingListTrustCommunityDesc: {
    de: "Schließe dich Tausenden von Frauen an, die bereits auf unserer Warteliste stehen.",
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
    de: "Jetzt Platz sichern",
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
  waitingListReferralOptional: {
    de: "Haben Sie einen Referral-Code?",
    en: "Have a referral code?"
  },
  // Exit-intent popup translations
  waitingListExitTitle: {
    de: "Warten Sie! Verpassen Sie nicht den sicheren Start",
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
    de: "Teile diesen Code mit Freunden, um in der Warteliste aufzusteigen!",
    en: "Share this code with friends to move up the waitlist!"
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
    de: "Willkommen in der FemRide Community! Hier ist ein Vorgeschmack auf die App, die deine Mobilität revolutionieren wird.",
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
    de: "Wir arbeiten hart daran, die App zu perfektionieren. Du erhältst eine E-Mail, sobald wir bereit für den Start sind.",
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

  // User type selection translations
  userTypeLabel: {
    de: "Ich möchte mich anmelden als:",
    en: "I want to join as:"
  },
  userTypePassenger: {
    de: "🚗 Fahrgast (suche Fahrten)",
    en: "🚗 Passenger (looking for rides)"
  },
  userTypeDriver: {
    de: "👩‍💼 Fahrerin (möchte für FemRide fahren)",
    en: "👩‍💼 Driver (want to drive for FemRide)"
  },
  userTypePassengerShort: {
    de: "Fahrgast",
    en: "Passenger"
  },
  userTypeDriverShort: {
    de: "Fahrerin",
    en: "Driver"
  },
  driverReferralBonus: {
    de: "Fahrerinnen erhalten +5 Plätze pro Empfehlung",
    en: "Drivers get +5 places per referral"
  },
  passengerReferralBonus: {
    de: "Fahrgäste erhalten +10 Plätze pro Empfehlung",
    en: "Passengers get +10 places per referral"
  },
  bothWaitlistsInfo: {
    de: "💡 Du kannst dich sowohl als Fahrerin als auch als Fahrgast anmelden!",
    en: "💡 You can sign up for both driver and passenger waitlists!"
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
    de: "Teile diesen Code mit Freunden, um in der Warteliste aufzusteigen!",
    en: "Share this code with friends to move up in the waitlist!"
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

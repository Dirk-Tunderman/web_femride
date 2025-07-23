Inhaltsverzeichnis
Datenschutzerklärung ......................................................................................................................................................................................... 2
Datenschutzerklärung als HTML-Quellcode .......................................................................................................................................... 20
 1 / 20
Ihre Datenschutzerklärung
Im Folgenden finden Sie die Textdaten für Ihre persönliche Datenschutzerklärung für Ihre Website gemäß der von
Ihnen getätigten Angaben. Sofern Sie in Ihrer Website einen Eingabe-Editor für Ihre Inhalte nutzen, können Sie den
folgenden Text direkt herauskopieren und dort einfügen.
Sofern Sie die Inhalte alternativ als HTML-Quellcode in Ihre Website integrieren möchten, können Sie den
anschließend aufgeführten HTML-Quellcode nutzen.
Achtung: Einwilligung erforderlich
Zahlreiche Dienste dürfen Sie nach herrschender Auffassung der Datenschutzbehörden und Gerichte nur
mit Einwilligung einsetzen. Das betrifft v. a. Analyse- und Marketing-Tools (z. B. Google Analytics oder MetaPixel). Eine Einwilligungspflicht besteht vor allem für die folgenden von Ihnen ausgewählten Tools:
Google Analytics, Google Conversion-Tracking, Google Drive, Instagram, LinkedIn
Achtung: Einwilligung empfohlen
Bei bestimmten Diensten ist nicht abschließend geklärt, ob sie eine Einwilligung benötigen. Angesichts der
derzeitigen rechtlichen Entwicklung ist es aber wahrscheinlich, dass die Datenschutzbehörden und Gerichte
auch für diese Tools eine Einwilligungspflicht bejahen werden. Wenn Sie das rechtliche Risiko einer
Abmahnung oder eines behördlichen Verfahrens / Bußgelds vermeiden möchten, empfehlen wir Ihnen auch
für folgende Dienste eine Einwilligung einzuholen:
Google Tag Manager, eRecht24 Affiliate-Programm
Eine Übersicht der von uns empfohlenen Consent Tools finden Sie hier:
https://www.e-recht24.de/mitglieder/vorteilsangebote/consent-tools/.
Für das Teilen von Inhalten auf Social-Media-Plattformen bietet eRecht24 außerdem das eRecht24 Safe
Sharing Tool an:
https://www.e-recht24.de/mitglieder/tools/erecht24-safe-sharing/.
Sie nutzen Google Analytics. Wenn Sie entgegen unserer Empfehlung keine Einwilligung hierfür einholen,
sollten Sie zumindest die Möglichkeit zum sogenannten Opt-Out unterhalb Ihrer Datenschutzerklärung
einbinden, mit dem der Websitebesucher das Tracking seines Besuchs deaktivieren kann. Gehen Sie hierzu
wie folgt vor:
Fügen Sie unterhalb Ihrer Datenschutzerklärung folgenden Text ein: Google Analytics deaktivieren
Fügen Sie unterhalb dieses Texts folgenden HTML-Code ein:
<button onclick="gaOptout();">Google Analytics deaktivieren</button>
 2 / 20
Damit dieser Button funktioniert, müssen Sie folgenden HTML-Quellcode mit Javascript VOR Ihrem
Google-Analytics-Tracking-Code platzieren.
Ersetzen Sie zudem die Zeichenfolge G-XXXXXXXX durch Ihre Google Analytics Mess-ID.
<script type="text/javascript">
var gaProperty = 'G-XXXXXXXX';
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
window[disableStr] = true;
}
function gaOptout() {
document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
window[disableStr] = true;
alert('Das Tracking durch Google Analytics wurde in Ihrem Browser für diese Website deaktiviert.');
}
</script>
Achten Sie darüber hinaus bitte darauf, dass der Javascript-Aufruf im Opt-Out-Button nach dem Speichern
erhalten bleibt. Einige Content Management Systeme, wie z. B. Joomla! oder WordPress, entfernen unter
Umständen diese Javascript-Funktion. Prüfen Sie auf Ihrer Website durch Anklicken des Opt-Out-Buttons,
ob der Cookie gesetzt wird. Funktioniert dieser Button nicht und wird somit nach dem Klick der Opt-OutCookie nicht gesetzt, ist Ihre Google-Analytics-Einbindung ohne Verwendung eines Consent-Tools nicht
rechtssicher!
Textversion der Datenschutzerklärung für Ihre Website
Datenschutzerklärung
1. Datenschutz auf einen Blick
Allgemeine Hinweise
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
Datenerfassung auf dieser Website
Wer ist verantwortlich für die Datenerfassung auf dieser Website?
Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
 3 / 20
Wie erfassen wir Ihre Daten?
Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
Daten handeln, die Sie in ein Kontaktformular eingeben.
Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere ITSysteme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
Wofür nutzen wir Ihre Daten?
Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote,
Bestellungen oder sonstige Auftragsanfragen verarbeitet.
Welche Rechte haben Sie bezüglich Ihrer Daten?
Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
Analyse-Tools und Tools von Drittanbietern
Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
allem mit sogenannten Analyseprogrammen.
Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
Datenschutzerklärung.
2. Hosting
Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
Externes Hosting
Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
und sonstige Daten, die über eine Website generiert werden, handeln.
Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung
von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
 4 / 20
Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
Wir setzen folgende(n) Hoster ein:
Vercel (with built-in CDN)
Auftragsverarbeitung
Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren
Weisungen und unter Einhaltung der DSGVO verarbeitet.
3. Allgemeine Hinweise und Pflichtinformationen
Datenschutz
Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
dieser Datenschutzerklärung.
Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
und zu welchem Zweck das geschieht.
Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
möglich.
Hinweis zur verantwortlichen Stelle
Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
FemRide UG (Haftungsbeschränkt)
Waldstraße 222A, 12527 Berlin
(Geschäftsführer: Aykut Atli)
Telefon: +49 157 58195608
E-Mail: info@femride.de
Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
entscheidet.
Speicherdauer
Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
 5 / 20
Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
Website
Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
Absätzen dieser Datenschutzerklärung informiert.
Empfänger von personenbezogenen Daten
Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
gemeinsame Verarbeitung geschlossen.
Widerruf Ihrer Einwilligung zur Datenverarbeitung
Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
Datenverarbeitung bleibt vom Widerruf unberührt.
Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
Direktwerbung (Art. 21 DSGVO)
WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
 6 / 20
VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
NACH ART. 21 ABS. 2 DSGVO).
Beschwerderecht bei der zuständigen Aufsichtsbehörde
Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
Recht auf Datenübertragbarkeit
Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
verlangen, erfolgt dies nur, soweit es technisch machbar ist.
Auskunft, Berichtigung und Löschung
Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
Recht auf Einschränkung der Verarbeitung
Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
folgenden Fällen:
Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
zu verlangen.
Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
eines Mitgliedstaats verarbeitet werden.
Verschlüsselter Zahlungsverkehr auf dieser Website
Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten
(z. B. Kontonummer bei Einzugsermächtigung) zu übermitteln, werden diese Daten zur Zahlungsabwicklung
 7 / 20
benötigt.
Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt
ausschließlich über eine verschlüsselte SSL- bzw. TLS-Verbindung. Eine verschlüsselte Verbindung erkennen
Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol
in Ihrer Browserzeile.
Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von
Dritten mitgelesen werden.
Widerspruch gegen Werbe-E-Mails
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
Werbeinformationen, etwa durch Spam-E-Mails, vor.
4. Datenerfassung auf dieser Website
Cookies
Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf
Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
(Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-PartyCookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von
Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken
verwendet werden.
Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der
Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf
Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur
technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die
Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
TDDDG); die Einwilligung ist jederzeit widerrufbar.
Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser
Datenschutzerklärung entnehmen.
 8 / 20
Kontaktformular
Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
Einwilligung weiter.
Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
widerrufbar.
Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
(z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
insbesondere Aufbewahrungsfristen – bleiben unberührt.
Anfrage per E-Mail, Telefon oder Telefax
Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
widerrufbar.
Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
(z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
Registrierung auf dieser Website
Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu
eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes,
für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig
angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.
Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen
wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.
Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt zum Zwecke der Durchführung des
durch die Registrierung begründeten Nutzungsverhältnisses und ggf. zur Anbahnung weiterer Verträge (Art.
6 Abs. 1 lit. b DSGVO).
Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf dieser Website
registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
 9 / 20
5. Soziale Medien
Instagram
Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden
angeboten durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem
Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website
durch Sie.
Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons
die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser
Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine
Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und §
25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an
Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand
Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung
verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich
auf die Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung
erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung.
Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame
Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:
https://www.facebook.com/legal/controller_addendum. Laut dieser Vereinbarung sind wir für die Erteilung
der Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und für die
datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die
Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte
(z. B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten können Sie
direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir
verpflichtet, diese an Facebook weiterzuleiten.
Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
Details finden Sie hier:
https://www.facebook.com/legal/EU_data_transfer_addendum,
https://privacycenter.instagram.com/policy/ und
https://de-de.facebook.com/help/566994660333381.
Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram:
https://privacycenter.instagram.com/policy/.
Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der
DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung
europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach
dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
https://www.dataprivacyframework.gov/participant/4452.
LinkedIn
Diese Website nutzt Elemente des Netzwerks LinkedIn. Anbieter ist die LinkedIn Ireland Unlimited
 10 / 20
Company, Wilton Plaza, Wilton Place, Dublin 2, Irland.
Bei jedem Abruf einer Seite dieser Website, die Elemente von LinkedIn enthält, wird eine Verbindung zu
Servern von LinkedIn aufgebaut. LinkedIn wird darüber informiert, dass Sie diese Website mit Ihrer IPAdresse besucht haben. Wenn Sie den „Recommend-Button“ von LinkedIn anklicken und in Ihrem Account
bei LinkedIn eingeloggt sind, ist es LinkedIn möglich, Ihren Besuch auf dieser Website Ihnen und Ihrem
Benutzerkonto zuzuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom
Inhalt der übermittelten Daten sowie deren Nutzung durch LinkedIn haben.
Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und §
25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
Details finden Sie hier:
https://www.linkedin.com/help/linkedin/answer/a1343190/datenubertragung-aus-der-eu-dem-ewr-undder-schweiz?lang=de
Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von LinkedIn unter:
https://www.linkedin.com/legal/privacy-policy.
Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der
DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung
europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach
dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
https://www.dataprivacyframework.gov/participant/5448.
6. Analyse-Tools und Werbung
Google Tag Manager
Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow
Street, Dublin 4, Irland.
Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools und andere
Technologien auf unserer Website einbinden können. Der Google Tag Manager selbst erstellt keine
Nutzerprofile, speichert keine Cookies und nimmt keine eigenständigen Analysen vor. Er dient lediglich der
Verwaltung und Ausspielung der über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch
Ihre IP-Adresse, die auch an das Mutterunternehmen von Google in die Vereinigten Staaten übertragen
werden kann.
Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
Websitebetreiber hat ein berechtigtes Interesse an einer schnellen und unkomplizierten Einbindung und
Verwaltung verschiedener Tools auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt
wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist
jederzeit widerrufbar.
Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der
DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung
europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach
dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
 11 / 20
https://www.dataprivacyframework.gov/participant/5780.
Google Analytics
Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland
Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren.
Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer,
verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden in einer User-ID
zusammengefasst und dem jeweiligen Endgerät des Websitebesuchers zugeordnet.
Des Weiteren können wir mit Google Analytics u. a. Ihre Maus- und Scrollbewegungen und Klicks
aufzeichnen. Ferner verwendet Google Analytics verschiedene Modellierungsansätze, um die erfassten
Datensätze zu ergänzen und setzt Machine-Learning-Technologien bei der Datenanalyse ein.
Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse
des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die von Google erfassten
Informationen über die Benutzung dieser Website werden in der Regel an einen Server von Google in den
USA übertragen und dort gespeichert.
Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und §
25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
Details finden Sie hier:
https://privacy.google.com/businesses/controllerterms/mccs/.
Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der
DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung
europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach
dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
https://www.dataprivacyframework.gov/participant/5780.
IP Anonymisierung
Die Google Analytics IP-Anonymisierung ist aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb
von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die
volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des
Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website
auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der
Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber
zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht
mit anderen Daten von Google zusammengeführt.
Browser Plugin
Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das unter dem
folgenden Link verfügbare Browser-Plugin herunterladen und installieren:
https://tools.google.com/dlpage/gaoptout?hl=de.
Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der
Datenschutzerklärung von Google:
 12 / 20
https://support.google.com/analytics/answer/6004245?hl=de.
Google-Signale
Wir nutzen Google-Signale. Wenn Sie unsere Website besuchen, erfasst Google Analytics u. a. Ihren
Standort, Suchverlauf und YouTube-Verlauf sowie demografische Daten (Besucherdaten). Diese Daten
können mit Hilfe von Google-Signal für personalisierte Werbung verwendet werden. Wenn Sie über ein
Google-Konto verfügen, werden die Besucherdaten von Google-Signal mit Ihrem Google-Konto verknüpft
und für personalisierte Werbebotschaften verwendet. Die Daten werden außerdem für die Erstellung
anonymisierter Statistiken zum Nutzerverhalten unserer User verwendet.
Auftragsverarbeitung
Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen
Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
Google Analytics E-Commerce-Messung
Diese Website nutzt die Funktion „E-Commerce-Messung“ von Google Analytics. Mit Hilfe von E-CommerceMessung kann der Websitebetreiber das Kaufverhalten der Websitebesucher zur Verbesserung seiner
Online-Marketing-Kampagnen analysieren. Hierbei werden Informationen, wie zum Beispiel die getätigten
Bestellungen, durchschnittliche Bestellwerte, Versandkosten und die Zeit von der Ansicht bis zum Kauf
eines Produktes erfasst. Diese Daten können von Google unter einer Transaktions-ID zusammengefasst
werden, die dem jeweiligen Nutzer bzw. dessen Gerät zugeordnet ist.
Google Conversion-Tracking
Diese Website nutzt Google Conversion Tracking. Anbieter ist die Google Ireland Limited („Google“), Gordon
House, Barrow Street, Dublin 4, Irland.
Mit Hilfe von Google-Conversion-Tracking können Google und wir erkennen, ob der Nutzer bestimmte
Aktionen durchgeführt hat. So können wir beispielsweise auswerten, welche Buttons auf unserer Website
wie häufig geklickt und welche Produkte besonders häufig angesehen oder gekauft wurden. Diese
Informationen dienen dazu, Conversion-Statistiken zu erstellen. Wir erfahren die Gesamtanzahl der Nutzer,
die auf unsere Anzeigen geklickt haben und welche Aktionen sie durchgeführt haben. Wir erhalten keine
Informationen, mit denen wir den Nutzer persönlich identifizieren können. Google selbst nutzt zur
Identifikation Cookies oder vergleichbare Wiedererkennungstechnologien.
Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und §
25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
Mehr Informationen zu Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von
Google:
https://policies.google.com/privacy?hl=de.
Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der
DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung
europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach
dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
https://www.dataprivacyframework.gov/participant/5780.
7. Plugins und Tools
 13 / 20
Ninja Firewall
Wir haben Ninja Firewall auf dieser Website eingebunden. Anbieter ist die NinTechNet Limited, Unit 1603,
16th Floor, The L. Plaza 367 - 375 Queen‘s Road Central Sheung Wan, Hong Kong (nachfolgend Ninja
Firewall).
Ninja Firewall dient dem Schutz unserer Website vor unerwünschten Zugriffen oder bösartigen
Cyberattacken. Zu diesem Zweck erfasst Ninja Firewall IP-Adresse, Request, Referrer und Zeitpunkt des
Seitenzugriffs. Ninja Firewall ist auf unseren eigenen Servern eingebunden und übermittelt keine
personenbezogenen Daten an den Anbieter des Tools oder sonstige Dritte.
Wir haben die IP-Anonymisierung bei Ninja Firewall aktiviert, sodass das Tool die IP-Adresse nur in
gekürzter Form erfasst.
Die Verwendung von Ninja Firewall erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
Websitebetreiber hat ein berechtigtes Interesse an einem möglichst effektiven Schutz seiner Website vor
Cyberattacken.
8. Online-Marketing und Partnerprogramme
Affiliate-Programme auf dieser Website
Wir nehmen an Affiliate-Partnerprogrammen teil. Bei Affiliate-Partner-Programmen werden
Werbeanzeigen eines Unternehmens auf Webseiten oder sonstigen Medien von anderen Unternehmen des
Affiliate-Partner-Netzwerks platziert. Wenn Sie auf eine dieser Affiliate-Werbeanzeigen klicken, werden Sie
zum beworbenen Angebot weitergeleitet. Sollten Sie anschließend eine bestimmte Transaktion
(Conversion) tätigen, erhält der Affiliate und ggf. der Inhaber des Mediums, auf dem die Werbung platziert
hierfür eine Vergütung. Zur Berechnung dieser Vergütung ist es erforderlich, dass der AffiliateNetzwerkbetreiber nachvollziehen kann, über welche Werbeanzeige Sie auf das jeweilige Angebot
gekommen sind und die vordefinierte Transaktion vorgenommen haben. Hierfür werden Cookies oder
vergleichbare Wiedererkennungstechnologien (z. B. Device-Fingerprinting) eingesetzt.
Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Die Teilnehmer
des Affiliate-Programms haben ein berechtigtes Interesse an der korrekten Berechnung der AffiliateVergütung. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die
Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. DeviceFingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
Wir nehmen an folgenden Affiliate-Programmen teil:
eRecht24 Affiliate-Programm
Betreiber des Affiliate-Netzwerks ist die eRecht24 GmbH & Co KG, Lietzenburger Str. 94, 10719 Berlin.
Wenn Sie auf einen eRecht24-Affiliate-Link klicken, werden Sie zunächst an den Zahlungsdienstleister
Digistore24 (Digistore24 GmbH, St.-Godehard-Straße 32 in 31139 Hildesheim) weitergeleitet, der mithilfe
einer Wiedererkennungstechnologie (z. B. Cookie) vermerkt, dass Sie über unsere Website zu den
eRecht24-Angeboten gelangt sind; dies geschieht zum Zwecke der Abrechnung der Affiliate-Provision.
9. eCommerce und Zahlungsanbieter
Verarbeiten von Kunden- und Vertragsdaten
 14 / 20
Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und Vertragsdaten zur Begründung,
inhaltlichen Ausgestaltung und Änderung unserer Vertragsbeziehungen. Personenbezogene Daten über die
Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies
erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.
Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO.
Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der
Geschäftsbeziehung und Ablauf der ggf. bestehenden gesetzlichen Aufbewahrungsfristen gelöscht.
Gesetzliche Aufbewahrungsfristen bleiben unberührt.
Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte
Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der
Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.
Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung
ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung,
etwa zu Zwecken der Werbung, erfolgt nicht.
Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
Zahlungsdienste
Wir binden Zahlungsdienste von Drittunternehmen auf unserer Website ein. Wenn Sie einen Kauf bei uns
tätigen, werden Ihre Zahlungsdaten (z. B. Name, Zahlungssumme, Kontoverbindung, Kreditkartennummer)
vom Zahlungsdienstleister zum Zwecke der Zahlungsabwicklung verarbeitet. Für diese Transaktionen
gelten die jeweiligen Vertrags- und Datenschutzbestimmungen der jeweiligen Anbieter. Der Einsatz der
Zahlungsdienstleister erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsabwicklung) sowie im
Interesse eines möglichst reibungslosen, komfortablen und sicheren Zahlungsvorgangs (Art. 6 Abs. 1 lit. f
DSGVO). Soweit für bestimmte Handlungen Ihre Einwilligung abgefragt wird, ist Art. 6 Abs. 1 lit. a DSGVO
Rechtsgrundlage der Datenverarbeitung; Einwilligungen sind jederzeit für die Zukunft widerrufbar.
Folgende Zahlungsdienste / Zahlungsdienstleister setzen wir im Rahmen dieser Website ein:
PayPal
Anbieter dieses Zahlungsdienstes ist PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449
Luxembourg (im Folgenden „PayPal“).
Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
Details finden Sie hier:
https://www.paypal.com/de/webapps/mpp/ua/pocpsa-full.
Details entnehmen Sie der Datenschutzerklärung von PayPal:
https://www.paypal.com/de/webapps/mpp/ua/privacy-full.
Apple Pay
Anbieter des Zahlungsdienstes ist Apple Inc., Infinite Loop, Cupertino, CA 95014, USA. Die
Datenschutzerklärung von Apple finden Sie unter:
https://www.apple.com/legal/privacy/de-ww/.
Google Pay
 15 / 20
Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Die
Datenschutzerklärung von Google finden Sie hier:
https://policies.google.com/privacy.
Klarna
Anbieter ist die Klarna AB, Sveavägen 46, 111 34 Stockholm, Schweden (im Folgenden „Klarna“). Klarna
bietet verschiedene Zahlungsoptionen an (z. B. Ratenkauf). Wenn Sie sich für die Bezahlung mit Klarna
entscheiden (Klarna-Checkout-Lösung), wird Klarna verschiedene personenbezogene Daten von Ihnen
erheben. Klarna nutzt Cookies, um die Verwendung der Klarna-Checkout-Lösung zu optimieren. Details zum
Einsatz von Klarna-Cookies entnehmen Sie folgendem Link:
https://cdn.klarna.com/1.0/shared/content/policy/cookie/de_de/checkout.pdf.
Details hierzu können Sie in der Datenschutzerklärung von Klarna unter folgendem Link nachlesen:
https://www.klarna.com/de/datenschutz/.
Paydirekt
Anbieter dieses Zahlungsdienstes ist die Paydirekt GmbH, Hamburger Allee 26-28, 60486 Frankfurt am
Main, Deutschland (im Folgenden „Paydirekt“). Wenn Sie die Bezahlung mittels Paydirekt ausführen, erhebt
Paydirekt verschiedene Transaktionsdaten und leitet diese an die Bank weiter, bei der Sie mit Paydirekt
registriert sind. Neben den für die Zahlung erforderlichen Daten erhebt Paydirekt im Rahmen der
Transaktionsabwicklung ggf. weitere Daten wie z. B. Lieferadresse oder einzelne Positionen im Warenkorb.
Paydirekt authentifiziert die Transaktion anschließend mit Hilfe des bei der Bank hierfür hinterlegten
Authentifizierungsverfahrens. Anschließend wird der Zahlbetrag von Ihrem Konto auf unser Konto
überwiesen. Weder wir noch Dritte haben Zugriff auf Ihre Kontodaten. Details zur Zahlung mit Paydirekt
entnehmen Sie den AGB und den Datenschutzbestimmungen von Paydirekt unter:
https://www.paydirekt.de/agb/index.html.
Sofortüberweisung
Anbieter dieses Zahlungsdienstes ist die Sofort GmbH, Theresienhöhe 12, 80339 München (im Folgenden
„Sofort GmbH“). Mit Hilfe des Verfahrens „Sofortüberweisung“ erhalten wir in Echtzeit eine
Zahlungsbestätigung von der Sofort GmbH und können unverzüglich mit der Erfüllung unserer
Verbindlichkeiten beginnen. Wenn Sie sich für die Zahlungsart „Sofortüberweisung“ entschieden haben,
übermitteln Sie die PIN und eine gültige TAN an die Sofort GmbH, mit der diese sich in Ihr Online-BankingKonto einloggen kann. Sofort GmbH überprüft nach dem Einloggen automatisch Ihren Kontostand und führt
die Überweisung an uns mit Hilfe der von Ihnen übermittelten TAN durch. Anschließend übermittelt sie uns
unverzüglich eine Transaktionsbestätigung. Nach dem Einloggen werden außerdem Ihre Umsätze, der
Kreditrahmen des Dispokredits und das Vorhandensein anderer Konten sowie deren Bestände
automatisiert geprüft. Neben der PIN und der TAN werden auch die von Ihnen eingegebenen Zahlungsdaten
sowie Daten zu Ihrer Person an die Sofort GmbH übermittelt. Bei den Daten zu Ihrer Person handelt es sich
um Vor- und Nachnamen, Adresse, Telefonnummer(n), E-Mail-Adresse, IP-Adresse und ggf. weitere zur
Zahlungsabwicklung erforderliche Daten. Die Übermittlung dieser Daten ist notwendig, um Ihre Identität
zweifelsfrei zu festzustellen und Betrugsversuchen vorzubeugen. Details zur Zahlung mit
Sofortüberweisung entnehmen Sie folgendem Link:
https://www.klarna.com/sofort/.
Amazon Pay
Anbieter dieses Zahlungsdienstes ist die Amazon Payments Europe S.C.A., 38 avenue J.F. Kennedy, L-1855
Luxemburg.
Details zum Umgang mit Ihren Daten können Sie in der Datenschutzerklärung von Amazon Pay unter
folgendem Link nachlesen:
 16 / 20
https://pay.amazon.de/help/201212490?ld=APDELPADirect.
PayOne
Anbieter dieses Zahlungsdienstes ist PAYONE GmbH, Lyoner Straße 9, 60528 Frankfurt am Main (im
Folgenden „PayOne“). Details entnehmen Sie der Datenschutzerklärung von PayOne:
https://www.payone.com/DE-de/datenschutz.
giropay
Anbieter dieses Zahlungsdienstes ist die paydirekt GmbH, Stephanstraße 14 – 16, 60313 Frankfurt am Main
(im Folgenden „giropay“).
Details entnehmen Sie der Datenschutzerklärung von giropay:
https://www.paydirekt.de/agb/index.html.
American Express
Anbieter dieses Zahlungsdienstes ist die American Express Europe S.A., Theodor-Heuss-Allee 112, 60486
Frankfurt am Main, Deutschland (im Folgenden „American Express“).
American Express kann Daten an seine Muttergesellschaft in die USA übermitteln. Die Datenübertragung in
die USA wird auf die Binding Corporate Rules gestützt. Details finden Sie hier:
https://www.americanexpress.com/en-cz/company/legal/privacy-centre/binding-corporate-rules/.
Weitere Informationen entnehmen Sie der Datenschutzerklärung von American Express:
https://www.americanexpress.com/de-de/firma/legal/datenschutz-center/online-datenschutzerklarung/.
Mastercard
Anbieter dieses Zahlungsdienstes ist die Mastercard Europe SA, Chaussée de Tervuren 198A, B-1410
Waterloo, Belgien (im Folgenden „Mastercard“).
Mastercard kann Daten an seine Muttergesellschaft in die USA übermitteln. Die Datenübertragung in die
USA wird auf die Binding Corporate Rules von Mastercard gestützt. Details finden Sie hier:
https://www.mastercard.de/de-de/datenschutz.html und
https://www.mastercard.us/content/dam/mccom/global/documents/mastercard-bcrs.pdf.
VISA
Anbieter dieses Zahlungsdienstes ist die Visa Europe Services Inc., Zweigniederlassung London, 1 Sheldon
Square, London W2 6TT, Großbritannien (im Folgenden „VISA“).
Großbritannien gilt als datenschutzrechtlich sicherer Drittstaat. Das bedeutet, dass Großbritannien ein
Datenschutzniveau aufweist, das dem Datenschutzniveau in der Europäischen Union entspricht.
VISA kann Daten an seine Muttergesellschaft in die USA übertragen. Die Datenübertragung in die USA wird
auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:
https://www.visa.de/nutzungsbedingungen/visa-globale-datenschutzmitteilung/mitteilung-zuzustandigkeitsfragen-fur-den-ewr.html.
Weitere Informationen entnehmen Sie der Datenschutzerklärung von VISA:
https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html.
 17 / 20
10. Eigene Dienste
Umgang mit Bewerberdaten
Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B. per E-Mail, postalisch oder via OnlineBewerberformular). Im Folgenden informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im
Rahmen des Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir versichern, dass die
Erhebung, Verarbeitung und Nutzung Ihrer Daten in Übereinstimmung mit geltendem Datenschutzrecht
und allen weiteren gesetzlichen Bestimmungen erfolgt und Ihre Daten streng vertraulich behandelt werden.
Umfang und Zweck der Datenerhebung
Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen
personenbezogenen Daten (z. B. Kontakt- und Kommunikationsdaten, Bewerbungsunterlagen, Notizen im
Rahmen von Bewerbungsgesprächen etc.), soweit dies zur Entscheidung über die Begründung eines
Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage hierfür ist § 26 BDSG nach deutschem Recht
(Anbahnung eines Beschäftigungsverhältnisses), Art. 6 Abs. 1 lit. b DSGVO (allgemeine Vertragsanbahnung)
und – sofern Sie eine Einwilligung erteilt haben – Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist jederzeit
widerrufbar. Ihre personenbezogenen Daten werden innerhalb unseres Unternehmens ausschließlich an
Personen weitergegeben, die an der Bearbeitung Ihrer Bewerbung beteiligt sind.
Sofern die Bewerbung erfolgreich ist, werden die von Ihnen eingereichten Daten auf Grundlage von § 26
BDSG und Art. 6 Abs. 1 lit. b DSGVO zum Zwecke der Durchführung des Beschäftigungsverhältnisses in
unseren Datenverarbeitungssystemen gespeichert.
Aufbewahrungsdauer der Daten
Sofern wir Ihnen kein Stellenangebot machen können, Sie ein Stellenangebot ablehnen oder Ihre Bewerbung
zurückziehen, behalten wir uns das Recht vor, die von Ihnen übermittelten Daten auf Grundlage unserer
berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) bis zu 6 Monate ab der Beendigung des
Bewerbungsverfahrens (Ablehnung oder Zurückziehung der Bewerbung) bei uns aufzubewahren.
Anschließend werden die Daten gelöscht und die physischen Bewerbungsunterlagen vernichtet. Die
Aufbewahrung dient insbesondere Nachweiszwecken im Falle eines Rechtsstreits. Sofern ersichtlich ist,
dass die Daten nach Ablauf der 6-Monatsfrist erforderlich sein werden (z. B. aufgrund eines drohenden oder
anhängigen Rechtsstreits), findet eine Löschung erst statt, wenn der Zweck für die weitergehende
Aufbewahrung entfällt.
Eine längere Aufbewahrung kann außerdem stattfinden, wenn Sie eine entsprechende Einwilligung (Art. 6
Abs. 1 lit. a DSGVO) erteilt haben oder wenn gesetzliche Aufbewahrungspflichten der Löschung
entgegenstehen.
Aufnahme in den Bewerber-Pool
Sofern wir Ihnen kein Stellenangebot machen, besteht ggf. die Möglichkeit, Sie in unseren Bewerber-Pool
aufzunehmen. Im Falle der Aufnahme werden alle Dokumente und Angaben aus der Bewerbung in den
Bewerber-Pool übernommen, um Sie im Falle von passenden Vakanzen zu kontaktieren.
Die Aufnahme in den Bewerber-Pool geschieht ausschließlich auf Grundlage Ihrer ausdrücklichen
Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die Abgabe der Einwilligung ist freiwillig und steht in keinem Bezug
zum laufenden Bewerbungsverfahren. Der Betroffene kann seine Einwilligung jederzeit widerrufen. In
diesem Falle werden die Daten aus dem Bewerber-Pool unwiderruflich gelöscht, sofern keine gesetzlichen
Aufbewahrungsgründe vorliegen.
Die Daten aus dem Bewerber-Pool werden spätestens zwei Jahre nach Erteilung der Einwilligung
 18 / 20
unwiderruflich gelöscht.
Google Drive
Wir haben Google Drive auf dieser Website eingebunden. Anbieter ist die Google Ireland Limited („Google“),
Gordon House, Barrow Street, Dublin 4, Irland.
Google Drive ermöglicht es uns, einen Uploadbereich auf unserer Website einzubinden, in dem Sie Inhalte
hochladen können. Wenn Sie Inhalte hochladen, werden diese auf den Servern von Google Drive
gespeichert. Wenn Sie unsere Website betreten, wird außerdem eine Verbindung zu Google Drive
aufgebaut, sodass Google Drive feststellen kann, dass Sie unsere Website besucht haben.
Die Verwendung von Google Drive erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
Websitebetreiber hat ein berechtigtes Interesse an einem zuverlässigen Uploadbereich auf seiner Website.
Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der
DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung
europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach
dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
https://www.dataprivacyframework.gov/participant/5780.
Auftragsverarbeitung
Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren
Weisungen und unter Einhaltung der DSGVO verarbeitet.
 19 / 20
HTML-Quellcode der Datenschutzerklärung für Ihre Website
Den nachfolgenden Quellcode können Sie kopieren, um die Datenschutzerklärung auf Ihrer Website einzufügen.
Hinweis: Einige Browser und PDF-Reader haben Probleme bei der vollständigen Darstellung des nachfolgenden
HTML-Quellcodes. Wir empfehlen Ihnen für die Anzeige dieses PDF-Dokuments die Nutzung des kostenlosen Adobe
Acrobat Reader DC (Download).
Powered by TCPDF (www.tcpdf.org)
 20 / 20
# Cookie Consent Banner Implementation

## Component Overview

The cookie consent banner is a user interface element that appears at the bottom of the website to inform users about the site's cookie policy and collect their consent. This implementation supports both German and English languages, integrating with the existing language context.

## Functionality

The component provides the following features:

- Multilingual support (German/English) via the LanguageContext
- Persistent user preferences via localStorage
- Options to accept or decline cookies
- Link to the privacy policy for further information
- Responsive design for all device sizes
- Automatic hiding after user interaction
- Doesn't reappear if the user has already made a choice

## Technical Implementation

### File Structure

- `src/components/CookieConsent.tsx` - Main component
- `src/lib/LanguageContext.tsx` - Added translations for cookie consent texts
- `src/App.tsx` - Updated to include the cookie consent component

### Storage Mechanism

User preferences are stored in the browser's localStorage under the key `femrideCookieConsent`:
- `true` - User has accepted cookies
- `false` - User has declined cookies
- Not present - User has not made a choice yet

### Language Integration

The component uses the website's existing language context to display text in either German or English, depending on the user's language preference. All text strings are defined in the LanguageContext.

## User Experience

1. On first visit, the banner appears at the bottom of the screen
2. User can choose to:
   - Accept cookies (stores preference as 'true')
   - Decline cookies (stores preference as 'false')
   - Close the banner (equivalent to declining)
   - Click the link to read the privacy policy
3. Once a choice is made, the banner disappears and won't reappear on subsequent visits

## Styling

The banner follows the website's design language:
- Dark background with light text
- Gradient buttons that match the site's primary color scheme
- Responsive layout that adapts to different screen sizes
- Subtle animation for a smoother user experience

## Future Improvements

Potential enhancements to consider:
- Add detailed cookie category selection (necessary, analytics, marketing, etc.)
- Implement actual cookie management based on user selection
- Add a "Cookie Settings" button in the footer to allow changes to preferences
- Create a comprehensive cookie management page

## Dependencies

- React (useState, useEffect)
- LanguageContext from the project
- Lucide React for icons 
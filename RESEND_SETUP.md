# Resend Domain Setup for FemRide

## Current Status
- ✅ Resend API Key configured: `re_WUtCevt1_DdSDgS6bJYb11M9AAAksbKvj`
- ❌ Domain not verified (currently can only send to info@femride.de)
- ✅ Email templates ready
- ✅ Code configured for production

## Quick Test Setup (Current)
For immediate testing, emails are sent to `info@femride.de` regardless of signup email.
- Sign up with any email address
- Verification email goes to info@femride.de
- Use the verification link to test the flow

## Production Setup (Domain Verification)

### Step 1: Add Domain in Resend
1. Go to [resend.com/domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter: `femride.de`

### Step 2: DNS Configuration
Add these DNS records to your domain registrar (where you bought femride.de):

**Required DNS Records:**
```
Type: TXT
Name: @
Value: [Verification code from Resend]

Type: MX  
Name: @
Value: feedback-smtp.resend.com
Priority: 10

Type: TXT
Name: @  
Value: v=spf1 include:_spf.resend.com ~all

Type: TXT
Name: resend._domainkey
Value: [DKIM key from Resend]
```

### Step 3: Update Code After Domain Verification
Once domain is verified, update these files:

**server/index.js:**
```javascript
from: 'FemRide <noreply@femride.de>',
to: [email], // Now can send to any email
```

**api/send-verification.js:**
```javascript
from: 'FemRide <noreply@femride.de>',
to: [email], // Now can send to any email
```

### Step 4: Test Production Flow
1. Sign up with any email address
2. Check that email's inbox
3. Click verification link
4. Confirm user is verified in admin

## Alternative: Use Resend's Test Domain
If you don't want to set up domain verification immediately:

1. Keep using `onboarding@resend.dev` as sender
2. Only send to verified email addresses
3. Add more verified emails in Resend dashboard if needed

## Email Deliverability Best Practices
Once domain is verified:
- Use `noreply@femride.de` for transactional emails
- Set up DMARC policy for better deliverability
- Monitor bounce rates in Resend dashboard
- Consider adding `support@femride.de` for replies

## Current Workaround
For testing the complete flow right now:
1. Sign up with any email on the website
2. Check info@femride.de inbox for verification email
3. Click verification link (it will still work for the original signup email)
4. User will be marked as verified in database

This allows you to test the complete email verification system while domain verification is pending.

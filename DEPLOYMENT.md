# FemRide Deployment Guide

## Vercel Deployment with Email Verification

This guide explains how to deploy the FemRide website to Vercel with full email verification functionality.

### Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Resend Account**: Already configured with API key: `re_WUtCevt1_DdSDgS6bJYb11M9AAAksbKvj`
3. **Supabase Database**: Already configured and running

### Step 1: Deploy to Vercel

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository: `Dirk-Tunderman/web_femride`

2. **Configure Build Settings**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Step 2: Set Environment Variables

In your Vercel project dashboard, go to **Settings > Environment Variables** and add:

```
RESEND_API_KEY=re_WUtCevt1_DdSDgS6bJYb11M9AAAksbKvj
```

**Important**:
- Set this for **Production**, **Preview**, and **Development** environments
- This enables the email verification system to work on Vercel

### Step 3: Verify Deployment

After deployment:

1. **Test the Website**: Visit your Vercel URL
2. **Test Email System**:
   - Sign up with a real email address
   - Check your inbox for verification email
   - Click the verification button
   - Confirm the user appears as verified in admin panel

### Step 4: Custom Domain (Optional)

If you want to use `femride.de`:

1. **Add Domain in Vercel**:
   - Go to Settings > Domains
   - Add `femride.de` and `www.femride.de`

2. **Update DNS Records**:
   - Point your domain to Vercel's nameservers
   - Or add CNAME records as instructed by Vercel

3. **Email Configuration** ✅:
   - Domain `notifications.femride.de` is already verified in Resend
   - Emails are sent from `noreply@notifications.femride.de`
   - Can send to any email address

### Architecture Overview

```
Frontend (Vite/React) → Vercel Static Hosting
     ↓
API Routes (/api/*) → Vercel Serverless Functions
     ↓
Resend API → Email Delivery
     ↓
User Email Inbox → Verification Link
     ↓
Verification Page → Supabase Database Update
```

### File Structure for Vercel

```
/
├── api/                          # Vercel API Routes
│   └── send-verification.js      # Email sending function
├── src/                          # React application
├── dist/                         # Built files (auto-generated)
├── vercel.json                   # Vercel configuration
└── package.json                  # Dependencies
```

### Environment Variables Needed

| Variable | Value | Purpose |
|----------|-------|---------|
| `RESEND_API_KEY` | `re_WUtCevt1_DdSDgS6bJYb11M9AAAksbKvj` | Email sending via Resend |
| `VITE_SUPABASE_URL` | Already in code | Database connection |
| `VITE_SUPABASE_KEY` | Already in code | Database authentication |

### Troubleshooting

**Email Not Sending**:
1. Check Vercel function logs in dashboard
2. Verify `RESEND_API_KEY` is set correctly
3. Check Resend dashboard for delivery status

**Database Connection Issues**:
1. Verify Supabase credentials in environment
2. Check database functions are deployed
3. Test database connection in Supabase dashboard

**Build Failures**:
1. Check Node.js version compatibility
2. Verify all dependencies are in `package.json`
3. Check build logs in Vercel dashboard

### Development vs Production

**Development** (localhost):
- Uses `http://localhost:3001/api/send-verification`
- Falls back to alert popup if server not running
- Console logging for debugging

**Production** (Vercel):
- Uses `/api/send-verification` (Vercel function)
- Real email delivery via Resend
- Production error handling

### Security Notes

- API key is stored securely in Vercel environment variables
- Email verification prevents spam signups
- Database functions include proper validation
- CORS is configured for security

### Next Steps After Deployment

1. **Test Complete Flow**: Sign up → receive email → verify → check admin
2. **Monitor Performance**: Check Vercel analytics and function logs
3. **Set Up Monitoring**: Consider adding error tracking (Sentry, etc.)
4. **Custom Domain**: Configure `femride.de` if desired
5. **Email Branding**: Update to use custom domain for emails

The deployment is now ready for production use with full email verification functionality!

# Contact Form Setup Guide

## Setting up Resend for Contact Form

Your contact form is now configured to use **Resend** for reliable email delivery. Follow these steps to complete the setup:

### Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month free)
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (you'll only see it once!)

### Step 3: Add API Key to Environment Variables

1. Open `.env.local` in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_123abc456def789xyz
   ```
3. Save the file

### Step 4: Configure Email Domain (Optional but Recommended)

By default, emails are sent from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `jayesh.dev`)
4. Follow the DNS verification steps
5. Once verified, update the `from` field in `src/app/api/contact/route.ts`:
   ```typescript
   from: 'Contact Form <contact@jayesh.dev>',
   ```

### Step 5: Test the Form

1. Restart your development server:
   ```bash
   npm run dev
   ```
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email inbox (jayeshy461@gmail.com)

### Troubleshooting

**Email not received?**
- Check Resend dashboard for delivery status
- Verify API key is correct in `.env.local`
- Check spam folder
- Ensure dev server was restarted after adding API key

**Form shows error?**
- Open browser console (F12) to see detailed errors
- Check that all required fields are filled
- Verify API route is working: `http://localhost:3000/api/contact`

**For Production:**
- Add `RESEND_API_KEY` to your hosting platform's environment variables (Vercel, Netlify, etc.)
- Never commit `.env.local` to git (it's already in `.gitignore`)

## Features Implemented

✅ Server-side email sending with Resend  
✅ Form validation (required fields, email format)  
✅ Loading state during submission  
✅ Success/error toast notifications  
✅ Beautiful HTML email template  
✅ Reply-to set to user's email for easy responses  
✅ Form auto-clears after successful submission  

## Email Details

- **Recipient:** jayeshy461@gmail.com
- **Reply-To:** User's email (for easy replies)
- **Subject:** "New Contact Form Submission from [Name]"
- **Content:** Formatted HTML with all form fields

---

Need help? Check the [Resend Documentation](https://resend.com/docs) or email yourself a test!

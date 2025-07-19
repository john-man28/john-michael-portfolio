# Contact Form Setup Guide

## 🛡️ Secure Contact Form Options

## 📧 Option 1: Formspree (Recommended - Most Secure)

### Why Formspree is Safer:
- ✅ No Gmail access required
- ✅ No third-party permissions  
- ✅ Just forwards emails to your inbox
- ✅ Built-in spam protection
- ✅ 50 submissions/month free

### Formspree Setup:
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up and verify your email
3. Create a new form
4. Copy your form endpoint URL
5. Add to `.env.local`:
```env
NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/your-form-id
```

## 📧 Option 2: EmailJS (Less Secure - Requires Gmail Access)

### Step 1: Create EmailJS Account
1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

### Step 2: Create Email Service
1. In the EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

```html
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}} <{{from_email}}>
To: {{to_name}}

Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (e.g., `abc123def456`)

### Step 5: Configure Your Portfolio
1. Create a `.env.local` file in your project root:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123def456
```

2. Replace the example values with your actual IDs from EmailJS

### Step 6: Test Your Form
1. Restart your dev server: `npm run dev`
2. Go to your contact form at `http://localhost:3000`
3. Fill out and submit the form
4. Check your email for the message!

## 🔧 Template Variables Available:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (John Michael Manlapaz)

## 🎯 Features Added:
- ✅ Loading spinner while sending
- ✅ Success message with form reset
- ✅ Error handling with user feedback
- ✅ Auto-hiding status messages
- ✅ Form validation
- ✅ Professional email templates

## 🚀 Ready to Go!
Once configured, your contact form will send emails directly to your inbox whenever someone submits a message through your portfolio! 
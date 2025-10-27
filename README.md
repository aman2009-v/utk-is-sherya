# ANTRAL MUN Website

A multi-page static website for ANTRAL Model United Nations conference.

## 📋 Features

- ✅ **Multi-page Navigation**: Home, About, Committees, Core Team, Registration, Contact
- ✅ **3D Animations**: Flip cards, hover effects, scroll animations
- ✅ **Responsive Design**: Mobile-friendly layout
- ✅ **Loader Animation**: 3D rotating ANTRAL logo on page load
- ✅ **Countdown Timer**: Days left until November 5, 2024
- ✅ **Progress Bar**: Shows scroll progress on each page
- ✅ **Multi-stage Registration Form**: Personal details → Committee preferences → Payment
- ✅ **Team Member Cards**: 3D flip cards with Instagram redirect
- ✅ **Committee Cards**: Interactive flip cards showing committee details
- ✅ **Contact Form**: Integrated with FormSubmit
- ✅ **Form Validation**: HTML5 form validation

## 🚀 Deployment

### Option 1: Local Testing
1. Simply open `index.html` in your web browser
2. The website is fully functional as a static site

### Option 2: GitHub Pages (Recommended)
1. Push all files to a GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" → "main" branch
4. Click Save
5. Your website will be live at: `https://yourusername.github.io/repository-name/`

### Option 3: Netlify
1. Drag and drop the entire folder into [Netlify](https://www.netlify.com)
2. Your website will be live instantly

### Option 4: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📁 File Structure

```
.
├── index.html          # Home page
├── about.html          # About page
├── team.html           # Core team page
├── matrix.html         # Committees page
├── registration.html   # Registration form
├── contact.html        # Contact page
├── styles.css          # All styles
├── script.js           # All JavaScript
└── README.md           # This file
```

## 🎨 Customization

### Update Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --major-color: rgba(125, 15, 54);
    --minor-color: #d387a4;
}
```

### Update Registration Form
Edit `registration.html` to:
- Add QR code image in step 3
- Update payment amount
- Update account details

### Update Team Members
Edit `team.html` to add/remove team members

### Update Contact Info
Edit `contact.html` to update:
- Phone number
- Location
- Email address

### Update Committees
Edit `matrix.html` to update committee details, agendas, and chairs

## 📧 Form Submission

The registration and contact forms use FormSubmit to send emails to: `yadavamanjeet317@gmail.com`

To receive submissions, you need to verify your email with FormSubmit after first submission.

## 📱 Browser Compatibility

- Chrome (Recommended)
- Firefox
- Safari
- Edge

## 📝 Notes

- All animations work without any external libraries (pure CSS)
- Mobile menu is responsive and works on touch devices
- Countdown timer updates in real-time
- Progress bar shows scroll position on all pages
- Forms include basic HTML5 validation

## 🛠️ Troubleshooting

**Issue**: Countdown not showing
- Check that JavaScript is enabled in browser
- Ensure script.js is loaded

**Issue**: Forms not submitting
- Verify internet connection
- Check FormSubmit service status
- Verify email address in form action attribute

**Issue**: Images not displaying
- Ensure image paths are correct
- Check file permissions

## 📞 Support

For issues or questions, contact: yadavamanjeet317@gmail.com

---

© 2024 ANTRAL MUN - The First Hour


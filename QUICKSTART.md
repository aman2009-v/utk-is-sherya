# 🚀 ANTRAL MUN Website - Quick Start

## ⚡ Run It NOW!

1. **Simply open `index.html`** in any web browser
2. The website is fully functional!

## 📁 Your Files

- `index.html` - Home page
- `about.html` - About page
- `team.html` - Core team page
- `matrix.html` - Committees page
- `registration.html` - Registration form
- `contact.html` - Contact page
- `styles.css` - All styling
- `script.js` - All functionality

## 🎨 What You Get

✅ Modern 3D animations
✅ Responsive design (works on phone, tablet, desktop)
✅ Countdown timer to Nov 5, 2024
✅ Multi-stage registration form
✅ Interactive committee cards
✅ Team member profiles
✅ Contact form
✅ Smooth scrolling animations

## ⚙️ Before You Go Live

### 1. Update Payment Info (5 minutes)
Open `registration.html` and find these lines around line 220:
```html
<div class="final-info">
    <p><strong>Amount to be Paid:</strong> (Add amount)</p>
    <p><strong>Account Details:</strong> (Add account details)</p>
</div>
```
Replace with your actual payment info.

### 2. Add QR Code (2 minutes)
In `registration.html` around line 210, replace:
```html
<div class="qr-placeholder">
    <p>QR Code Placeholder</p>
</div>
```
With your actual QR code image:
```html
<img src="your-qr-code.jpg" alt="Payment QR Code" style="max-width: 300px;">
```

### 3. Update Contact Info (3 minutes)
Open `contact.html` and update:
- Phone number (line ~50)
- Location (line ~54)

### 4. Add Committee Chairs (5 minutes)
Open `matrix.html` and update the chair names (they say "To be announced")

## 🌐 Deploy Online (2 minutes)

### EASIEST: Netlify
1. Go to https://www.netlify.com
2. Sign up (free)
3. Drag this entire folder onto Netlify
4. Done! You get a URL like: `yoursite.netlify.app`

### ALTERNATIVE: GitHub Pages
1. Upload folder to GitHub
2. Go to Settings → Pages
3. Choose "main" branch
4. Done!

## ✨ Features Explained

### Countdown Timer
Automatically counts down to November 5, 2024. Just works!

### Registration Form
- Step 1: Personal details
- Step 2: Committee preferences
- Step 3: Payment info
- Emails go to: yadavamanjeet317@gmail.com

### Committee Cards
Hover over any committee card to see details!

### Team Cards
Click to flip and see Instagram link!

## 🎨 Color Scheme

- Major Color: `rgba(125, 15, 54)` (Deep Maroon)
- Minor Color: `#d387a4` (Pink)

To change colors, edit `styles.css` line 3-4.

## 📱 Test on Mobile

1. Open `index.html` in browser
2. Press F12 (Developer Tools)
3. Click device toggle icon (or Ctrl+Shift+M)
4. Choose a mobile device
5. Test all pages and forms!

## 🐛 Troubleshooting

**Nothing happens when I click?**
- Make sure JavaScript is enabled in your browser

**Forms don't work?**
- Check internet connection (FormSubmit needs internet)

**Looks weird on mobile?**
- Clear browser cache (Ctrl+F5)

## 🎓 Customization Tips

**Want different text?**
- Just edit any HTML file and change the text

**Want different colors?**
- Edit `styles.css` and search for the color you want to change

**Want to add more team members?**
- Copy a team card in `team.html` and modify it

**Want to change event date?**
- Edit `script.js` line 15

## 📞 Need Help?

Everything is commented in the code. Just open the files and read!

## ✅ You're Ready!

The website is complete and ready to deploy. Just:
1. Double-click `index.html` to test
2. Customize the items above
3. Deploy to Netlify or GitHub Pages
4. Share your URL!

---

**Created for ANTRAL MUN - The First Hour**
November 5, 2024


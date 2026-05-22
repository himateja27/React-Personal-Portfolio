# Setup Instructions for Profile Photo and Resume

## 1. Add Your Profile Photo

Your profile photo should be placed in: `public/media/profile.jpg`

**Instructions:**
1. Open File Explorer and navigate to: `c:\Users\gunar\React-Personal-Portfolio\public\media`
2. Save your profile photo (the image you just provided) as `profile.jpg` in this folder
3. Make sure it's in JPG, PNG, or JPEG format
4. Recommended size: 400x400px (square format)
5. The dev server will automatically refresh and show your photo in the blue circle

## 2. Add Your Resume PDF

Your resume should be placed in: `public/media/himateja-fullstack-dev.pdf`

**Instructions:**
1. Prepare your resume as a PDF file
2. Navigate to: `c:\Users\gunar\React-Personal-Portfolio\public\media`
3. Place your resume PDF file there and name it exactly: `himateja-fullstack-dev.pdf`
4. Restart the server (`npm start`) if it doesn't refresh automatically
5. The "Download Resume" button will now work properly

## File Structure After Setup:

```
public/
└── media/
    ├── profile.jpg                      (your profile photo)
    ├── profile.svg                      (fallback placeholder)
    └── himateja-fullstack-dev.pdf       (your resume PDF)
```

## Testing:

✅ Reload the browser to see your photo appear
✅ "View Projects" - now navigates to /project page
✅ "Contact Me" - now opens email client
✅ "Download Resume" - will download your PDF
✅ Internship section - now shows only Python embedded systems info

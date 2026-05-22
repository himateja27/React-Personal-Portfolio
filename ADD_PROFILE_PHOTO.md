# How to Add Your Profile Photo

Your portfolio is now set up and ready! To add your actual profile photo instead of the placeholder, follow these steps:

## Steps to Add Your Photo:

1. **Prepare Your Photo**
   - Take a clear, professional photo or use your WhatsApp profile picture
   - Recommended size: 400x400px (square format for best results)
   - Format: JPG, PNG, or JPEG
   - Make sure the file is at least 200x200px

2. **Place Your Photo**
   - Locate the folder: `public/media/` in your project
   - Copy your photo file to this folder
   - Rename it to: `profile.jpg`

3. **File Structure**
   ```
   public/
   └── media/
       ├── profile.jpg          (your profile photo)
       └── profile.svg          (fallback placeholder)
   ```

4. **Restart the Server**
   - The changes will be automatically detected
   - Your photo will appear in the blue circle on the hero section

## Where Your Photo Will Appear:

✅ **Hero Section** - In a beautiful blue circle above your name
✅ **Browser Tab** - As a visual indicator

## Current Placeholder:

A professional placeholder (SVG) is already in place, so your portfolio looks great even without a photo. Replace it whenever you're ready!

## Troubleshooting:

- If your photo doesn't show up, make sure:
  - The file is named exactly `profile.jpg`
  - It's in the `public/media/` folder
  - You've restarted the dev server (`npm start`)
  - The file format is JPG/PNG/JPEG

Happy coding! 🚀

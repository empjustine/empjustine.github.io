# Barcode Scanner PWA

A fully static Progressive Web App for scanning barcodes using your device's camera or uploaded images.

## ⚠️ IMPORTANT: Camera Requires HTTPS

**Camera access only works on:**
- HTTPS connections (https://)
- localhost / 127.0.0.1
- File upload works on any connection (HTTP or HTTPS)

This is a browser security requirement, not a limitation of this app.

## Features

- 📷 **Real-time camera scanning** - Point your camera at any barcode
- 🖼️ **Image upload** - Scan barcodes from existing photos
- 📱 **Progressive Web App** - Install on your device like a native app
- 🔌 **Fully offline** - Works without internet after first load
- 📋 **Copy to clipboard** - Copy all scanned barcodes at once
- 📤 **Share** - Share barcodes using native share menu (mobile)
- 🎯 **Duplicate detection** - Won't add the same barcode twice
- 💾 **Session storage** - Keeps barcodes during your session

## Supported Barcode Formats

The app uses ZXing library and supports:
- QR Code
- UPC-A, UPC-E
- EAN-8, EAN-13
- Code 39, Code 93, Code 128
- ITF, Codabar
- Data Matrix
- PDF417
- And more!

## Installation

### As a Static Website
Simply serve all three files from any web server:
- `barcode-scanner.html`
- `manifest.json`
- `sw.js`

### As a PWA
1. Open the app in a modern browser (Chrome, Edge, Safari, Firefox)
2. Click the install prompt that appears, or
3. Use browser menu → "Install App" / "Add to Home Screen"

### Local Testing

#### Option 1: HTTPS Server (Required for Camera)
Use the included Python HTTPS server:

```bash
# This generates a self-signed certificate and starts HTTPS server
python3 https-server.py
```

Then:
- **On the same device**: Open `https://localhost:8443/barcode-scanner.html`
- **On your phone** (same WiFi): Open `https://YOUR_IP:8443/barcode-scanner.html`
  - The script will show your IP address
  - You'll need to accept the self-signed certificate warning

#### Option 2: HTTP Server (Image Upload Only)
For testing image upload without camera:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000/barcode-scanner.html`

⚠️ Camera will not work on HTTP, only image upload will function.

### Production Deployment

### Production Deployment

Deploy to any static hosting service that supports HTTPS:

**Free Options:**
- **GitHub Pages** (https://pages.github.com)
  - Automatically serves over HTTPS
  - Just push the files to a repo and enable Pages
  
- **Netlify** (https://netlify.com)
  - Drag and drop the files
  - Automatic HTTPS
  
- **Vercel** (https://vercel.com)
  - Deploy with `vercel --prod`
  - Automatic HTTPS
  
- **Cloudflare Pages** (https://pages.cloudflare.com)
  - Git integration
  - Automatic HTTPS

All files must be in the same directory. The main file is `barcode-scanner.html`.

## Usage

1. **Camera Scanning**
   - Click "Start Camera"
   - Grant camera permissions
   - Point at a barcode
   - Barcode is automatically detected and added to the list

2. **Image Upload**
   - Click "Upload Image"
   - Select a photo containing a barcode
   - Barcode is extracted and added to the list

3. **Managing Barcodes**
   - View all scanned barcodes with format and timestamp
   - Remove individual barcodes
   - Copy all to clipboard
   - Share via native share (mobile)
   - Clear all at once

## Requirements

- Modern browser with camera access (Chrome, Edge, Safari, Firefox)
- HTTPS connection (or localhost for testing) for camera access
- No server-side processing required
- No database needed - everything runs in the browser

## Browser Compatibility

- ✅ Chrome/Edge (Android & Desktop)
- ✅ Safari (iOS & macOS)
- ✅ Firefox (Android & Desktop)
- ✅ Samsung Internet
- ⚠️ Camera access requires HTTPS (except localhost)

## Privacy

- No data is sent to any server
- All processing happens locally in your browser
- Barcodes are stored only in browser memory (cleared on page close)
- No tracking or analytics

## Technical Details

- **Framework**: Vanilla JavaScript (no dependencies except ZXing)
- **Barcode Library**: ZXing (@zxing/library@0.20.0)
- **PWA**: Service Worker for offline support
- **Storage**: In-memory only (no persistence)
- **Size**: ~15KB (excluding ZXing library from CDN)

## License

Free to use and modify for any purpose.

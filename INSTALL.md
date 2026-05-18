# Deployment & Installation Guide

## Quick Start

### Option 1: Using npm (Recommended)
```bash
cd macnally-driving-school
npm install
npm run dev
```

### Option 2: Direct Browser Access
Simply open `index.html` in your web browser. All external dependencies are loaded from CDNs.

## Dependencies

### CDN-Based (No Installation Required)
These are already included in the HTML and load from CDN:
- GSAP 3.12.2 (Animation Library)
- Font Awesome 6.4.0 (Icons)
- Google Fonts (Typography)

### NPM Dependencies (Optional)
Run `npm install` to install:
- **gsap** ^3.12.2 - Animation library
- **live-server** ^1.2.2 - Development server

## File Organization

### CSS Files (css/)
Each file handles a specific component:
- `variables.css` - Global CSS variables and base styles
- `loading.css` - Loading screen animations
- `navigation.css` - Navigation bar and theme toggle
- `hero.css` - Hero section with animations
- `carousel.css` - 3D carousel styles
- `pricing.css` - Pricing cards and grid
- `calculator.css` - Cost calculator UI
- `services.css` - Services grid
- `testimonials.css` - Testimonials carousel
- `contact.css` - Contact form and map
- `footer.css` - Footer styling
- `utilities.css` - Buttons, utilities, and responsive breakpoints

### JavaScript Files (js/)
Modular functionality split by feature:
- `loading.js` - Page loading screen
- `theme.js` - Dark/light mode toggle
- `animations.js` - GSAP animations and scroll triggers
- `carousel.js` - 3D carousel functionality
- `calculator.js` - Cost calculator with real-time updates
- `forms.js` - Form handling and validation

### Assets Folder (assets/)
Placeholder folder for:
- Logo images
- Car images
- Background images
- Other media files

## Installation Steps

### Windows

1. **Open Terminal/PowerShell**
2. **Navigate to project:**
   ```powershell
   cd "C:\Users\Mikeyy\Downloads\macnally-driving-school"
   ```
3. **Install Node.js if needed** from nodejs.org
4. **Install dependencies:**
   ```powershell
   npm install
   ```
5. **Start development server:**
   ```powershell
   npm run dev
   ```

### macOS

1. **Open Terminal**
2. **Navigate to project:**
   ```bash
   cd ~/Downloads/macnally-driving-school
   ```
3. **Install Node.js if needed:** `brew install node`
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Start development server:**
   ```bash
   npm run dev
   ```

### Linux

1. **Open Terminal**
2. **Navigate to project:**
   ```bash
   cd ~/Downloads/macnally-driving-school
   ```
3. **Install Node.js if needed:** `sudo apt install nodejs npm`
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Start development server:**
   ```bash
   npm run dev
   ```

## Next Steps

1. **Add Images:**
   - Place `logo.png` in project root
   - Place `fleet.png` in project root
   - Place `car1.png` through `car5.png` in project root

2. **Update Links:**
   - Replace WhatsApp numbers
   - Update Google Maps embed link
   - Update social media links

3. **Deploy:**
   - Upload all files to hosting
   - No build step needed
   - All external resources load from CDN

## Verification

Open your browser and check:
- ✅ Hero section loads with animations
- ✅ Theme toggle works (moon/sun icon)
- ✅ Carousel responds to arrows
- ✅ Calculator updates in real-time
- ✅ Form can be submitted
- ✅ Mobile menu appears on smaller screens

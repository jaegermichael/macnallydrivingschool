# Macnally Driving School Website

A modern, responsive website for Macnally Driving School built with HTML, CSS, and JavaScript with advanced animations and interactive features.

## Project Structure

```
macnally-driving-school/
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── README.md              # This file
├── css/                   # Stylesheet files
│   ├── variables.css      # CSS custom properties and global styles
│   ├── loading.css        # Loading screen styles
│   ├── navigation.css     # Navigation bar and theme toggle
│   ├── hero.css          # Hero section styles
│   ├── carousel.css      # 3D fleet carousel styles
│   ├── pricing.css       # Pricing cards and layout
│   ├── calculator.css    # Cost calculator styles
│   ├── services.css      # Services grid styles
│   ├── testimonials.css  # Testimonials section styles
│   ├── contact.css       # Contact form and map styles
│   ├── footer.css        # Footer styles
│   └── utilities.css     # Buttons, utilities, and responsive styles
├── js/                    # JavaScript files
│   ├── loading.js        # Loading screen logic
│   ├── theme.js          # Dark/Light mode toggle
│   ├── animations.js     # GSAP animations and scroll effects
│   ├── carousel.js       # 3D carousel functionality
│   ├── calculator.js     # Cost calculator logic
│   └── forms.js          # Form submission handling
└── assets/               # Images and media (placeholder folder)
```

## Features

- ✨ **Advanced GSAP Animations** - Smooth scroll triggers and entrance animations
- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Mobile-first design with adaptive layouts
- 🎠 **3D Fleet Carousel** - Interactive 3D perspective carousel with touch support
- 📊 **Cost Calculator** - Real-time pricing calculator with dynamic updates
- 📝 **Contact Forms** - Booking form with validation and WhatsApp integration
- 🎬 **Video Testimonials** - Scrolling testimonials section
- 📍 **Google Maps Integration** - Embedded location map
- ♿ **Accessibility** - Semantic HTML and proper ARIA labels

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **JavaScript ES6+** - Modern JavaScript features
- **GSAP 3** - Professional animation library
- **Font Awesome 6** - Icon library
- **Google Fonts** - Montserrat and Playfair Display typography

## Installation

### Prerequisites
- Node.js and npm installed on your system

### Setup Steps

1. **Navigate to the project folder:**
   ```bash
   cd macnally-driving-school
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This installs:
   - **gsap** - Animation library (via CDN in production)
   - **live-server** - Local development server

## Running the Project

### Development Mode
```bash
npm run dev
```

This starts a live development server at `http://localhost:8080` with hot reload support.

### Manual Setup (without npm)
If you prefer not to use npm, you can:

1. Open `index.html` directly in a web browser
2. External dependencies are loaded from CDNs:
   - GSAP and ScrollTrigger from Cloudflare CDN
   - Font Awesome from CDN
   - Google Fonts

## Dependency Details

### External CDN Dependencies (already included in HTML)
- **GSAP 3.12.2** - Animation library with ScrollTrigger plugin
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Montserrat (300-900) and Playfair Display (700, 900)

### NPM Dependencies
- **gsap** - Local installation for build processes
- **live-server** - Development server with live reload

## Configuration

### External Links
- WhatsApp number: Update in HTML links (currently +263772329050)
- Google Maps embed: Replace the iframe src with your location
- Logo and car images: Place in `assets/` folder

### Customization

#### Colors
Edit color variables in `css/variables.css`:
```css
:root {
    --mds-red: #e72023;
    --mds-blue-dark: #000050;
    /* ... more colors */
}
```

#### Animations
Modify animation timings in:
- `js/animations.js` - Main animations and scroll triggers
- `js/carousel.js` - Carousel animation timing
- Individual CSS files - CSS keyframe animations

#### Content
Edit sections directly in `index.html` or individual CSS files

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- CSS split into modular files for better caching
- JavaScript organized by functionality for tree-shaking
- Images optimized and lazy-loaded where applicable
- GSAP animations optimized with ScrollTrigger for performance

## Accessibility Features

- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images
- Form labels and fieldsets
- Keyboard navigation support
- High contrast colors for readability
- Dark mode support for users preferring reduced brightness

## SEO

- Meta tags for mobile responsiveness
- Semantic HTML structure
- Proper heading hierarchy
- Alt attributes on images
- Schema markup ready (can be added)

## Build for Production

The project is currently optimized for production:
- CSS files are modular and cacheable
- JavaScript is minified and optimized
- All resources use CDN links for faster delivery
- Images should be optimized using an image optimization tool

To host on a web server:
1. Upload all files to your hosting provider
2. Ensure your server supports serving static files
3. No build process required for deployment

## Troubleshooting

### Animations not working
- Check that GSAP is loaded from CDN
- Ensure JavaScript files are in correct order
- Check browser console for errors

### Calculator not updating
- Ensure `calculator.js` is loaded
- Check that element IDs match in HTML

### Theme toggle not working
- Clear browser cache
- Check that `theme.js` is loaded
- Verify Font Awesome is loaded for icons

## License

MIT License - See LICENSE file for details

## Support

For issues or questions about the website:
- Phone: +263-4-775 447
- WhatsApp: +263 772 329 050
- Email: contact@macnallydrivingschool.com

---

**Last Updated:** May 2026
**Version:** 1.0.0

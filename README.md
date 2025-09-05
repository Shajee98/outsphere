# Solvior - Business Consulting Template

This is a Next.js application that implements the Solvior Business Consulting HTML template with all necessary dependencies and configurations.

## 🚀 Features

- **Modern Design**: Professional business consulting template
- **Responsive Layout**: Mobile-first responsive design
- **Interactive Elements**: Sliders, animations, counters, and more
- **Bootstrap Integration**: Full Bootstrap 5.3.2 support
- **Multiple Libraries**: Comprehensive set of UI and animation libraries

## 📦 Installed Dependencies

### Core Framework
- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety

### CSS Framework
- **Bootstrap 5.3.2** - CSS framework
- **@popperjs/core** - Bootstrap dependency

### Icon Libraries
- **@fortawesome/fontawesome-free** - Font Awesome icons
- **solvior-icons** - Custom icon font (CSS only)

### Animation Libraries
- **animate.css** - CSS animations
- **gsap** - Advanced animations and effects
- **wowjs** - Scroll-triggered animations
- **appear** - Element appearance detection

### UI Components
- **swiper** - Touch slider and carousel
- **odometer** - Animated counters
- **jquery-nice-select** - Enhanced select dropdowns
- **venobox** - Lightbox and popup
- **szmigiel-meanmenu** - Mobile navigation menu
- **chart.js** - Charts and graphs

### Utilities
- **jquery** - DOM manipulation (required by some libraries)
- **smoothscroll-polyfill** - Smooth scrolling support

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd outsphere
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
outsphere/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   └── page.tsx          # Homepage component
│   │   ├── globals.css           # Global styles
│   │   ├── globals.js            # JavaScript functionality
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Root page (redirects to /home)
│   └── ...
├── public/                        # Static assets
├── package.json                   # Dependencies
└── README.md                     # This file
```

## 🎨 CSS Classes

The template uses a comprehensive set of CSS classes:

### Layout Classes
- `.container`, `.container-fluid` - Bootstrap containers
- `.row`, `.col-*` - Bootstrap grid system
- `.section-space` - Section spacing

### Component Classes
- `.tj-header-area` - Header styling
- `.h10-hero` - Hero section
- `.tj-feature-section` - Features section
- `.h10-about-section` - About section
- `.h10-service-section` - Services section
- `.h10-team-section` - Team section
- `.h10-projects-section` - Projects section
- `.tj-testimonial-section` - Testimonials section
- `.h10-blog-section` - Blog section
- `.tj-footer-area` - Footer section

### Utility Classes
- `.wow` - Animation triggers
- `.fadeInUp`, `.fadeInDown`, etc. - Animation classes
- `.d-flex`, `.text-center`, etc. - Bootstrap utilities

## ⚡ JavaScript Functionality

The `globals.js` file initializes all libraries:

### Initialized Libraries
- **WOW.js** - Scroll animations
- **Swiper** - Sliders and carousels
- **Odometer** - Animated counters
- **Nice Select** - Enhanced dropdowns
- **VenoBox** - Lightbox functionality
- **MeanMenu** - Mobile navigation
- **Chart.js** - Charts and graphs
- **GSAP** - Advanced animations

### Interactive Features
- Back to top button
- Search popup
- Mobile menu
- Accordion functionality
- Header scroll effects
- Smooth scrolling

## 🎯 Usage Examples

### Adding a New Section
```tsx
<section className="new-section section-space">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="sec-heading text-center">
          <span className="sub-title">[ SECTION TITLE ]</span>
          <h2 className="sec-title">Your Section Heading</h2>
        </div>
      </div>
    </div>
    {/* Your content here */}
  </div>
</section>
```

### Using Animations
```tsx
<div className="feature-item wow fadeInUp" data-wow-delay="0.3s">
  {/* Content with animation */}
</div>
```

### Adding Counters
```tsx
<div className="counter-item">
  <div className="number">
    <span className="odometer" data-count="100">0</span>+
  </div>
  <span className="sub-title">Happy Clients</span>
</div>
```

## 🔧 Customization

### Colors
The template uses a primary color scheme defined in CSS variables:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Accent: `#ffd700` (Gold)

### Typography
- Primary font: Inter (Google Fonts)
- Monospace font: Geist Mono

### Spacing
- Section padding: `100px 0`
- Grid gap: `30px`
- Container max-width: `1200px`

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 991px`
- **Desktop**: `992px - 1199px`
- **Large Desktop**: `≥ 1200px`

## 🚀 Performance Tips

1. **Image Optimization**: Use Next.js Image component for optimized images
2. **Lazy Loading**: Implement lazy loading for non-critical sections
3. **Code Splitting**: Use dynamic imports for heavy components
4. **CSS Purge**: Remove unused CSS in production builds

## 🐛 Troubleshooting

### Common Issues

1. **Libraries not loading**: Check if all dependencies are installed
2. **CSS conflicts**: Ensure proper import order in layout.tsx
3. **JavaScript errors**: Check browser console for library conflicts
4. **Responsive issues**: Verify Bootstrap classes and custom CSS

### Debug Mode
Enable debug mode by setting environment variable:
```bash
NODE_ENV=development npm run dev
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code examples

---

**Note**: This template includes many third-party libraries. Make sure to comply with their respective licenses when using in production projects.

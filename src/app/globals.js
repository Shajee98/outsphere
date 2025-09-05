// Initialize all libraries when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize WOW.js for animations
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  // Initialize Swiper for sliders
  if (typeof Swiper !== 'undefined') {
    // Testimonials slider
    new Swiper('.h10-testimonial-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonial-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    // Marquee slider
    new Swiper('.marquee-slider', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 5000,
    });
  }

  // Initialize Odometer for counters
  if (typeof Odometer !== 'undefined') {
    const odometerElements = document.querySelectorAll('.odometer');
    odometerElements.forEach(element => {
      const count = element.getAttribute('data-count');
      if (count) {
        const odometer = new Odometer({
          element: element,
          value: 0,
          format: '',
        });
        
        // Animate when element comes into view
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              odometer.update(count);
              observer.unobserve(entry.target);
            }
          });
        });
        observer.observe(element);
      }
    });
  }

  // Initialize Nice Select for dropdowns
  if (typeof NiceSelect !== 'undefined') {
    NiceSelect.bind('select');
  }

  // Initialize VenoBox for lightbox
  if (typeof VenoBox !== 'undefined') {
    new VenoBox({
      selector: '.video-popup',
      autoplay: true,
    });
  }

  // Initialize MeanMenu for mobile navigation
  if (typeof $.fn !== 'undefined' && $.fn.meanmenu) {
    $('.mainmenu').meanmenu({
      meanMenuContainer: '.mobile_menu',
      meanScreenWidth: 991,
      meanRevealColour: '',
      meanShow: 'flex',
      meanNavPush: '',
      meanDisplay: 'flex',
      meanRemoveAttrs: true,
      onePage: false,
    });
  }

  // Initialize Chart.js for charts
  if (typeof Chart !== 'undefined') {
    const chartCanvas = document.querySelector('.tj-pie-chart');
    if (chartCanvas) {
      const ctx = chartCanvas.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'In Progress', 'Planning'],
          datasets: [{
            data: [65, 25, 10],
            backgroundColor: ['#667eea', '#764ba2', '#f8f9fa'],
            borderWidth: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          cutout: '70%',
        },
      });
    }
  }

  // Initialize GSAP animations
  if (typeof gsap !== 'undefined') {
    // Hero text animation
    gsap.from('.hero-title', {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power3.out',
    });

    gsap.from('.desc', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.3,
    });

    // Scroll animations
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.from('.feature-item', {
        scrollTrigger: {
          trigger: '.tj-feature-section',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from('.h10-service-item', {
        scrollTrigger: {
          trigger: '.h10-service-section',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }
  }

  // Initialize Appear.js
  if (typeof Appear !== 'undefined') {
    Appear.init();
  }

  // Initialize Smooth Scroll
  if (typeof smoothscroll !== 'undefined') {
    smoothscroll.polyfill();
  }

  // Initialize jQuery Knob
  if (typeof $.fn !== 'undefined' && $.fn.knob) {
    $('.knob').knob();
  }

  // Back to top functionality
  const backToTopBtn = document.getElementById('back_to_top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // Search functionality
  const searchBtn = document.querySelector('.header_search');
  const searchPopup = document.querySelector('.search_popup');
  const searchClose = document.querySelector('.search_close_btn');
  const searchOverlay = document.querySelector('.search-popup-overlay');

  if (searchBtn && searchPopup) {
    searchBtn.addEventListener('click', () => {
      searchPopup.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (searchClose && searchPopup) {
    searchClose.addEventListener('click', () => {
      searchPopup.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (searchOverlay && searchPopup) {
    searchOverlay.addEventListener('click', () => {
      searchPopup.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Mobile menu functionality
  const menuBtn = document.querySelector('.hamburgerBtn');
  const hamburgerArea = document.querySelector('.hamburger-area');
  const hamburgerClose = document.querySelector('.hamburgerCloseBtn');
  const bodyOverlay = document.querySelector('.body-overlay');

  if (menuBtn && hamburgerArea) {
    menuBtn.addEventListener('click', () => {
      hamburgerArea.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (hamburgerClose && hamburgerArea) {
    hamburgerClose.addEventListener('click', () => {
      hamburgerArea.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (bodyOverlay && hamburgerArea) {
    bodyOverlay.addEventListener('click', () => {
      hamburgerArea.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Accordion functionality
  const accordionTitles = document.querySelectorAll('.accordion_title');
  accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
      const accordionItem = title.closest('.accordion_item');
      const accordionDesc = accordionItem.querySelector('.accordion_desc');
      
      // Close all other accordion items
      document.querySelectorAll('.accordion_desc').forEach(desc => {
        if (desc !== accordionDesc) {
          desc.classList.remove('show');
        }
      });
      
      // Toggle current accordion item
      accordionDesc.classList.toggle('show');
    });
  });

  // Header scroll effect
  const header = document.querySelector('.tj-header-area');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Initialize all tooltips and popovers if Bootstrap is available
  if (typeof bootstrap !== 'undefined') {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }
});

// Export for use in other modules
const globals = {};
export default globals;

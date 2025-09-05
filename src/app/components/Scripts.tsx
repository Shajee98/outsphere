'use client';

import { useEffect } from 'react';

// Extend Window interface to include all libraries
declare global {
  interface Window {
    jQuery?: any;
    $?: any;
    Vivus?: any;
    WOW?: any;
    gsap?: any;
    Swiper?: any;
    Odometer?: any;
    VenoBox?: any;
    Chart?: any;
    ScrollTrigger?: any;
    ScrollToPlugin?: any;
    SplitText?: any;
    TweenMax?: any;
    smoothscrollPolyfill?: { polyfill: () => void }; // 👈 add this
  }
}

export default function Scripts() {
  useEffect(() => {
    // Load jQuery first
    const loadJQuery = () => {
      if (typeof window !== 'undefined' && !window.jQuery) {
        const script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
        script.async = true;
        script.onload = () => {
          // Load other jQuery-dependent libraries after jQuery loads
          loadJQueryDependentLibraries();
        };
        document.head.appendChild(script);
      } else if (window.jQuery) {
        loadJQueryDependentLibraries();
      }
    };

    // Load jQuery-dependent libraries
    const loadJQueryDependentLibraries = () => {
      // Bootstrap
      if (!document.querySelector('script[src*="bootstrap"]')) {
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
        bootstrapScript.async = true;
        document.head.appendChild(bootstrapScript);
      }

      // MeanMenu
      if (!document.querySelector('script[src*="meanmenu"]')) {
        const meanmenuScript = document.createElement('script');
        meanmenuScript.src = 'https://cdn.jsdelivr.net/npm/szmigiel-meanmenu@1.0.2/js/jquery.meanmenu.min.js';
        meanmenuScript.async = true;
        meanmenuScript.onload = () => {
          // Initialize MeanMenu after it loads
          if (window.jQuery && window.jQuery.fn.meanmenu) {
            window.jQuery("#main-menu").meanmenu({
              meanMenuContainer: ".mobile_menu",
              meanScreenWidth: "991",
              meanExpand: ['<i class="tji-angle-down"></i>'],
            });
          }
        };
        document.head.appendChild(meanmenuScript);
      }

      // Nice Select
      if (!document.querySelector('script[src*="nice-select"]')) {
        const niceSelectScript = document.createElement('script');
        niceSelectScript.src = 'https://cdn.jsdelivr.net/npm/jquery-nice-select@1.1.0/js/jquery.nice-select.min.js';
        niceSelectScript.async = true;
        niceSelectScript.onload = () => {
          // Initialize Nice Select after it loads
          if (window.jQuery && window.jQuery.fn.niceSelect) {
            if (window.jQuery("select").length > 0) {
              window.jQuery("select").niceSelect();
            }
          }
        };
        document.head.appendChild(niceSelectScript);
      }

      // jQuery Knob
      if (!document.querySelector('script[src*="jquery.knob"]')) {
        const knobScript = document.createElement('script');
        knobScript.src = 'https://cdn.jsdelivr.net/npm/jquery-knob@1.2.13/jquery.knob.min.js';
        knobScript.async = true;
        knobScript.onload = () => {
          // Initialize jQuery Knob after it loads
          if (window.jQuery && window.jQuery.fn.knob) {
            window.jQuery('.knob').knob();
          }
        };
        document.head.appendChild(knobScript);
      }
    };

    // Load non-jQuery libraries
    const loadNonJQueryLibraries = () => {
      // Appear.js
      if (!document.querySelector('script[src*="appear"]')) {
        const appearScript = document.createElement('script');
        appearScript.src = 'https://cdn.jsdelivr.net/npm/appear@1.6.2/dist/appear.min.js';
        appearScript.async = true;
        document.head.appendChild(appearScript);
      }

      // GSAP
      if (!document.querySelector('script[src*="gsap"]')) {
        const gsapScript = document.createElement('script');
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        gsapScript.async = true;
        gsapScript.onload = () => {
          // Load GSAP plugins after main GSAP loads
          loadGSAPPlugins();
        };
        document.head.appendChild(gsapScript);
      }

      // Swiper
      if (!document.querySelector('script[src*="swiper"]')) {
        const swiperScript = document.createElement('script');
        swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@10.3.1/swiper-bundle.min.js';
        swiperScript.async = true;
        swiperScript.onload = () => {
          // Initialize Swiper after it loads
          if (window.Swiper) {
            initializeSwipers();
          }
        };
        document.head.appendChild(swiperScript);
      }

      // Odometer
      if (!document.querySelector('script[src*="odometer"]')) {
        const odometerScript = document.createElement('script');
        odometerScript.src = 'https://cdn.jsdelivr.net/npm/odometer@0.4.8/odometer.min.js';
        odometerScript.async = true;
        odometerScript.onload = () => {
          // Initialize Odometer after it loads
          if (window.Odometer) {
            // Initialize any odometer elements
            const odometerElements = document.querySelectorAll('[data-odometer]');
            odometerElements.forEach((element) => {
              new window.Odometer({
                el: element as HTMLElement,
                value: element.getAttribute('data-odometer') || '0',
                format: '(,ddd)',
              });
            });
          }
        };
        document.head.appendChild(odometerScript);
      }

      // VenoBox
      if (!document.querySelector('script[src*="venobox"]')) {
        const venoboxScript = document.createElement('script');
        venoboxScript.src = 'https://cdn.jsdelivr.net/npm/venobox@2.0.4/dist/venobox.min.js';
        venoboxScript.async = true;
        venoboxScript.onload = () => {
          // Initialize VenoBox after it loads
          if (window.VenoBox) {
            new window.VenoBox({
              selector: '.venobox',
              numeration: true,
              infinigall: true,
              share: true,
              spinner: 'rotating-plane',
            });
          }
        };
        document.head.appendChild(venoboxScript);
      }

      // Chart.js
      if (!document.querySelector('script[src*="chart"]')) {
        const chartScript = document.createElement('script');
        chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js';
        chartScript.async = true;
        chartScript.onload = () => {
          // Initialize Chart.js after it loads
          if (window.Chart) {
            initializeCharts();
          }
        };
        document.head.appendChild(chartScript);
      }

      // Smooth Scroll Polyfill
      if (!document.querySelector('script[src*="smoothscroll"]')) {
        const smoothScrollScript = document.createElement('script');
        smoothScrollScript.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
        smoothScrollScript.async = true;
        smoothScrollScript.onload = () => {
          // Initialize smooth scroll polyfill
          if (typeof window !== 'undefined' && window.smoothscrollPolyfill) {
            window.smoothscrollPolyfill.polyfill();
          }
        };
        document.head.appendChild(smoothScrollScript);
      }

      // WOW.js
      if (!document.querySelector('script[src*="wow"]')) {
        const wowScript = document.createElement('script');
        wowScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
        wowScript.async = true;
        wowScript.onload = () => {
          // Initialize WOW.js after it loads
          if (window.WOW) {
            new window.WOW({
              boxClass: "wow",
              animateClass: "animated",
              offset: 80,
              callback: function (box: any) {
                // Ensure visibility when animation starts
                if (window.jQuery) {
                  window.jQuery(box).css("visibility", "visible");
                  window.jQuery(box).css("opacity", "1");
                }
              },
            }).init();
          }
        };
        document.head.appendChild(wowScript);
      }

      // Vivus.js for SVG animations
      if (!document.querySelector('script[src*="vivus"]')) {
        const vivusScript = document.createElement('script');
        vivusScript.src = 'https://cdn.jsdelivr.net/npm/vivus@0.4.6/dist/vivus.min.js';
        vivusScript.async = true;
        vivusScript.onload = () => {
          // Initialize Vivus.js after it loads
          if (window.Vivus) {
            // Initialize SVG animations
            const svgElements = document.querySelectorAll('.svg-animate svg');
            svgElements.forEach((svg) => {
              new window.Vivus(svg as HTMLElement, {
                type: 'delayed',
                duration: 200,
                animTimingFunction: window.Vivus.EASE,
                start: 'autostart',
                onReady: function(obj: any) {
                  console.log('Vivus animation ready:', obj);
                }
              });
            });
          }
        };
        document.head.appendChild(vivusScript);
      }
    };

    // Load GSAP plugins
    const loadGSAPPlugins = () => {
      const plugins = [
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js'
      ];

      let loadedPlugins = 0;
      plugins.forEach(pluginSrc => {
        if (!document.querySelector(`script[src="${pluginSrc}"]`)) {
          const pluginScript = document.createElement('script');
          pluginScript.src = pluginSrc;
          pluginScript.async = true;
          pluginScript.onload = () => {
            loadedPlugins++;
            if (loadedPlugins === plugins.length) {
              // All GSAP plugins loaded, initialize GSAP animations
              initializeGSAPAnimations();
            }
          };
          document.head.appendChild(pluginScript);
        } else {
          loadedPlugins++;
          if (loadedPlugins === plugins.length) {
            initializeGSAPAnimations();
          }
        }
      });
    };

    // Initialize Swiper sliders
    const initializeSwipers = () => {
      if (!window.Swiper) return;

      // Hero Slider
      if (document.querySelector(".full-slider-active")) {
        new window.Swiper(".full-slider-active", {
          speed: 2000,
          effect: "fade",
          loop: true,
          autoplay: {
            delay: 5000,
          },
          navigation: {
            prevEl: ".tj-btn-prev",
            nextEl: ".tj-btn-next",
          },
          pagination: {
            el: ".tj-sw-pagination",
            type: "fraction",
            clickable: true,
            renderFraction: function (currentClass: string, totalClass: string) {
              return (
                '<span class="' +
                currentClass +
                '"></span>' +
                ' <span class="dash"><span class="dash-inner"></span></span> ' +
                '<span class="' +
                totalClass +
                '"></span>'
              );
            },
          },
          on: {
            init: function () {
              updateDashWidth(this);
            },
            slideChange: function () {
              updateDashWidth(this);
            },
          },
        });

        function updateDashWidth(swiper: any) {
          const dashInner = swiper.el.querySelector(".dash-inner");
          if (dashInner) {
            const realIndex = swiper.realIndex;
            const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
            const progressPercent = ((realIndex + 1) / totalSlides) * 100;
            dashInner.style.width = progressPercent + "%";
          }
        }
      }

      // Blog Slider
      if (document.querySelector(".blog-standard-slider")) {
        new window.Swiper(".blog-standard-slider", {
          slidesPerView: 1,
          loop: true,
          speed: 1200,
          autoplay: {
            delay: 5000,
          },
          navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
          },
        });
      }

      // Marquee Slider
      if (document.querySelector(".marquee-slider")) {
        new window.Swiper(".marquee-slider", {
          slidesPerView: "auto",
          spaceBetween: 0,
          freemode: true,
          centeredSlides: true,
          loop: true,
          speed: 4000,
          allowTouchMove: false,
          autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
        });
      }

      // Brand Slider
      if (document.querySelector(".brand-slider-1")) {
        new window.Swiper(".brand-slider-1", {
          slidesPerView: "auto",
          spaceBetween: 30,
          freemode: true,
          centeredSlides: true,
          loop: true,
          speed: 5000,
          allowTouchMove: false,
          autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
          breakpoints: {
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.3,
            },
            992: {
              slidesPerView: 4.5,
            },
            1200: {
              slidesPerView: 5.2,
            },
            1400: {
              slidesPerView: 6,
            },
          },
        });
      }

      // Project Slider
      if (document.querySelector(".project-slider")) {
        new window.Swiper(".project-slider", {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          speed: 2000,
          arrow: false,
          breakpoints: {
            375: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          },
        });
      }

      // Service Slider
      if (document.querySelector(".tj-service-slider")) {
        new window.Swiper(".tj-service-slider", {
          slidesPerView: 3,
          spaceBetween: 24,
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 8500,
          },
          navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
          },
          pagination: {
            el: ".service-pagination",
            clickable: true,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
      }

      // Team Slider
      if (document.querySelector(".tj-team-slider")) {
        new window.Swiper(".tj-team-slider", {
          slidesPerView: 4,
          spaceBetween: 24,
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 8500,
          },
          pagination: {
            el: ".service-pagination",
            clickable: true,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            460: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          },
        });
      }

      // Testimonial Slider
      if (document.querySelector(".tj-testimonial-slider")) {
        new window.Swiper(".tj-testimonial-slider", {
          slidesPerView: 3,
          spaceBetween: 24,
          loop: true,
          speed: 1500,
          autoplay: {
            delay: 8500,
          },
          navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
          },
          pagination: {
            el: ".testimonial-pagination",
            clickable: true,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          },
        });
      }
    };

    // Initialize Charts
    const initializeCharts = () => {
      if (!window.Chart) return;

      // Pie Chart
      const ctx = document.querySelectorAll(".tj-pie-chart");
      if (ctx.length > 0) {
        ctx.forEach((ctxSingle) => {
          const canvas = ctxSingle as HTMLCanvasElement;
          const context = canvas.getContext('2d');
          if (context) {
            new window.Chart(context, {
              type: 'doughnut',
              data: {
                datasets: [
                  {
                    label: "47",
                    data: [20, 12, 15],
                    backgroundColor: [
                      "rgba(247, 247, 247, 0.2)",
                      "rgba(247, 247, 247, 0.5)",
                      "rgba(247, 247, 247, 0.8)",
                    ],
                    borderWidth: 0,
                  },
                ],
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
        });
      }
    };

    // Initialize GSAP animations
    const initializeGSAPAnimations = () => {
      if (!window.gsap) return;

      // Register plugins
      if (window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollToPlugin, window.SplitText);
      }

      // GSAP configuration
      window.gsap.config({
        nullTargetWarn: false,
      });

      // Clear existing ScrollTriggers
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }

      // Sticky animations
      window.gsap.to(".tj-sticky", {
        scrollTrigger: {
          trigger: ".tj-sticky",
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        },
      });

      // Progress bar animations
      const targetedProgressBar = document.querySelectorAll(".progress-bar");
      if (targetedProgressBar.length > 0) {
        targetedProgressBar.forEach((progressBar) => {
          const progressValue = progressBar.getAttribute("data-percentage");
          if (progressValue) {
            window.gsap.to(progressBar, {
              width: progressValue + "%",
              scrollTrigger: {
                trigger: progressBar,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // Text Effect Animation
      if (document.querySelector(".hero-text-anim")) {
        let staggerAmount = 0.05,
          delayValue = 0.4,
          easeType = "power1.out",
          heroTextElements = document.querySelectorAll(".hero-text-anim");

        heroTextElements.forEach((element) => {
          if (window.SplitText) {
            let animationSplitText = new window.SplitText(element, { type: "chars, words" });
            window.gsap.from(animationSplitText.chars, {
              opacity: 0,
              duration: 0.4,
              delay: delayValue,
              ease: easeType,
              stagger: staggerAmount,
              scrollTrigger: { trigger: element, start: "top 85%" },
            });
          }
        });
      }

      // Service stack animations
      let device_width = window.innerWidth;
      const serviceStack = window.gsap.utils.toArray(".service-stack");
      if (serviceStack.length > 0) {
        if (device_width > 991) {
          serviceStack.forEach((item: any) => {
            window.gsap.to(item, {
              opacity: 0,
              scale: 0.9,
              y: 50,
              scrollTrigger: {
                trigger: item,
                scrub: true,
                start: "top top",
                pin: true,
                pinSpacing: false,
                markers: false,
              },
            });
          });
        }
      }

      // Right swipe animations
      document.querySelectorAll(".rightSwipeWrap").forEach((wrap, i) => {
        window.gsap.set(wrap.querySelectorAll(".right-swipe"), {
          transformPerspective: 1200,
          x: "10rem",
          rotateY: -20,
          opacity: 0,
          transformOrigin: "right center",
        });
        window.gsap.to(wrap.querySelectorAll(".right-swipe"), {
          transformPerspective: 1200,
          x: 0,
          rotateY: 0,
          opacity: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrap,
            start: "top 80%",
            id: "rightSwipeWrap-" + i,
            toggleActions: "play none none none",
          },
        });
      });

      // Left swipe animations
      document.querySelectorAll(".leftSwipeWrap").forEach((wrap, i) => {
        window.gsap.set(wrap.querySelectorAll(".left-swipe"), {
          transformPerspective: 1200,
          x: "-10rem",
          rotateY: 20,
          opacity: 0,
          transformOrigin: "left center",
        });
        window.gsap.to(wrap.querySelectorAll(".left-swipe"), {
          transformPerspective: 1200,
          x: 0,
          rotateY: 0,
          opacity: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrap,
            start: "top 80%",
            id: "leftSwipeWrap-" + i,
            toggleActions: "play none none none",
          },
        });
      });

      // SVG animations
      document.querySelectorAll(".svg-animate").forEach((box) => {
        if (box.classList.contains("svg-animate")) {
          const paths = box.querySelectorAll("path");
          paths.forEach((path) => {
            const length = path.getTotalLength();
            window.gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length,
              visibility: "visible",
              opacity: 1,
            });
            window.gsap.to(path, {
              strokeDashoffset: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: box,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            });
          });
        }
      });

      console.log('GSAP animations initialized');
    };

    // Initialize jQuery functionality
    const initializejQueryFunctionality = () => {
      if (!window.jQuery) return;

      const $ = window.jQuery;

      // Data BG functionality
      $("[data-bg-image]").each(function (this: HTMLElement) {
        const $this = $(this);
        const $image = $this.data("bg-image");
        $this.css("background-image", "url(" + $image + ")");
      });
      
      $("[data-mask]").each(function (this: HTMLElement) {
        const $this = $(this);
        const $mask_image = $this.data("mask");
        $this.css("mask-image", "url(" + $mask_image + ")");
      });

      // Header sticky functionality
      let lastScrollTop = "";
      function stickyMenu($targetMenu: any, $toggleClass: string) {
        const st = $(window).scrollTop();
        if ($(window).scrollTop() > 500) {
          if (st > lastScrollTop) {
            $targetMenu.removeClass($toggleClass);
          } else {
            $targetMenu.addClass($toggleClass);
          }
        } else {
          $targetMenu.removeClass($toggleClass);
        }
        lastScrollTop = st;
      }

      $(window).on("scroll", function () {
        if ($(".tj-header-area").length) {
          stickyMenu($(".header-sticky"), "sticky");
        }
      });

      // Search functionality
      $(".header_search").on("click", function () {
        $(".search_popup").addClass("search-opened");
        $(".search-popup-overlay").addClass("opened");
      });

      $(".search_close_btn").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(".search-popup-overlay").removeClass("opened");
      });

      $(".search-popup-overlay").on("click", function (this: HTMLElement) {
        $(".search_popup").removeClass("search-opened");
        $(this).removeClass("opened");
      });

      // Hamburger menu functionality
      $(".menu_btn").on("click", function () {
        $(".hamburger-area").addClass("opened");
        $(".body-overlay").addClass("opened");
      });

      $(".hamburgerCloseBtn").on("click", function () {
        $(".hamburger-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });

      $(".body-overlay").on("click", function () {
        $(".hamburger-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });

      // Preloader functionality
      $(window).on("load", function () {
        $(".preloader").fadeOut(600);
      });

      // Process hover effects
      const processContainer = document.querySelector("#tj-process");
      if (processContainer) {
        const processItems = processContainer.querySelectorAll<HTMLElement>(".process-item");
        const processLineActive = processContainer.querySelector<HTMLElement>(".process-line-active");
      
        if (processItems.length) {
          const totalPortion = 100 / processItems.length;
          if (processLineActive) {
            processLineActive.style.left = "0";
            processLineActive.style.top = "0";
          }
      
          processItems.forEach((item, idx) => {
            item.addEventListener("mouseenter", function (this: HTMLElement) {
              processItems.forEach((item2) => {
                item2.classList.remove("active");
              });
      
              if (processLineActive) {
                processLineActive.style.top = `${totalPortion * idx}%`;
              }
      
              this.classList.add("active");
            });
          });
        }
      }
      

      // Team hover effects
      $(".h10-team-item").on("mouseover", function (this: HTMLElement) {
        $(this).addClass("active").siblings().removeClass("active");
      });
    };

    // Start loading libraries
    loadJQuery();
    loadNonJQueryLibraries();

    // Add a delay to ensure all libraries are loaded before initializing
    const timer = setTimeout(() => {
      // Re-initialize WOW.js if it's loaded
      if (window.WOW) {
        new window.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 80,
          callback: function (box: any) {
            if (window.jQuery) {
              window.jQuery(box).css("visibility", "visible");
              window.jQuery(box).css("opacity", "1");
            }
          },
        }).init();
      }
      
      // Re-initialize Vivus.js if it's loaded
      if (window.Vivus) {
        const svgElements = document.querySelectorAll('.svg-animate svg');
        svgElements.forEach((svg) => {
          new window.Vivus(svg as HTMLElement, {
            type: 'delayed',
            duration: 200,
            animTimingFunction: window.Vivus.EASE,
            start: 'autostart'
          });
        });
      }

      // Initialize jQuery functionality
      initializejQueryFunctionality();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null; // This component doesn't render anything
}

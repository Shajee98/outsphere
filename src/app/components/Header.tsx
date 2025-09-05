'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Show sticky header after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hamburger menu toggle
  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  // Close hamburger menu when clicking outside or on close button
  const closeHamburger = () => {
    setIsHamburgerOpen(false);
  };

  // Handle search popup toggle
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Close search popup
  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  // Handle clicks outside search popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  // Handle body overlay click to close hamburger
  useEffect(() => {
    const handleBodyOverlayClick = (e: MouseEvent) => {
      if ((e.target as Element).classList.contains('body-overlay')) {
        closeHamburger();
      }
    };

    const handleCloseButtonClick = (e: MouseEvent) => {
      if ((e.target as Element).closest('.hamburger_close_btn')) {
        closeHamburger();
      }
    };

    if (isHamburgerOpen) {
      document.addEventListener('click', handleBodyOverlayClick);
      document.addEventListener('click', handleCloseButtonClick);
      document.body.style.overflow = 'hidden'; // Prevent body scroll
    } else {
      document.body.style.overflow = ''; // Restore body scroll
    }

    return () => {
      document.removeEventListener('click', handleBodyOverlayClick);
      document.removeEventListener('click', handleCloseButtonClick);
      document.body.style.overflow = '';
    };
  }, [isHamburgerOpen]);

  return (
    <>
      {/* Single Header with Conditional Classes */}
      <header className={`tj-header-area header-2 header-7 header-10 ${isScrolled ? 'header-sticky' : 'header-absolute'}`}>
        <div className="header-topbar header-10-topbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header-topbar_wrap">
                  <div className="topbar_note">
                    <i className="tji-check"></i> Trusted partner in business excellence
                    <a href="contact.html">
                      <span>Join us now</span>
                      <i className="tji-angle-right"></i>
                    </a>
                  </div>
                  <div className="topbar_infos">
                    <div className="info_item">
                      <span><i className="tji-clock"></i></span>
                      <span>Mon - Friday : 9:00 - 18:00</span>
                    </div>
                    <div className="info_item">
                      <span><i className="tji-email"></i></span>
                      <a href="mailto:support@solvior.com">support@solvior.com</a>
                    </div>
                    <div className="info_item">
                      <span><i className="tji-phone"></i></span>
                      <a href="tel:+1009544-7818">+1 (009) 544-7818</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header-wrapper">
                  {/* Logo */}
                  <div className="site-logo">
                    <a className="logo" href="/">
                      <img src="/images/logos/primary-logo.png" alt="logo" />
                    </a>
                  </div>

                  {/* Main Navigation */}
                  <div className="mainmenu d-lg-block d-none" id="main-menu">
                    <ul>
                      <li className="has-dropdown current-menu-ancestor">
                        <a href="/">Home</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="/services">Services</a>
                      </li>
                      <li className="has-dropdown">
                    <a href="services.html">Services</a>
                    <ul className="sub-menu  mega-menu-service">
                      <li> <a className="mega-menu-service-single" href="service-details.html"> <span
                            className="mega-menu-service-icon">
                            <i className="tji-optimization"></i>
                          </span> <span className="mega-menu-service-title">Business process
                            optimization</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right"></i><i
                              className="tji-arrow-right"></i></span></a></li>
                      <li> <a className="mega-menu-service-single" href="service-details.html"> <span
                            className="mega-menu-service-icon">
                            <i className="tji-strategic"></i>
                          </span> <span className="mega-menu-service-title">Strategic planning &
                            execution</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right"></i><i
                              className="tji-arrow-right"></i></span></a></li>
                      <li> <a className="mega-menu-service-single" href="service-details.html"> <span
                            className="mega-menu-service-icon">
                            <i className="tji-leadership"></i>
                          </span> <span className="mega-menu-service-title">Leadership executive
                            coaching</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right"></i><i
                              className="tji-arrow-right"></i></span></a></li>
                      <li> <a className="mega-menu-service-single" href="service-details.html"> <span
                            className="mega-menu-service-icon">
                            <i className="tji-business"></i>
                          </span> <span className="mega-menu-service-title">Business process
                            optimization</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right"></i><i
                              className="tji-arrow-right"></i></span></a></li>
                      <li> <a className="mega-menu-service-single" href="service-details.html"> <span
                            className="mega-menu-service-icon">
                            <i className="tji-process"></i>
                          </span> <span className="mega-menu-service-title">Business process
                            optimization</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right"></i><i
                              className="tji-arrow-right"></i></span></a></li>
                      <li> <a className="mega-menu-service-single" href="service-details.html"> <span
                            className="mega-menu-service-icon">
                            <i className="tji-executive"></i>
                          </span> <span className="mega-menu-service-title">Leadership executive
                            coaching</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right"></i><i
                              className="tji-arrow-right"></i></span></a></li>

                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="javascript:void(0)">Pages</a>
                    <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
                      <li>
                        <div className="mega-menu-wrapper">

                          <div className="mega-menu-pages-single">
                            <div className="mega-menu-pages-single-inner">
                              <h6 className="mega-menu-title">Main Pages</h6>
                              <div className="mega-menu-list">
                                <a href="about.html">About us</a>
                                <a href="history.html">Our history <span
                                    className="mega-menu-badge mega-menu-badge-hot">HOT</span></a>
                                <a href="team.html">Team</a>
                                <a href="team-details.html">Team details</a>
                                <a href="careers.html">Careers <span className="mega-menu-badge ">NEW</span></a>
                                <a href="careers-details.html">Careers details</a>
                                <a href="pricing.html">Pricing Plan</a>
                                <a href="#">Feedbacks</a>
                                <a href="faq.html">Faq</a>
                                <a href="contact.html">Contact</a>


                              </div>
                            </div>

                          </div>
                          <div className="mega-menu-pages-single">
                            <div className="mega-menu-pages-single-inner">
                              <h6 className="mega-menu-title">Other Pages</h6>
                              <div className="mega-menu-list">
                                <a href="services.html">Services</a>
                                <a href="service-details.html">Service details</a>
                                <a href="project.html">Portfolio</a>
                                <a href="project-details.html">Portfolio details</a>
                                <a href="#">Error 404</a>
                                <a href="blog.html">Blog grid <span className="mega-menu-badge ">NEW</span></a>
                                <a href="blog.html">Blog Standard</a>
                                <a href="blog-details.html">Blog details</a>
                                <a href="#">Term & conditions</a>
                                <a href="#">Recognition <span className="mega-menu-badge ">NEW</span></a>


                              </div>
                            </div>

                          </div>
                          <div className=" mega-menu-pages-single">
                            <div className="mega-menu-pages-single-inner">
                              <h6 className="mega-menu-title">Shop Pages</h6>
                              <div className="mega-menu-list">
                                <a href="shop.html">Shop <span
                                    className="mega-menu-badge mega-menu-badge-hot">HOT</span></a>
                                <a href="shop-details.html">Shop details </a>
                                <a href="cart.html">Cart</a>
                                <a href="checkout.html">Checkout</a>
                                <a href="wishlist.html">Wishlist<span className="mega-menu-badge ">NEW</span></a>
                                <a href="login.html">Login</a>

                                <a href="#">Tracking</a>
                                <a href="#">Order confirm</a>
                                <a href="login.html">Registration</a>
                                <a href="#">Coming soon</a>


                              </div>
                            </div>

                          </div>
                          <div className="col-12 col-lg-3 mega-menu-pages-single">
                            <div className="mega-menu-pages-single-inner">
                              <div className="tj-sidebar-cta" data-bg-image="assets/images/blog/widget-cta.webp">
                                <div className="content">
                                  <div className="icon">
                                    <img src="/images/shapes/widget-cta-icon.png" alt="image" />
                                  </div>
                                  <h3>Need help? <br /> Feel free contact us</h3>
                                  <p>
                                    Our mission is to empowers businesses off all size in an
                                    businesses.
                                  </p>
                                </div>
                                <div className="cta-btn">
                                  <a href="contact.html" className="tj-primary-btn white-btn">
                                    <div className="btn_inner">
                                      <div className="btn_icon">
                                        <span>
                                          <i className="tji-arrow-right"></i>
                                          <i className="tji-arrow-right"></i>
                                        </span>
                                      </div>
                                      <div className="btn_text"><span>Get in touch</span></div>
                                    </div>
                                  </a>
                                  <img className="shapes move-anim-2" src="/images/shapes/carrow.png" alt="shape" />
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="project.html">Portfolio</a>
                    <ul className="sub-menu">
                      <li><a href="project.html">Portfolio</a></li>
                      <li><a href="project-details.html">Portfolio details</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown ">
                    <a href="blog.html">Blog</a>
                    <ul className="sub-menu">
                      <li><a href="blog.html">Blog standard</a></li>
                      <li><a href="blog-grid.html">Blog grid</a></li>
                      <li><a href="blog-with-sidebar.html">Blog with sidebar</a></li>
                      <li><a href="blog-details.html">Blog details</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>

                  {/* Header Right Info */}
                  <div className="header_right_info d-none d-lg-inline-flex">
                    <a href="/contact" className="tj-primary-btn header_btn d-none d-xl-flex">
                      <div className="btn_inner">
                        <div className="btn_icon">
                          <span>
                            <i className="tji-arrow-right"></i>
                            <i className="tji-arrow-right"></i>
                          </span>
                        </div>
                        <div className="btn_text">
                          <span>Get a quote</span>
                        </div>
                      </div>
                    </a>
                    <button 
                      className="header_search header_contact d-none d-lg-inline-flex"
                      onClick={toggleSearch}
                    >
                      <span className="icon"><i className="tji-search"></i></span>
                    </button>
                    <button 
                      className={`menu_btn ${isHamburgerOpen ? 'active' : ''}`}
                      onClick={toggleHamburger}
                    >
                      <span className="line">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </button>
                  </div>

                  {/* Mobile Menu Button */}
                  <button 
                    className={`menu_btn d-lg-none hamburgerBtn ${isHamburgerOpen ? 'active' : ''}`}
                    onClick={toggleHamburger}
                  >
                    <span className="line">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="search_popup" ref={searchRef}>
          <div className="search_close">
            <button type="button" className="search_close_btn" onClick={closeSearch}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
                <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="tj_search_wrapper">
                  <div className="search_form">
                    <form action="#">
                      <div className="search_input">
                        <h4 className="title">Search Blog, projects, Service or people.</h4>
                        <div className="search-box">
                          <input 
                            className="search-input-field" 
                            type="search" 
                            placeholder="Search here..." 
                            required={true}
                            autoFocus
                          />
                          <button type="submit">
                            <i className="tji-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hamburger Menu Overlay */}
      <div className={`body-overlay ${isHamburgerOpen ? 'active' : ''}`}></div>
      <div className={`hamburger-area ${isHamburgerOpen ? 'active' : ''}`} data-lenis-prevent>
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_top d-flex align-items-center justify-content-between">
            <div className="hamburger_logo">
              <a href="/" className="mobile_logo">
                <img src="/images/logos/primary-logo.png" alt="Logo" />
              </a>
            </div>
            <div className="hamburger_close">
              <button className="hamburger_close_btn hamburgerCloseBtn" onClick={closeHamburger}>
                <i className="fa-thin fa-times"></i>
              </button>
            </div>
          </div>
          <div className="hamburger_search">
            <form method="get" action="#0">
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
            </form>
          </div>

          <div className="hamburger_menu">
            <div className="mobile_menu">
              <ul>
                <li className="current-menu-ancestor">
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/project">Portfolio</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hamburger-infos">
            <h4 className="hamburger-title">Contact info</h4>
            <div className="contact-info">
              <div className="contact_item">
                <span className="subtitle">Email</span>
                <div className="text">
                  <a className="link" href="mailto:support@solvior.com">support@solvior.com</a>
                </div>
              </div>
              <div className="contact_item">
                <span className="subtitle">Phone</span>
                <div className="text">
                  <a className="link" href="tel:000123456789">(000) 123 456 789</a>
                </div>
              </div>
              <div className="contact_item">
                <span className="subtitle">Location</span>
                <div className="text">Santa, United State</div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h4 className="hamburger-title">Follow us</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

export default function HamburgerMenu() {
  return (
    <>
      <div className="body-overlay"></div>
      <div className="hamburger-area" data-lenis-prevent>
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_top d-flex align-items-center justify-content-between">
            <div className="hamburger_logo">
              <a href="index.html" className="mobile_logo">
                <img src="/images/logos/primary-logo.png" alt="Logo" />
              </a>
            </div>
            <div className="hamburger_close">
              <button className="hamburger_close_btn hamburgerCloseBtn">
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
            <div className="mobile_menu"></div>
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

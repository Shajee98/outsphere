'use client';

export default function Footer() {
  return (
    <footer className="tj-footer-area footer-2 style-2 h10-footer">
      <div className="footer-top-area h10-footer-top fix">
        <div className="container">
          <div className="row line rg-50">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget h10-footer-widget footer-newsletter-form h10-footer-newsletter-form">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="/images/logos/primary-logo.png" alt="solvior" />
                  </a>
                </div>
                <p className="desc">
                  Receive the latest business news, tips & updates via email
                </p>
                <div className="newsletter-form">
                  <form>
                    <div className="form-input">
                      <input type="email" id="email" name="email" placeholder="Enter email" required={true} />
                      <button className="tj-footer-input-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="h10-footer-widget-wrapper">
                <div className="row justify-content-between rg-30">
                  <div className="col-12">
                    <div className="h10-footer-cta">
                      <h1 className="h10-footer-cta-title text-anim">Let&apos;s talk business?</h1>
                      <a className="icon-btn h10-footer-cta-btn wow fadeInRight" data-wow-delay=".7s" href="project-details.html">
                        <i className="tji-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="footer-widget footer-contact-infos">
                      <div className="infos-item">
                        <span>Headquarters - USA</span>
                        <p>993 Renner Burg, West Rond, MT 94251-030</p>
                        <a href="tel:1009544-7818">+1 (009) 544-7818</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6">
                    <div className="footer-widget footer-contact-infos footer-contact-infos-2">
                      <div className="infos-item">
                        <span>Operations - Canada</span>
                        <p>Suite 452 8082 Boner Parge, Elviraton, CA 48998</p>
                        <a href="mailto:support@solvior.com">support@solvior.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="footer-widget">
                      <div className="footer-social">
                        <div className="footer-socia-inner">
                          <h5 className="title">Follow Us:</h5>
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
                              <a href="https://x.com/">
                                <i className="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/">
                                <i className="fa-brands fa-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <div className="copyright-text">
                  <p>
                    <i className="fa-solid fa-shield-check"></i> Trusted partner in business excellence
                  </p>
                </div>
                <div className="copyright-text">
                  <p>
                    © 2025 <a href="#" target="_blank"> Solvior </a> All right reserved.
                  </p>
                </div>
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <a href="contact.html">Policy & privacy</a>
                    </li>
                    <li>
                      <a href="contact.html">Terms & conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="back-to-top-wrapper h7-back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn style-6">
          <i className="tji-arrow-up"></i>
          <span>GOTOP</span>
        </button>
      </div>
    </footer>
  );
}

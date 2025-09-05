'use client';

export default function Hero() {
  return (
    <section className="h10-hero style-1">
      <div className="tj-slider-section h10-hero-inner" data-bg-image="/images/hero/h10-hero-bg.webp">
        <div className="container">
          <div className="row">
            <div className="slider-wrapper h10-hero-wrapper">
              <div className="h10-hero-content">
                <h1 className="hero-title hero-text-anim">
                  Expert business
                  <span>consulting</span>
                </h1>
                <div className="desc wow fadeInUp" data-wow-delay="1.2s">
                  <p>
                    Transform your business with expert consultancy services our team of seasoned consultants
                    unparalleled.
                  </p>
                </div>

                <div className="h10-hero-sroll-down wow fadeInDown" data-wow-delay="1.4s">
                  <div className="h10-hero-sroll-down-icon">
                    <img src="/images/icons/down-arro.svg" alt="" />
                  </div>
                </div>
                
                {/* Mobile Stats */}
                <div className="h10-hero-stat d-xl-none">
                  <div className="h10-hero-stat-inner">
                    <div className="h10-hero-stat-chart">
                      <canvas className="tj-pie-chart"></canvas>
                      <p className="h10-hero-stat-chart-text">Statics</p>
                    </div>
                    <div className="h10-hero-stat-counter">
                      <div className="h10-hero-counter-item">
                        <div className="number">
                          <span className="odometer" data-count="810">0</span>
                          <sup>+</sup>
                        </div>
                        <span className="sub-title">Helping ambitious our brand turn into a success</span>
                      </div>
                    </div>
                  </div>
                  <div className="h10-hero-stat-action">
                    <a href="about.html" className="tj-primary-btn">
                      <div className="btn_inner">
                        <div className="btn_text">
                          <span>Get free consultation</span>
                        </div>
                        <div className="btn_icon">
                          <span>
                            <i className="tji-arrow-right"></i>
                            <i className="tji-arrow-right"></i>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop Stats */}
              <div className="h10-hero-stat d-none d-xl-block">
                <div className="h10-hero-stat-inner">
                  <div className="h10-hero-stat-chart">
                    <canvas className="tj-pie-chart"></canvas>
                    <p className="h10-hero-stat-chart-text">Statics</p>
                  </div>
                  <div className="h10-hero-stat-counter">
                    <div className="h10-hero-counter-item">
                      <div className="number">
                        <span className="odometer" data-count="810">0</span>
                        <sup>+</sup>
                      </div>
                      <span className="sub-title">Helping ambitious our brand turn into a success</span>
                    </div>
                  </div>
                </div>

                <div className="h10-hero-stat-action">
                  <a href="about.html" className="tj-primary-btn">
                    <div className="btn_inner">
                      <div className="btn_text">
                        <span>Get free consultation</span>
                      </div>
                      <div className="btn_icon">
                        <span>
                          <i className="tji-arrow-right"></i>
                          <i className="tji-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

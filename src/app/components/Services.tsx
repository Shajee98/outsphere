'use client';

export default function Services() {
  return (
    <section className="h10-service-section section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-2 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                [ OUR SERVICES ]
              </span>
              <h2 className="sec-title text-anim">Comprehensive business solutions</h2>
            </div>
          </div>
        </div>
        <div className="row rg-30">
          <div className="col-xl-4 col-lg-6">
            <div className="service-item h10-service-item wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-icon">
                <i className="tji-strategic"></i>
              </div>
              <div className="service-content">
                <h4 className="service-title">
                  <a href="service-details.html">Strategic Planning</a>
                </h4>
                <p className="service-description">
                  Develop comprehensive strategies to achieve your business goals and drive sustainable growth.
                </p>
                <a href="service-details.html" className="service-link">
                  Learn more <i className="tji-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="service-item h10-service-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-icon">
                <i className="tji-optimization"></i>
              </div>
              <div className="service-content">
                <h4 className="service-title">
                  <a href="service-details.html">Process Optimization</a>
                </h4>
                <p className="service-description">
                  Streamline your operations and improve efficiency through data-driven process improvements.
                </p>
                <a href="service-details.html" className="service-link">
                  Learn more <i className="tji-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="service-item h10-service-item wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-icon">
                <i className="tji-leadership"></i>
              </div>
              <div className="service-content">
                <h4 className="service-title">
                  <a href="service-details.html">Leadership Development</a>
                </h4>
                <p className="service-description">
                  Build strong leadership capabilities within your organization through targeted coaching and training.
                </p>
                <a href="service-details.html" className="service-link">
                  Learn more <i className="tji-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

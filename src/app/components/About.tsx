'use client';

export default function About() {
  return (
    <section className="h10-about-section section-space">
      <div className="container">
        <div className="row align-items-xxl-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="overview-img wow fadeInUp" data-wow-delay="0.3s">
              <img src="/images/about/h10-about.webp" alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="h10-about-content-wrap">
              <div className="sec-heading style-2 ">
                <span className="sub-title wow fadeInUp" data-wow-delay="0.2s">[ NUMBER #1 SOLVER COMPANY ]</span>
                <h2 className="sec-title text-anim">Building new businesses through our strategic</h2>
              </div>
              <div className="h6-insight_accordion h10-about-accordion wow fadeInUp" data-wow-delay="0.3s"
                id="about10Accordion">
                <div className="accordion_item">
                  <button className="accordion_title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true">
                    <span className="subtitle">01.</span>
                    <span className="title">Strategic planning & execution</span>
                  </button>
                  <div id="collapseOne" className="accordion_desc collapse show" data-bs-parent="#about10Accordion">
                    <div className="accordion-body">
                      Our mission is to empowers businesses off our all size thrives an businesses changing
                      marketplaces. In today dynamics business environment, the key to the success lies Our mission is
                      to empower our mission
                    </div>
                  </div>
                </div>

                <div className="accordion_item">
                  <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false">
                    <span className="subtitle">02.</span>
                    <span className="title">Leadership executive coaching</span>
                  </button>
                  <div id="collapseTwo" className="accordion_desc collapse" data-bs-parent="#about10Accordion">
                    <div className="accordion-body">
                      Our consultant specialize in delivering rapid, actionable solutions that address your most
                      pressing business on challenges. Whether you are facing operational inefficiencies, stalled
                      growth.
                    </div>
                  </div>
                </div>

                <div className="accordion_item">
                  <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false">
                    <span className="subtitle">03.</span>
                    <span className="title">Business process optimization</span>
                  </button>
                  <div id="collapseThree" className="accordion_desc collapse" data-bs-parent="#about10Accordion">
                    <div className="accordion-body">
                      Our Strategic Planning and Execution service offers formulating and implementing business goals.
                      We begin with an in-depth analysis of your business and market to identify opportunities and
                      challenges.
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-area wow fadeInUp" data-wow-delay="0.5s">
                <a href="contact.html" className="tj-primary-btn hero-button">
                  <div className="btn_inner">
                    <div className="btn_icon">
                      <span>
                        <i className="tji-arrow-right"></i>
                        <i className="tji-arrow-right"></i>
                      </span>
                    </div>
                    <div className="btn_text">
                      <span>Know more us</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

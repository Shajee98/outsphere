'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="tj-cta-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper">
              <div className="cta-title">
                <h2 className="title text-anim">Get consultant now!</h2>
              </div>
              <div className="cta-button wow fadeInUp" data-wow-delay="0.1s">
                <Link href="/contact" className="tj-primary-btn white-btn">
                  <div className="btn_inner">
                    <div className="btn_icon">
                      <span>
                        <i className="tji-arrow-right"></i>
                        <i className="tji-arrow-right"></i>
                      </span>
                    </div>
                    <div className="btn_text">
                      <span>Lets talk now</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="cta-shape-1" src="/images/shapes/cta-shapes-1.png" alt="Shapes" />
      <img className="cta-shape-2" src="/images/shapes/cta-shapes-2.png" alt="Shapes" />
    </section>
  );
}


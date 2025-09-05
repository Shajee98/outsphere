import { Metadata } from 'next';
import Services from '../components/Services';

export const metadata: Metadata = {
  title: 'Our Services - Solvior',
  description: 'Explore our comprehensive business consulting services',
};

export default function ServicesPage() {
  return (
    <main id="primary" className="site-main">
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">Our Services</h1>
              <p className="page-description">
                Comprehensive business solutions tailored to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      
      <section className="additional-services section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading style-2 text-center">
                <h2 className="sec-title">Additional Consulting Services</h2>
              </div>
            </div>
          </div>
          <div className="row rg-30">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="tji-business"></i>
                </div>
                <div className="service-content">
                  <h4>Business Development</h4>
                  <p>Strategic planning and execution for business growth and expansion.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="tji-process"></i>
                </div>
                <div className="service-content">
                  <h4>Process Improvement</h4>
                  <p>Optimize your business processes for maximum efficiency and productivity.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="tji-executive"></i>
                </div>
                <div className="service-content">
                  <h4>Executive Coaching</h4>
                  <p>Personalized coaching for executives and leadership development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

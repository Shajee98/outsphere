import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Solvior',
  description: 'Learn more about Solvior and our business consulting expertise',
};

export default function AboutPage() {
  return (
    <main id="primary" className="site-main">
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">About Us</h1>
              <p className="page-description">
                Discover our story and mission to transform businesses through expert consulting.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-content section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="about-text">
                <h2>Our Mission</h2>
                <p>
                  At Solvior, we are dedicated to empowering organizations to navigate change, 
                  maximize efficiency, and unlock their full business potential. Our team of 
                  seasoned consultants brings unparalleled expertise to every engagement.
                </p>
                
                <h2>Our Approach</h2>
                <p>
                  We believe in building lasting partnerships with our clients, providing 
                  strategic solutions that drive sustainable growth and measurable results. 
                  Our comprehensive approach combines industry best practices with innovative 
                  thinking to deliver exceptional value.
                </p>
                
                <h2>Why Choose Solvior</h2>
                <ul>
                  <li>Proven track record of success</li>
                  <li>Experienced team of consultants</li>
                  <li>Customized solutions for your business</li>
                  <li>Ongoing support and partnership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

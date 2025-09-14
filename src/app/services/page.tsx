import { Metadata } from 'next';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';

export const metadata: Metadata = {
  title: 'Services - Solvior',
  description: 'Explore our comprehensive business consulting services',
};

export default function ServicesPage() {
  return (
    <main id="primary" className="site-main">
      {/* Breadcrumb / Page Header */}
      <PageHeader title="Services" backgroundImage="/images/bg/pheader-bg.webp" />

      {/* Services Grid */}
      <div className="tj-service-area section-space">
        <div className="container">
          <div className="row rg-30">
            <div className="col-lg-4 col-md-6">
              <ServiceCard
                iconClass="tji-optimization"
                number="01"
                title={<><span>Business process</span> <br /> <span>optimization</span></>}
                description={
                  "In today's dynamic business environment, the key to success lies strategics our planning and operational business."
                }
                href="/services"
                linkText="Get optimization"
                imageSrc="/images/service/h1-service-1.webp"
                delay="0.1s"
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <ServiceCard
                iconClass="tji-strategic"
                number="02"
                title={<><span>Strategic planning &</span> <br /> <span>execution</span></>}
                description={
                  "In today's dynamic business environment, the key to success lies strategics our planning and operational business."
                }
                href="/services"
                linkText="Get planning"
                imageSrc="/images/service/h1-service-2.webp"
                delay="0.3s"
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <ServiceCard
                iconClass="tji-leadership"
                number="03"
                title={<><span>Leadership executive</span> <br /> <span>coaching</span></>}
                description={
                  "In today's dynamic business environment, the key to success lies strategics our planning and operational business."
                }
                href="/services"
                linkText="Get coaching"
                imageSrc="/images/service/h1-service-3.webp"
                delay="0.5s"
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <ServiceCard
                iconClass="tji-process"
                number="04"
                title={<><span>Leadership executive</span> <br /> <span>coaching</span></>}
                description={
                  "In today's dynamic business environment, the key to success lies strategics our planning and operational business."
                }
                href="/services"
                linkText="Get coaching"
                imageSrc="/images/service/h1-service-4.webp"
                delay="0.1s"
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <ServiceCard
                iconClass="tji-business"
                number="05"
                title={<><span>Leadership executive</span> <br /> <span>coaching</span></>}
                description={
                  "In today's dynamic business environment, the key to success lies strategics our planning and operational business."
                }
                href="/services"
                linkText="Get coaching"
                imageSrc="/images/service/h1-service-5.webp"
                delay="0.3s"
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <ServiceCard
                iconClass="tji-executive"
                number="06"
                title={<><span>Leadership executive</span> <br /> <span>coaching</span></>}
                description={
                  "In today's dynamic business environment, the key to success lies strategics our planning and operational business."
                }
                href="/services"
                linkText="Get coaching"
                imageSrc="/images/service/h1-service-6.webp"
                delay="0.5s"
              />
            </div>
          </div>

          <div className="tj-pagination d-flex justify-content-center">
            <ul>
              <li>
                <span aria-current="page" className="page-numbers current">01</span>
              </li>
              <li>
                <a className="page-numbers" href="#">02</a>
              </li>
              <li>
                <a className="next page-numbers" href="#"><i className="tji-arrow-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </main>
  );
}

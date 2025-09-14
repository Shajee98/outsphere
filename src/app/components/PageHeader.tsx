'use client';

import Link from 'next/link';

type Crumb = { label: string; href?: string };

export default function PageHeader({
  title,
  backgroundImage,
  breadcrumbs = [{ label: 'Home', href: '/' }, { label: title }],
}: {
  title: string;
  backgroundImage: string; // path under public, e.g. "/images/bg/pheader-bg.webp"
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="tj-page-header" data-bg-image={backgroundImage}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tj-page-header-content text-center">
              <h1 className="tj-page-title text-anim">{title}</h1>
              <div className="tj-page-link wow fadeInUp" data-wow-delay="0.1s">
                {breadcrumbs.map((crumb, idx) => (
                  <span key={idx}>
                    {crumb.href ? (
                      <Link href={crumb.href}>
                        <span>{crumb.label}</span>
                      </Link>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                    {idx < breadcrumbs.length - 1 && <span>/</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


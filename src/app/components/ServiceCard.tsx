'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

export default function ServiceCard({
  iconClass,
  number,
  title,
  description,
  href = '#',
  linkText,
  imageSrc,
  delay = '0.1s',
}: {
  iconClass: string;
  number: string;
  title: ReactNode;
  description: string;
  href?: string;
  linkText: string;
  imageSrc: string; // path under public
  delay?: string; // wow delay
}) {
  return (
    <div className="service-style-2 wow fadeInUp" data-wow-delay={delay}>
      <div className="service-icon">
        <i className={iconClass}></i>
      </div>
      <div className="service-content">
        <span className="number">{number}</span>
        <h4 className="title">
          <Link href={href}>{title}</Link>
        </h4>
        <div className="desc">
          <p>{description}</p>
        </div>
        <Link className="service-button text-btn" href={href}>
          {linkText} <i className="tji-arrow-right"></i>
        </Link>
      </div>
      <div className="thumb">
        <img src={imageSrc} alt="image" />
      </div>
    </div>
  );
}


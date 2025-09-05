import { Metadata } from 'next';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Services from '../components/Services';
import Blog from '../components/Blog';

export const metadata: Metadata = {
  title: 'Solvior - Business Consulting',
  description: 'Expert business consulting services to transform your business',
};

export default function HomePage() {
  return (
    <main id="primary" className="site-main">
      <Hero />
      <Features />
      <About />
      <Services />
      <Blog />
    </main>
  );
}

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import ProductCatalog from '../components/ProductCatalog';
import Legacy from '../components/Legacy';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections with fade-in animation
    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => observer.observe(section));

    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Products />
      <ProductCatalog />
      <Legacy />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

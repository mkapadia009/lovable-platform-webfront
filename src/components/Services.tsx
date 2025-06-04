
import React from 'react';
import { Beaker, Truck, FileCheck, Shield, Clock, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Beaker,
      title: "API Manufacturing",
      description: "High-quality Active Pharmaceutical Ingredients manufactured to international standards with complete documentation.",
      features: ["GMP Certified", "Batch Testing", "COA Provided"]
    },
    {
      icon: Truck,
      title: "Global Supply Chain",
      description: "Reliable worldwide distribution network ensuring timely delivery of pharmaceutical raw materials.",
      features: ["Cold Chain", "Express Delivery", "Tracking System"]
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Full regulatory support ensuring all materials meet FDA, EMA, and other international standards.",
      features: ["FDA Approved", "DMF Support", "Audit Ready"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive quality control with advanced testing facilities and certified quality systems.",
      features: ["99.9% Purity", "Full Testing", "Quality Reports"]
    },
    {
      icon: Clock,
      title: "Just-in-Time Delivery",
      description: "Optimized inventory management and delivery scheduling to reduce your holding costs.",
      features: ["24/7 Support", "Emergency Stock", "Flexible Terms"]
    },
    {
      icon: Globe,
      title: "Custom Solutions",
      description: "Tailored pharmaceutical solutions including custom synthesis and specialized formulations.",
      features: ["Custom Synthesis", "R&D Support", "Pilot Batches"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">
            Comprehensive Pharmaceutical Services
          </h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            From raw material sourcing to regulatory compliance, we provide end-to-end solutions 
            for pharmaceutical companies worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-pharma-blue to-pharma-green p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-pharma-blue mb-4 group-hover:text-pharma-green transition-colors">
                {service.title}
              </h3>
              
              <p className="text-pharma-grey mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-pharma-green rounded-full mr-3"></div>
                    <span className="text-pharma-grey">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-pharma-blue hover:text-pharma-green font-medium flex items-center group-hover:translate-x-2 transition-transform">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

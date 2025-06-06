
import React from 'react';
import { Beaker, Truck, FileCheck, Shield, Clock, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Sourcing & Trading ",
      description: "We collaborate with a global network of reputable and GMP-compliant manufacturers to source high-quality pharmaceutical ingredients. Our sourcing strategy is built on reliability, transparency, and long-term supplier relationships.",
      // features: ["GMP Certified", "Batch Testing", "COA Provided"]
      features:[]
    },
    {
      icon: Truck,
      title: "Distribution",
      description: "With a robust and agile distribution network, we ensure timely and efficient delivery of pharmaceutical products across domestic and international markets. Our logistics capabilities are designed to meet the dynamic needs of our clients.",
      // features: ["Cold Chain", "Express Delivery", "Tracking System"]
      features:[]
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Navigating complex regulatory landscapes is our forte. We ensure that all sourced and distributed products meet stringent local and international regulatory standards, including documentation support for DMFs, CEPs, and other compliance requirements.",
      // features: ["FDA Approved", "DMF Support", "Audit Ready"]
      features:[]
    },
    // {
    //   icon: Shield,
    //   title: "Quality Assurance",
    //   description: "Comprehensive quality control with advanced testing facilities and certified quality systems.",
    //   features: ["99.9% Purity", "Full Testing", "Quality Reports"]
    // },
    // {
    //   icon: Clock,
    //   title: "Just-in-Time Delivery",
    //   description: "Optimized inventory management and delivery scheduling to reduce your holding costs.",
    //   features: ["24/7 Support", "Emergency Stock", "Flexible Terms"]
    // },
    // {
    //   icon: Globe,
    //   title: "Custom Solutions",
    //   description: "Tailored pharmaceutical solutions including custom synthesis and specialized formulations.",
    //   features: ["Custom Synthesis", "R&D Support", "Pilot Batches"]
    // }
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

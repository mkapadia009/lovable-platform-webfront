
import React from 'react';
import { ArrowRight, Shield, Globe, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero background with gradient */}
      <div className="hero-gradient min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Leading Global Supplier of 
                <span className="text-yellow-300"> Pharmaceutical Raw Materials</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Trusted by healthcare companies worldwide for reliable sourcing, 
                quality assurance, and regulatory compliance in pharmaceutical ingredients and APIs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-pharma-green hover:bg-pharma-green-dark text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center group">
                  <a href="#contact">Contact Us</a>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-slide-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.ibb.co/Kc3LCfVQ/20250609-1125-Adding-Powder-Materials-remix-01jx9m2dhyfn7tha54ts1jzcez.png"
                  alt="Modern pharmaceutical laboratory"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pharma-blue/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

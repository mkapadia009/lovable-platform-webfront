
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

              {/* Trust indicators */}
              {/* <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-blue-100 text-sm">Quality Rate</div>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-blue-100 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
              </div> */}
            </div>

            {/* Image */}
            <div className="relative animate-slide-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                  alt="Modern pharmaceutical laboratory"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pharma-blue/20 to-transparent"></div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="bg-pharma-green/10 p-3 rounded-full">
                    <Shield className="w-6 h-6 text-pharma-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-pharma-blue">ISO Certified</div>
                    <div className="text-pharma-grey text-sm">FDA Approved Facility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

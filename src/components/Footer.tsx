
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pharma-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
               <img src="https://i.postimg.cc/nrnrKCSs/Logo-4.png" width="150px" alt="" />
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Leading global supplier of high-quality pharmaceutical raw materials, 
              trusted by healthcare companies worldwide for over 30 years.
            </p>
            <div className="flex space-x-4">
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-blue-200 hover:text-white transition-colors">Products</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#legacy" className="text-blue-200 hover:text-white transition-colors">Our Legacy</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Sourcing & Trading </a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Distribution</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Regulatory Compliance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pharma-green mt-1" />
                <div className="text-blue-200">
                  <p>507, Kailas Plaza, Vallabh Baug Lane</p>
                  <p>Ghatkopar(E), Mumbai-400077</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pharma-green" />
                <span className="text-blue-200">22-35133948 / 022-35130492 / 9372780117 / 9967485800</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pharma-green" />
                <span className="text-blue-200">ankur@jignaenterprises.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2025 Traverse TEC Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/return-policy" className="text-blue-200 hover:text-white transition-colors">Return Policy</a>
              <a href="/return-policy" className="text-blue-200 hover:text-white transition-colors">Handling Services</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

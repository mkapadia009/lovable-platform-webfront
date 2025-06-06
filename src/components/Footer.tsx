
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
              trusted by healthcare companies worldwide for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-blue-200 hover:text-white transition-colors">Products</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#quality" className="text-blue-200 hover:text-white transition-colors">Quality</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Sourcing & Trading </a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Distribution</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Regulatory Compliance</a></li>
              {/* <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Custom Solutions</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Technical Support</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pharma-green mt-1" />
                <div className="text-blue-200">
                  <p>123 Pharmaceutical Ave</p>
                  <p>Boston, MA 02101, USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pharma-green" />
                <span className="text-blue-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pharma-green" />
                <span className="text-blue-200">info@Traverseplatform.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2024 Traverse Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

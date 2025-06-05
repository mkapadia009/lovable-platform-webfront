
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            Ready to partner with us? Our team of experts is here to help you find the right 
            pharmaceutical solutions for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-pharma-blue mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pharma-blue/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-pharma-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-blue">Phone</h4>
                    <p className="text-pharma-grey">+1 (555) 123-4567</p>
                    <p className="text-pharma-grey text-sm">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pharma-blue/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-pharma-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-blue">Email</h4>
                    <p className="text-pharma-grey">info@Traverseplatform.com</p>
                    <p className="text-pharma-grey text-sm">sales@Traverseplatform.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pharma-blue/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pharma-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-blue">Headquarters</h4>
                    <p className="text-pharma-grey">123 Pharmaceutical Ave</p>
                    <p className="text-pharma-grey">Boston, MA 02101, USA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pharma-blue/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-pharma-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-blue">Business Hours</h4>
                    <p className="text-pharma-grey">Mon - Fri: 8:00 AM - 6:00 PM EST</p>
                    <p className="text-pharma-grey">Emergency: 24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-pharma-blue to-pharma-green rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-lg transition-all duration-300 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-3" />
                  Live Chat Support
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-lg transition-all duration-300 flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-pharma-blue mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-pharma-blue font-medium mb-2">First Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-pharma-blue font-medium mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-pharma-blue font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-pharma-blue font-medium mb-2">Phone</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-pharma-blue font-medium mb-2">Company</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block text-pharma-blue font-medium mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors">
                    <option>General Inquiry</option>
                    <option>Product Quote</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Quality Assurance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-pharma-blue font-medium mb-2">Message *</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors resize-none"
                    placeholder="Please describe your requirements or inquiry in detail..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-pharma-blue hover:bg-pharma-blue-dark text-white py-4 px-8 rounded-lg font-semibold transition-colors flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-pharma-blue text-center mb-12">Global Presence</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h4 className="font-bold text-pharma-blue mb-2">North America</h4>
              <p className="text-pharma-grey text-sm">Boston, MA • Toronto, CA</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h4 className="font-bold text-pharma-blue mb-2">Europe</h4>
              <p className="text-pharma-grey text-sm">London, UK • Frankfurt, DE</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <h4 className="font-bold text-pharma-blue mb-2">Asia-Pacific</h4>
              <p className="text-pharma-grey text-sm">Singapore • Mumbai, IN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

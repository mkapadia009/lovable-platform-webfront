
import React, { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inquiryType, setInquiryType] = useState("General Inquiry");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    const fullName = `${formData.get('first_name')} ${formData.get('last_name')}`;
    const currentTime = new Date().toLocaleString();

    const templateParams = {
      name: fullName,
      email: formData.get('email'),
      message: formData.get('message'),
      phone: formData.get('phone'),
      product: formData.get('product'),
      time: currentTime,
      title: formData.get('company') ? `New inquiry from ${formData.get('company')} regarding ${inquiryType}` : `New inquiry regarding ${inquiryType}`,
    };

    emailjs
      .send(
        "service_5drorxn", // 🔁 Replace this
        "template_1scrqis", // 🔁 Replace this
        templateParams,
        "gOjsU2OJ-zOGpf2SS" // 🔁 Replace this
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            Ready to partner with us? Our team of experts is here to help you
            find the right pharmaceutical solutions for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-pharma-blue mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pharma-blue/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-pharma-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-blue">Phone</h4>
                    <p className="text-pharma-grey">022-35133948 / 022-35130492</p>
                    <p className="text-pharma-grey text-sm">
                      9372780117 / 9967485800
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pharma-blue/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-pharma-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-blue">Email</h4>
                    <p className="text-pharma-grey">
                      ankur@jignaenterprises.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pharma-blue/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pharma-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pharma-blue">
                      Headquarters
                    </h4>
                    <p className="text-pharma-grey">507, Kailas Plaza, Vallabh Baug Lane</p>
                    <p className="text-pharma-grey">Ghatkopar(E), Mumbai-400077</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-pharma-blue mb-6">
                Send Us a Message
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-pharma-blue font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-pharma-blue font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-pharma-blue font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-pharma-blue font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-pharma-blue font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block text-pharma-blue font-medium mb-2">
                    Product of Interest
                  </label>
                  <input
                    type="text"
                    name="product"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                    placeholder="e.g., Atorvastatin, Metformin, etc."
                  />
                </div>

                <div>
                  <label className="block text-pharma-blue font-medium mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiry_type"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
                  >
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-pharma-blue font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    name="message"
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
      </div>
    </section>
  );
};

export default Contact;

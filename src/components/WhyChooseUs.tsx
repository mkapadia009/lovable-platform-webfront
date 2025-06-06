import React from "react";
import { Globe, Users, Building, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16 section-fade-in">
        <h2 className="text-4xl font-bold text-pharma-blue mb-4">Vision</h2>
        <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
          To be a globally respected partner in pharmaceutical sourcing and
          distribution, enabling access to quality ingredients that support
          innovation and better health outcomes.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Content */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-pharma-blue mb-6">
              Why Choose Us
            </h3>
            <ul className="list-disc list-inside space-y-2 text-pharma-grey leading-relaxed">
              <li>30+ Years of Industry Experience</li>
              <li>Extensive Global Supplier Network</li>
              <li>Regulatory & Quality Compliance Expertise</li>
              <li>Customized Sourcing Solutions</li>
              <li>Dedicated Client Support</li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/sgCpPNcq/image27.jpg"
            alt="Modern pharmaceutical facility"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pharma-blue">25+</div>
              <div className="text-pharma-grey">Years of Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;


import React from "react";
import { Globe, Users, Building, TrendingUp } from "lucide-react";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  const stats = [
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: Users, number: "500+", label: "Team Members" },
    { icon: Building, number: "12", label: "Manufacturing Sites" },
    { icon: TrendingUp, number: "99.8%", label: "Customer Satisfaction" },
  ];

  const timeline = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Started as a small pharmaceutical trading company",
    },
    {
      year: "2005",
      title: "First Manufacturing Facility",
      description: "Opened our first GMP-certified production facility",
    },
    {
      year: "2012",
      title: "International Expansion",
      description: "Expanded operations to Europe and Asia-Pacific",
    },
    {
      year: "2018",
      title: "R&D Center Launch",
      description: "Established advanced research and development center",
    },
    {
      year: "2023",
      title: "Sustainable Operations",
      description: "Achieved carbon-neutral manufacturing processes",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">Mission</h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            To deliver excellence through ethical sourcing, regulatory
            expertise, and customer-centric solutions, while preserving the
            legacy of trust and quality.
          </p>
        </div>
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
                Our Story
              </h3>
              <p className="text-pharma-grey leading-relaxed mb-6">
                Founded in 1993 by the visionary Late Mr. Bhupendra Doshi,
                Jigna Enterprises has grown into a trusted name in the
                pharmaceutical industry. With a legacy built on integrity,
                quality, and long-standing partnerships, the company is now
                reaching new heights under the dynamic leadership of Mr. Ankur
                Doshi, representing the second generation of excellence.
              </p>

              <p className="text-pharma-grey leading-relaxed mb-6">
                For over 30 years, we have been at the forefront of sourcing,
                trading, and distributing a wide spectrum of pharmaceutical
                products, including Active Pharmaceutical Ingredients (APIs),
                excipients, enzymes, antibiotics, and botanical extracts. Our
                multi-generational commitment to quality and service continues
                to drive our growth and reputation in the industry.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://i.postimg.cc/RZF1PHfx/image1.png"
              alt="Modern pharmaceutical facility"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pharma-blue">30+</div>
                <div className="text-pharma-grey">Years of Innovation</div>
              </div>
            </div>
          </div>
        </div>
        <WhyChooseUs />
      </div>
    </section>
  );
};

export default About;

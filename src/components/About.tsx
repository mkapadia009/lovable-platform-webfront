
import React from 'react';
import { Globe, Users, Building, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: Users, number: "500+", label: "Team Members" },
    { icon: Building, number: "12", label: "Manufacturing Sites" },
    { icon: TrendingUp, number: "99.8%", label: "Customer Satisfaction" }
  ];

  const timeline = [
    { year: "1998", title: "Company Founded", description: "Started as a small pharmaceutical trading company" },
    { year: "2005", title: "First Manufacturing Facility", description: "Opened our first GMP-certified production facility" },
    { year: "2012", title: "International Expansion", description: "Expanded operations to Europe and Asia-Pacific" },
    { year: "2018", title: "R&D Center Launch", description: "Established advanced research and development center" },
    { year: "2023", title: "Sustainable Operations", description: "Achieved carbon-neutral manufacturing processes" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">
            Trusted Partner in Pharmaceutical Excellence
          </h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            For over 25 years, Lovable Platform has been at the forefront of pharmaceutical raw material supply, 
            building lasting partnerships with healthcare companies worldwide.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-pharma-blue to-pharma-green p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-12 h-12 text-white mx-auto" />
              </div>
              <div className="text-4xl font-bold text-pharma-blue mb-2">{stat.number}</div>
              <div className="text-pharma-grey font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-pharma-blue mb-6">Our Story</h3>
              <p className="text-pharma-grey leading-relaxed mb-6">
                Founded in 1998, Lovable Platform began as a vision to provide pharmaceutical companies 
                with reliable, high-quality raw materials. Today, we're a global leader in pharmaceutical 
                supply chain solutions, serving customers across six continents.
              </p>
              
              <p className="text-pharma-grey leading-relaxed mb-6">
                Our commitment to innovation, quality, and customer service has made us the preferred 
                partner for multinational pharmaceutical companies, biotech firms, and research institutions worldwide.
              </p>

              <div className="bg-pharma-green/10 p-6 rounded-xl">
                <h4 className="font-semibold text-pharma-blue mb-2">Our Mission</h4>
                <p className="text-pharma-grey">
                  To advance global health by providing pharmaceutical companies with the highest quality 
                  raw materials, expert support, and innovative solutions that enable the development 
                  of life-saving medications.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80"
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

        {/* Timeline */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-pharma-blue text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-pharma-blue/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className="bg-pharma-blue p-3 rounded-full relative z-10 hidden md:block">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 shadow-lg flex-1 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="text-pharma-green font-bold text-lg mb-2">{item.year}</div>
                        <h4 className="text-xl font-semibold text-pharma-blue mb-2">{item.title}</h4>
                        <p className="text-pharma-grey">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

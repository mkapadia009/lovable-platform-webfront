
import React from "react";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

const Legacy = () => {
  const timeline = [
    {
      year: "1993",
      title: "Company Founded",
      description: "Founded by the visionary Late Mr. Bhupendra Doshi as a pharmaceutical trading company",
    },
    {
      year: "2000",
      title: "Market Expansion",
      description: "Expanded product portfolio and established key supplier partnerships",
    },
    {
      year: "2008",
      title: "Quality Certifications",
      description: "Achieved GMP compliance and international quality certifications",
    },
    {
      year: "2015",
      title: "Second Generation Leadership",
      description: "Mr. Ankur Doshi took leadership, bringing fresh vision and innovation",
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Modernized operations with digital platforms and enhanced customer service",
    },
  ];

  const achievements = [
    { icon: Users, number: "30+", label: "Years of Excellence" },
    { icon: Award, number: "500+", label: "Satisfied Clients" },
    { icon: Globe, number: "25+", label: "Countries Served" },
    { icon: TrendingUp, number: "2000+", label: "Products Available" },
  ];

  return (
    <section id="legacy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">Our Legacy</h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            Three decades of trust, innovation, and excellence in pharmaceutical sourcing and distribution.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-pharma-blue to-pharma-green p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <achievement.icon className="w-12 h-12 text-white mx-auto" />
              </div>
              <div className="text-4xl font-bold text-pharma-blue mb-2">
                {achievement.number}
              </div>
              <div className="text-pharma-grey font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pharma-blue/20"></div>
          
          {timeline.map((item, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-pharma-blue text-white px-4 py-2 rounded-full font-bold text-sm">
                      {item.year}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-pharma-blue mb-3">{item.title}</h3>
                  <p className="text-pharma-grey leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pharma-blue rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>

        {/* Legacy Message */}
        <div className="text-center mt-16 bg-gradient-to-r from-pharma-blue/5 to-pharma-green/5 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-pharma-blue mb-6">
            Continuing the Legacy of Excellence
          </h3>
          <p className="text-xl text-pharma-grey max-w-4xl mx-auto leading-relaxed">
            From our founder's vision to today's innovation, we remain committed to the highest standards 
            of quality, integrity, and service. Our multi-generational approach combines time-tested values 
            with modern solutions to serve the evolving needs of the pharmaceutical industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legacy;

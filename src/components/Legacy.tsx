
import React from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const Legacy = () => {
  const achievements = [
    {
      icon: <Award className="w-12 h-12 text-pharma-green mb-4" />,
      title: "30+ Years",
      description: "Of excellence in pharmaceutical raw materials supply"
    },
    {
      icon: <Globe className="w-12 h-12 text-pharma-green mb-4" />,
      title: "Global Presence",
      description: "Serving clients across 50+ countries worldwide"
    },
    {
      icon: <Users className="w-12 h-12 text-pharma-green mb-4" />,
      title: "500+ Partners",
      description: "Trusted manufacturing and distribution partners"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-pharma-green mb-4" />,
      title: "Innovation",
      description: "Continuous advancement in pharmaceutical solutions"
    }
  ];

  return (
    <section id="legacy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">
            Our Legacy
          </h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            Building trust through decades of excellence in pharmaceutical raw materials supply, 
            we've established ourselves as a global leader in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center section-fade-in">
              <div className="flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-pharma-blue mb-2">
                {achievement.title}
              </h3>
              <p className="text-pharma-grey">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 section-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-pharma-blue mb-6">
              Committed to Excellence
            </h3>
            <p className="text-lg text-pharma-grey leading-relaxed mb-6">
              Our legacy is built on unwavering commitment to quality, regulatory compliance, 
              and customer satisfaction. From our humble beginnings to becoming a global supplier, 
              we have consistently delivered pharmaceutical raw materials that meet the highest standards.
            </p>
            <p className="text-lg text-pharma-grey leading-relaxed">
              Today, we continue to innovate and expand our capabilities, ensuring that 
              healthcare companies worldwide have access to the quality ingredients they need 
              to develop life-saving medications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;

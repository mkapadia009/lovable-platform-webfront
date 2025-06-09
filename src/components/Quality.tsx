import React from "react";
import {
  Shield,
  Award,
  FileCheck,
  Users,
  Microscope,
  Clock,
} from "lucide-react";

const Quality = () => {
  const certifications = [
    {
      name: "Pharmaceutical Manufacturing",
      url: "https://i.postimg.cc/qRvVZQkx/Med-icons.png",
    },
    {
      name: "Nutraceuticals",
      url: "https://i.postimg.cc/tCS5h5fH/Med-icons-1.png",
    },
    {
      name: "Biotechnology",
      url: "https://i.postimg.cc/9fKXTvPq/Med-icons-2.png",
    },
    {
      name: "Veterinary Medicine",
      url: "https://i.postimg.cc/tgZpXB0R/Med-icons-3.png",
    },
    {
      name: "Herbal & Ayurvedic Formulations",
      url: "https://i.postimg.cc/XqcnRqRw/Med-icons-4.png",
    },
  ];

  const qualityStats = [
    { number: "99.9%", label: "Product Purity", icon: Microscope },
    { number: "24/7", label: "Quality Monitoring", icon: Clock },
    { number: "100%", label: "Batch Testing", icon: FileCheck },
    { number: "0 PPM", label: "Defect Rate", icon: Shield },
  ];

  return (
    <section id="quality" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">
            Uncompromising Quality Standards
          </h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            Our commitment to quality is reflected in our world-class facilities, rigorous testing protocols, 
            and international certifications that ensure the highest standards in pharmaceutical manufacturing.
          </p>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-pharma-blue mb-6">
                Our Legacy
              </h3>
              <p className="text-pharma-grey leading-relaxed mb-6">
                With 30 years of operational excellence, we have built a
                reputation for:
              </p>

              <div className="space-y-6">
                {[
                  {
                    src: "https://i.postimg.cc/8CD3JsWJ/1.png",
                    text: "Reliability in sourcing from GMP-compliant and regulatory-approved manufacturers",
                  },
                  {
                    src: "https://i.postimg.cc/L6xwYmDN/2.png",
                    text: "Agility in responding to market demands and regulatory changes",
                  },
                  {
                    src: "https://i.postimg.cc/mD48pnVP/3.png",
                    text: "Transparency in all our business dealings",
                  },
                  {
                    src: "https://i.postimg.cc/N0q4Ln3d/4.png",
                    text: "Compliance with international quality and safety standards",
                  },
                ].map(({ src, text }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center sm:space-x-4 space-y-3 sm:space-y-0"
                  >
                    <div className="w-14 h-14 bg-pharma-green/10 rounded-lg flex items-center justify-center">
                      <img
                        src={src}
                        alt="Custom Icon"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="max-w-md px-2">
                      <h4 className="font-semibold text-pharma-blue text-sm sm:text-base">
                        {text}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://i.postimg.cc/9FsPNSQc/image19.png"
              alt="Quality control laboratory"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-pharma-green p-3 rounded-full">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-pharma-blue">25+</div>
                  <div className="text-pharma-grey">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-pharma-blue text-center mb-8">
            Industries We Serve
          </h3>
          <div className="grid md:grid-cols-5 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="bg-pharma-blue/10 p-6 rounded-xl mb-4 group-hover:bg-pharma-green/10 transition-colors">
                  <img
                    src={cert.url}
                    className="h-12 text-pharma-blue group-hover:text-pharma-green mx-auto transition-colors"
                  />
                </div>
                <h4 className="font-semibold text-pharma-blue">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Statistics */}
        {/* <div className="grid md:grid-cols-4 gap-8">
          {qualityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="bg-gradient-to-br from-pharma-blue to-pharma-green p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-pharma-blue mb-2">
                {stat.number}
              </div>
              <div className="text-pharma-grey">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Quality;

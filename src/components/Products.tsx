
import React from 'react';
import { Pill, Heart, Brain, Leaf, ShieldPlus } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: Heart,
      title: "Active Pharmaceutical Ingredients (APIs)",
      description: "High-quality active ingredients for heart and blood vessel medications.",
      image: "https://i.postimg.cc/yYQ2G7w2/image4.jpg",
      products: ["Atorvastatin", "Metoprolol", "Lisinopril", "Amlodipine"]
    },
    {
      icon: Brain,
      title: "Excipients",
      description: "Specialized compounds for central nervous system treatments.",
      image: "https://i.postimg.cc/j5HG3Pbh/image6.png",
      products: ["Gabapentin", "Sertraline", "Donepezil", "Levetiracetam"]
    },
    {
      icon: Pill,
      title: "Enzymes",
      description: "Potent antimicrobial and antiviral pharmaceutical ingredients.",
      image: "https://i.postimg.cc/tCqHfS7n/image8.jpg",
      products: ["Azithromycin", "Ciprofloxacin", "Acyclovir", "Cefixime"]
    },
    {
      icon: ShieldPlus,
      title: "Antibiotics",
      description: "Advanced compounds for cancer treatment and therapy.",
      image: "https://i.postimg.cc/d1V1JsVr/image9.jpg",
      products: ["Imatinib", "Paclitaxel", "Carboplatin", "Rituximab"]
    },
    {
      icon: Leaf,
      title: "Botanical & Natural Extracts ",
      description: "Advanced compounds for cancer treatment and therapy.",
      image: "https://i.postimg.cc/25CMt30d/image10.jpg",
      products: ["Imatinib", "Paclitaxel", "Carboplatin", "Rituximab"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">
            Premium Pharmaceutical Raw Materials
          </h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            Our extensive catalog features over 2,000 high-quality APIs and pharmaceutical intermediates, 
            all manufactured under strict GMP conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pharma-blue/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-pharma-blue mb-4 group-hover:text-pharma-green transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-pharma-grey mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* <div className="mb-6">
                  <h4 className="font-semibold text-pharma-blue mb-3">Featured Products:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-pharma-grey">
                        {product}
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* <button className="bg-pharma-blue hover:bg-pharma-green text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium group-hover:translate-x-2">
                  View Full Catalog
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="bg-gradient-to-r from-pharma-blue to-pharma-green rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our R&D team can develop custom APIs and pharmaceutical intermediates tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pharma-blue hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors font-semibold">
              Contact R&D Team
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-pharma-blue px-8 py-3 rounded-lg transition-all duration-300 font-semibold">
              Download Catalog
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Products;

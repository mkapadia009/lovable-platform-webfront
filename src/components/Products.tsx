
import React from 'react';
import { Pill, Heart, Brain, Zap } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: Heart,
      title: "Cardiovascular APIs",
      description: "High-quality active ingredients for heart and blood vessel medications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      products: ["Atorvastatin", "Metoprolol", "Lisinopril", "Amlodipine"]
    },
    {
      icon: Brain,
      title: "Neurological APIs",
      description: "Specialized compounds for central nervous system treatments.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
      products: ["Gabapentin", "Sertraline", "Donepezil", "Levetiracetam"]
    },
    {
      icon: Pill,
      title: "Anti-Infective APIs",
      description: "Potent antimicrobial and antiviral pharmaceutical ingredients.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      products: ["Azithromycin", "Ciprofloxacin", "Acyclovir", "Cefixime"]
    },
    {
      icon: Zap,
      title: "Oncology APIs",
      description: "Advanced compounds for cancer treatment and therapy.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
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

                <div className="mb-6">
                  <h4 className="font-semibold text-pharma-blue mb-3">Featured Products:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-pharma-grey">
                        {product}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-pharma-blue hover:bg-pharma-green text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium group-hover:translate-x-2">
                  View Full Catalog
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pharma-blue to-pharma-green rounded-2xl p-12 text-center text-white">
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
        </div>
      </div>
    </section>
  );
};

export default Products;

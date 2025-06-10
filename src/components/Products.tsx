
import React from 'react';
import { Pill, Heart, Brain, Leaf } from 'lucide-react';

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
      image: "https://i.ibb.co/5XnRvLgR/20250609-1109-Scattered-White-Powder-remix-01jx9k4nk7ecjt24tr22070686.png",
      products: ["Azithromycin", "Ciprofloxacin", "Acyclovir", "Cefixime"]
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
            Our Product Portfolio
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

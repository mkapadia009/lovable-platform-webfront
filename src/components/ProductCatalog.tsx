
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample product data - you can replace this with your actual 74-75 products
  const products = [
    { name: "Atorvastatin", category: "APIs", description: "Cholesterol medication", casNumber: "134523-00-5" },
    { name: "Metoprolol", category: "APIs", description: "Beta-blocker medication", casNumber: "37350-58-6" },
    { name: "Lisinopril", category: "APIs", description: "ACE inhibitor", casNumber: "83915-83-7" },
    { name: "Amlodipine", category: "APIs", description: "Calcium channel blocker", casNumber: "88150-42-9" },
    { name: "Gabapentin", category: "Excipients", description: "Anticonvulsant medication", casNumber: "60142-96-3" },
    { name: "Sertraline", category: "Excipients", description: "Antidepressant medication", casNumber: "79617-96-2" },
    { name: "Donepezil", category: "Excipients", description: "Alzheimer's medication", casNumber: "120014-06-4" },
    { name: "Levetiracetam", category: "Excipients", description: "Antiepileptic drug", casNumber: "102767-28-2" },
    { name: "Azithromycin", category: "Enzymes", description: "Antibiotic medication", casNumber: "83905-01-5" },
    { name: "Ciprofloxacin", category: "Enzymes", description: "Fluoroquinolone antibiotic", casNumber: "85721-33-1" },
    { name: "Acyclovir", category: "Enzymes", description: "Antiviral medication", casNumber: "59277-89-3" },
    { name: "Cefixime", category: "Enzymes", description: "Cephalosporin antibiotic", casNumber: "79350-37-1" },
    { name: "Curcumin Extract", category: "Botanical", description: "Natural anti-inflammatory", casNumber: "458-37-7" },
    { name: "Green Tea Extract", category: "Botanical", description: "Antioxidant compound", casNumber: "84650-60-2" },
    { name: "Ginkgo Biloba Extract", category: "Botanical", description: "Cognitive support", casNumber: "90045-36-6" },
    { name: "Ashwagandha Extract", category: "Botanical", description: "Adaptogenic herb", casNumber: "90147-43-6" },
    // Add more products to reach 74-75 total
    { name: "Paracetamol", category: "APIs", description: "Pain reliever", casNumber: "103-90-2" },
    { name: "Ibuprofen", category: "APIs", description: "Anti-inflammatory", casNumber: "15687-27-1" },
    { name: "Aspirin", category: "APIs", description: "Blood thinner", casNumber: "50-78-2" },
    { name: "Omeprazole", category: "APIs", description: "Proton pump inhibitor", casNumber: "73590-58-6" },
    { name: "Losartan", category: "APIs", description: "ARB medication", casNumber: "114798-26-4" },
    { name: "Simvastatin", category: "APIs", description: "Statin medication", casNumber: "79902-63-9" },
    { name: "Metformin", category: "APIs", description: "Diabetes medication", casNumber: "657-24-9" },
    { name: "Hydrochlorothiazide", category: "APIs", description: "Diuretic medication", casNumber: "58-93-5" },
    { name: "Warfarin", category: "APIs", description: "Anticoagulant", casNumber: "81-81-2" },
    { name: "Digoxin", category: "APIs", description: "Heart medication", casNumber: "20830-75-5" },
  ];

  const categories = ['All', 'APIs', 'Excipients', 'Enzymes', 'Botanical'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.casNumber.includes(searchTerm);
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="catalog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl font-bold text-pharma-blue mb-4">
            Complete Product Catalog
          </h2>
          <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
            Browse our comprehensive collection of pharmaceutical raw materials and active ingredients.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pharma-grey w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, descriptions, or CAS numbers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-pharma-grey w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-pharma-grey">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-pharma-blue/5">
                  <TableHead className="font-semibold text-pharma-blue">Product Name</TableHead>
                  <TableHead className="font-semibold text-pharma-blue">Category</TableHead>
                  <TableHead className="font-semibold text-pharma-blue">Description</TableHead>
                  <TableHead className="font-semibold text-pharma-blue">CAS Number</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product, index) => (
                  <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                    <TableCell className="font-medium text-pharma-blue">{product.name}</TableCell>
                    <TableCell>
                      <span className="bg-pharma-green/10 text-pharma-green px-2 py-1 rounded-full text-sm">
                        {product.category}
                      </span>
                    </TableCell>
                    <TableCell className="text-pharma-grey">{product.description}</TableCell>
                    <TableCell className="font-mono text-sm text-pharma-grey">{product.casNumber}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-pharma-grey text-lg">No products found matching your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;


import React, { useState } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Complete product data - 77 products
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
    { name: "Fluoxetine", category: "APIs", description: "Antidepressant", casNumber: "54910-89-3" },
    { name: "Alprazolam", category: "APIs", description: "Anti-anxiety medication", casNumber: "28981-97-7" },
    { name: "Lorazepam", category: "APIs", description: "Sedative medication", casNumber: "846-49-1" },
    { name: "Clonazepam", category: "APIs", description: "Anticonvulsant", casNumber: "1622-61-3" },
    { name: "Diazepam", category: "APIs", description: "Muscle relaxant", casNumber: "439-14-5" },
    { name: "Tramadol", category: "APIs", description: "Pain medication", casNumber: "27203-92-5" },
    { name: "Codeine", category: "APIs", description: "Opioid analgesic", casNumber: "76-57-3" },
    { name: "Morphine", category: "APIs", description: "Strong pain reliever", casNumber: "57-27-2" },
    { name: "Fentanyl", category: "APIs", description: "Synthetic opioid", casNumber: "437-38-7" },
    { name: "Oxycodone", category: "APIs", description: "Opioid pain medication", casNumber: "76-42-6" },
    { name: "Hydrocodone", category: "APIs", description: "Semi-synthetic opioid", casNumber: "125-29-1" },
    { name: "Prednisone", category: "APIs", description: "Corticosteroid", casNumber: "53-03-2" },
    { name: "Prednisolone", category: "APIs", description: "Anti-inflammatory steroid", casNumber: "50-24-8" },
    { name: "Dexamethasone", category: "APIs", description: "Potent corticosteroid", casNumber: "50-02-2" },
    { name: "Hydrocortisone", category: "APIs", description: "Natural corticosteroid", casNumber: "50-23-7" },
    { name: "Amoxicillin", category: "APIs", description: "Penicillin antibiotic", casNumber: "26787-78-0" },
    { name: "Ampicillin", category: "APIs", description: "Beta-lactam antibiotic", casNumber: "69-53-4" },
    { name: "Cephalexin", category: "APIs", description: "First-generation cephalosporin", casNumber: "15686-71-2" },
    { name: "Doxycycline", category: "APIs", description: "Tetracycline antibiotic", casNumber: "564-25-0" },
    { name: "Erythromycin", category: "APIs", description: "Macrolide antibiotic", casNumber: "114-07-8" },
    { name: "Clarithromycin", category: "APIs", description: "Macrolide antibiotic", casNumber: "81103-11-9" },
    { name: "Levofloxacin", category: "APIs", description: "Fluoroquinolone antibiotic", casNumber: "100986-85-4" },
    { name: "Moxifloxacin", category: "APIs", description: "Fourth-generation fluoroquinolone", casNumber: "151096-09-2" },
    { name: "Vancomycin", category: "APIs", description: "Glycopeptide antibiotic", casNumber: "1404-90-6" },
    { name: "Lincomycin", category: "APIs", description: "Lincosamide antibiotic", casNumber: "154-21-2" },
    { name: "Clindamycin", category: "APIs", description: "Lincosamide antibiotic", casNumber: "18323-44-9" },
    { name: "Metronidazole", category: "APIs", description: "Antiprotozoal medication", casNumber: "443-48-1" },
    { name: "Fluconazole", category: "APIs", description: "Antifungal medication", casNumber: "86386-73-4" },
    { name: "Itraconazole", category: "APIs", description: "Triazole antifungal", casNumber: "84625-61-6" },
    { name: "Ketoconazole", category: "APIs", description: "Imidazole antifungal", casNumber: "65277-42-1" },
    { name: "Nystatin", category: "APIs", description: "Polyene antifungal", casNumber: "1400-61-9" },
    { name: "Amphotericin B", category: "APIs", description: "Polyene antifungal", casNumber: "1397-89-3" },
    { name: "Caspofungin", category: "APIs", description: "Echinocandin antifungal", casNumber: "162808-62-0" },
    { name: "Oseltamivir", category: "APIs", description: "Neuraminidase inhibitor", casNumber: "196618-13-0" },
    { name: "Zanamivir", category: "APIs", description: "Neuraminidase inhibitor", casNumber: "139110-80-8" },
    { name: "Ribavirin", category: "APIs", description: "Nucleoside antiviral", casNumber: "36791-04-5" },
    { name: "Zidovudine", category: "APIs", description: "Nucleoside reverse transcriptase inhibitor", casNumber: "30516-87-1" },
    { name: "Lamivudine", category: "APIs", description: "Nucleoside reverse transcriptase inhibitor", casNumber: "134678-17-4" },
    { name: "Efavirenz", category: "APIs", description: "Non-nucleoside reverse transcriptase inhibitor", casNumber: "154598-52-4" },
    { name: "Ritonavir", category: "APIs", description: "Protease inhibitor", casNumber: "155213-67-5" },
    { name: "Saquinavir", category: "APIs", description: "Protease inhibitor", casNumber: "127779-20-8" },
    { name: "Indinavir", category: "APIs", description: "Protease inhibitor", casNumber: "150378-17-9" },
    { name: "Nelfinavir", category: "APIs", description: "Protease inhibitor", casNumber: "159989-64-7" },
    { name: "Lopinavir", category: "APIs", description: "Protease inhibitor", casNumber: "192725-17-0" },
    { name: "Atazanavir", category: "APIs", description: "Protease inhibitor", casNumber: "198904-31-3" },
    { name: "Raltegravir", category: "APIs", description: "Integrase inhibitor", casNumber: "518048-05-0" },
    { name: "Dolutegravir", category: "APIs", description: "Integrase inhibitor", casNumber: "1051375-16-6" },
    { name: "Tenofovir", category: "APIs", description: "Nucleotide reverse transcriptase inhibitor", casNumber: "147127-20-6" },
    { name: "Emtricitabine", category: "APIs", description: "Nucleoside reverse transcriptase inhibitor", casNumber: "143491-57-0" },
    { name: "Maraviroc", category: "APIs", description: "CCR5 antagonist", casNumber: "376348-65-1" },
    { name: "Enfuvirtide", category: "APIs", description: "Fusion inhibitor", casNumber: "159519-65-0" },
    { name: "Celecoxib", category: "APIs", description: "COX-2 inhibitor", casNumber: "169590-42-5" },
    { name: "Meloxicam", category: "APIs", description: "NSAID medication", casNumber: "71125-38-7" }
  ];

  const categories = ['All', 'APIs', 'Excipients', 'Enzymes', 'Botanical'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.casNumber.includes(searchTerm);
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when search or filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

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
        <div className="mb-6 flex justify-between items-center">
          <p className="text-pharma-grey">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
          </p>
          <p className="text-pharma-grey">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
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
                {currentProducts.map((product, index) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center px-3 py-2 text-sm font-medium text-pharma-grey bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>
            
            {generatePageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 text-sm font-medium rounded-lg ${
                  currentPage === page
                    ? 'bg-pharma-blue text-white'
                    : 'text-pharma-grey bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center px-3 py-2 text-sm font-medium text-pharma-grey bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}

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

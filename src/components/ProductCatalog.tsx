import React, { useState } from "react";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Complete product data - 77 products
  const products = [
    { name: "Atorvastatin" },
    { name: "Metoprolol" },
    { name: "Lisinopril" },
    { name: "Amlodipine" },
    { name: "Gabapentin" },
    { name: "Sertraline" },
    { name: "Donepezil" },
    { name: "Levetiracetam" },
    { name: "Azithromycin" },
    { name: "Ciprofloxacin" },
    { name: "Acyclovir" },
    { name: "Cefixime" },
    { name: "Curcumin Extract" },
    { name: "Green Tea Extract" },
    { name: "Ginkgo Biloba Extract" },
    { name: "Ashwagandha Extract" },
    { name: "Paracetamol" },
    { name: "Ibuprofen" },
    { name: "Aspirin" },
    { name: "Omeprazole" },
    { name: "Losartan" },
    { name: "Simvastatin" },
    { name: "Metformin" },
    { name: "Hydrochlorothiazide" },
    { name: "Warfarin" },
    { name: "Digoxin" },
    { name: "Fluoxetine" },
    { name: "Alprazolam" },
    { name: "Lorazepam" },
    { name: "Clonazepam" },
    { name: "Diazepam" },
    { name: "Tramadol" },
    { name: "Codeine" },
    { name: "Morphine" },
    { name: "Fentanyl" },
    { name: "Oxycodone" },
    { name: "Hydrocodone" },
    { name: "Prednisone" },
    { name: "Prednisolone" },
    { name: "Dexamethasone" },
    { name: "Hydrocortisone" },
    { name: "Amoxicillin" },
    { name: "Ampicillin" },
    { name: "Cephalexin" },
    { name: "Doxycycline" },
    { name: "Erythromycin" },
    { name: "Clarithromycin" },
    { name: "Levofloxacin" },
    { name: "Moxifloxacin" },
    { name: "Vancomycin" },
    { name: "Lincomycin" },
    { name: "Clindamycin" },
    { name: "Metronidazole" },
    { name: "Fluconazole" },
    { name: "Itraconazole" },
    { name: "Ketoconazole" },
    { name: "Nystatin" },
    { name: "Amphotericin B" },
    { name: "Caspofungin" },
    { name: "Oseltamivir" },
    { name: "Zanamivir" },
    { name: "Ribavirin" },
    { name: "Zidovudine" },
    { name: "Lamivudine" },
    { name: "Efavirenz" },
    { name: "Ritonavir" },
    { name: "Saquinavir" },
    { name: "Indinavir" },
    { name: "Nelfinavir" },
    { name: "Lopinavir" },
    { name: "Atazanavir" },
    { name: "Raltegravir" },
    { name: "Dolutegravir" },
    { name: "Tenofovir" },
    { name: "Emtricitabine" },
    { name: "Maraviroc" },
    { name: "Enfuvirtide" },
    { name: "Celecoxib" },
    { name: "Meloxicam" },
  ];

  const categories = ["All", "APIs", "Excipients", "Enzymes", "Botanical"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "All"
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
    <></>
    // <section id="catalog" className="py-20 bg-gray-50">
    //   <div className="container mx-auto px-4">
    //     <div className="text-center mb-16 section-fade-in">
    //       <h2 className="text-4xl font-bold text-pharma-blue mb-4">
    //         Complete Product Catalog
    //       </h2>
    //       <p className="text-xl text-pharma-grey max-w-3xl mx-auto">
    //         Browse our comprehensive collection of pharmaceutical raw materials
    //         and active ingredients.
    //       </p>
    //     </div>

    //     {/* Search and Filter Controls */}
    //     <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
    //       <div className="flex flex-col md:flex-row gap-4 items-center">
    //         <div className="relative flex-1">
    //           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pharma-grey w-5 h-5" />
    //           <input
    //             type="text"
    //             placeholder="Search products, descriptions, or CAS numbers..."
    //             value={searchTerm}
    //             onChange={(e) => setSearchTerm(e.target.value)}
    //             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
    //           />
    //         </div>
    //         {/* <div className="flex items-center space-x-2">
    //           <Filter className="text-pharma-grey w-5 h-5" />
    //           <select
    //             value={selectedCategory}
    //             onChange={(e) => setSelectedCategory(e.target.value)}
    //             className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-pharma-blue transition-colors"
    //           >
    //             {categories.map((category) => (
    //               <option key={category} value={category}>
    //                 {category}
    //               </option>
    //             ))}
    //           </select>
    //         </div> */}
    //       </div>
    //     </div>

    //     {/* Results Count */}
    //     <div className="mb-6 flex justify-between items-center">
    //       <p className="text-pharma-grey">
    //         Showing {startIndex + 1}-
    //         {Math.min(endIndex, filteredProducts.length)} of{" "}
    //         {filteredProducts.length} products
    //       </p>
    //       <p className="text-pharma-grey">
    //         Page {currentPage} of {totalPages}
    //       </p>
    //     </div>

    //     {/* Products Table */}
    //     <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
    //       <div className="overflow-x-auto">
    //         <Table>
    //           <TableHeader>
    //             <TableRow className="bg-pharma-blue/5">
    //               <TableHead className="font-semibold text-pharma-blue">
    //                 Product Name
    //               </TableHead>
    //               {/* <TableHead className="font-semibold text-pharma-blue">
    //                 Category
    //               </TableHead>
    //               <TableHead className="font-semibold text-pharma-blue">
    //                 Description
    //               </TableHead>
    //               <TableHead className="font-semibold text-pharma-blue">
    //                 CAS Number
    //               </TableHead> */}
    //             </TableRow>
    //           </TableHeader>
    //           <TableBody>
    //             {currentProducts.map((product, index) => (
    //               <TableRow
    //                 key={index}
    //                 className="hover:bg-gray-50 transition-colors"
    //               >
    //                 <TableCell className="font-medium text-pharma-blue">
    //                   {product.name}
    //                 </TableCell>
    //                 {/* <TableCell>
    //                   <span className="bg-pharma-green/10 text-pharma-green px-2 py-1 rounded-full text-sm">
    //                     {product.category}
    //                   </span>
    //                 </TableCell>
    //                 <TableCell className="text-pharma-grey">
    //                   {product.description}
    //                 </TableCell>
    //                 <TableCell className="font-mono text-sm text-pharma-grey">
    //                   {product.casNumber}
    //                 </TableCell> */}
    //               </TableRow>
    //             ))}
    //           </TableBody>
    //         </Table>
    //       </div>
    //     </div>

    //     {/* Pagination */}
    //     {totalPages > 1 && (
    //       <div className="flex justify-center items-center space-x-2">
    //         <button
    //           onClick={() => handlePageChange(currentPage - 1)}
    //           disabled={currentPage === 1}
    //           className="flex items-center px-3 py-2 text-sm font-medium text-pharma-grey bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    //         >
    //           <ChevronLeft className="w-4 h-4 mr-1" />
    //           Previous
    //         </button>

    //         {generatePageNumbers().map((page) => (
    //           <button
    //             key={page}
    //             onClick={() => handlePageChange(page)}
    //             className={`px-3 py-2 text-sm font-medium rounded-lg ${
    //               currentPage === page
    //                 ? "bg-pharma-blue text-white"
    //                 : "text-pharma-grey bg-white border border-gray-300 hover:bg-gray-50"
    //             }`}
    //           >
    //             {page}
    //           </button>
    //         ))}

    //         <button
    //           onClick={() => handlePageChange(currentPage + 1)}
    //           disabled={currentPage === totalPages}
    //           className="flex items-center px-3 py-2 text-sm font-medium text-pharma-grey bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    //         >
    //           Next
    //           <ChevronRight className="w-4 h-4 ml-1" />
    //         </button>
    //       </div>
    //     )}

    //     {filteredProducts.length === 0 && (
    //       <div className="text-center py-12">
    //         <p className="text-pharma-grey text-lg">
    //           No products found matching your search criteria.
    //         </p>
    //       </div>
    //     )}
    //   </div>
    // </section>
  );
};

export default ProductCatalog;

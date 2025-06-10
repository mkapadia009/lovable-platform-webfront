
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Package, Truck, CheckCircle, AlertTriangle } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-pharma-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Return Policy & Handling Services
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Comprehensive procedures for returns and handling services ensuring compliance with quality and regulatory standards
            </p>
          </div>
        </div>
      </section>

      {/* Returns Policy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Package className="w-8 h-8 text-pharma-green mr-4" />
                <h2 className="text-3xl font-bold text-pharma-blue">Returns Policy and Procedure</h2>
              </div>
              
              <div className="space-y-8">
                {/* Purpose */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-pharma-blue mb-3">1. Purpose</h3>
                  <p className="text-pharma-grey">
                    To establish a standardized process for handling returned pharmaceutical products to ensure compliance with quality and regulatory standards.
                  </p>
                </div>

                {/* Scope */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-pharma-blue mb-3">2. Scope</h3>
                  <p className="text-pharma-grey">
                    This SOP applies to all pharmaceutical products returned by customers due to quality issues, delivery errors, or other valid reasons.
                  </p>
                </div>

                {/* Procedure */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-pharma-blue mb-4">3. Procedure</h3>
                  
                  <div className="space-y-6">
                    {/* A. Initiation of Return */}
                    <div>
                      <h4 className="text-lg font-medium text-pharma-blue mb-3 flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        A. Initiation of Return
                      </h4>
                      <ul className="space-y-2 ml-6">
                        <li className="text-pharma-grey">
                          <strong>Customers must notify the firm via phone, email, or return request form, providing:</strong>
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Product name</li>
                            <li>• Batch number</li>
                            <li>• Quantity</li>
                            <li>• Reason for return</li>
                            <li>• Invoice or delivery note reference</li>
                          </ul>
                        </li>
                        <li className="text-pharma-grey">
                          Customer Service logs the return request in the Return Logbook.
                        </li>
                      </ul>
                    </div>

                    {/* B. Evaluation and Approval */}
                    <div>
                      <h4 className="text-lg font-medium text-pharma-blue mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        B. Evaluation and Approval
                      </h4>
                      <ul className="space-y-2 ml-6">
                        <li className="text-pharma-grey">
                          <strong>QA evaluates the return based on:</strong>
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Time elapsed since dispatch</li>
                            <li>• Reason for return (e.g., temperature excursion, damage, mis delivery)</li>
                            <li>• Product condition (e.g., intact tamper-evident seals, proper storage)</li>
                          </ul>
                        </li>
                        <li className="text-pharma-grey">
                          If acceptable, QA issues a Return Authorization.
                        </li>
                      </ul>
                    </div>

                    {/* C. Receipt and Inspection */}
                    <div>
                      <h4 className="text-lg font-medium text-pharma-blue mb-3 flex items-center">
                        <Package className="w-5 h-5 mr-2" />
                        C. Receipt and Inspection
                      </h4>
                      <ul className="space-y-2 ml-6">
                        <li className="text-pharma-grey">
                          Returned products are received in the Quarantine Area.
                        </li>
                        <li className="text-pharma-grey">
                          <strong>Warehouse staff conducts a visual inspection:</strong>
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Label and packaging condition</li>
                            <li>• Seal integrity</li>
                            <li>• Temperature history (if applicable)</li>
                          </ul>
                        </li>
                        <li className="text-pharma-grey">
                          <strong>QA determines the final disposition:</strong>
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Restocking (if compliant)</li>
                            <li>• Destruction (if quality is compromised)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* D. Documentation */}
                    <div>
                      <h4 className="text-lg font-medium text-pharma-blue mb-3 flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        D. Documentation
                      </h4>
                      <ul className="space-y-2 ml-6">
                        <li className="text-pharma-grey">
                          <strong>Maintain the following records:</strong>
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Return Form</li>
                            <li>• QA Evaluation Report</li>
                            <li>• Final Disposition Record</li>
                            <li>• Inventory Adjustment Entry</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage and Transportation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Truck className="w-8 h-8 text-pharma-green mr-4" />
                <h2 className="text-3xl font-bold text-pharma-blue">SOP for Storage and Transportation</h2>
              </div>
              
              <div className="space-y-8">
                {/* Purpose */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-pharma-blue mb-3">1. Purpose</h3>
                  <p className="text-pharma-grey">
                    To ensure the quality, safety, and efficacy of pharmaceutical materials and products are maintained during storage and transportation, in compliance with GDP/GMP standards.
                  </p>
                </div>

                {/* Scope */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-pharma-blue mb-3">2. Scope</h3>
                  <p className="text-pharma-grey">
                    Applicable to all raw materials, intermediates, and finished pharmaceutical products handled by the company.
                  </p>
                </div>

                {/* Storage Procedure */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-pharma-blue mb-4">3. Storage Procedure</h3>
                  
                  <div className="space-y-6">
                    {/* A. Receiving Materials */}
                    <div>
                      <h4 className="text-lg font-medium text-pharma-blue mb-3 flex items-center">
                        <Package className="w-5 h-5 mr-2" />
                        A. Receiving Materials
                      </h4>
                      <ul className="space-y-2 ml-6">
                        <li className="text-pharma-grey">
                          <strong>Inspect incoming goods for:</strong>
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Packaging integrity</li>
                            <li>• Correct labeling</li>
                            <li>• Accompanying documentation (CoA, PO, Delivery Note)</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* B. Storage Conditions */}
                    <div>
                      <h4 className="text-lg font-medium text-pharma-blue mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        B. Storage Conditions
                      </h4>
                      <ul className="space-y-2 ml-6">
                        <li className="text-pharma-grey">
                          <strong>Store materials as per:</strong>
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Manufacturer's recommendations</li>
                            <li>• Internal specifications (e.g., temperature, humidity)</li>
                          </ul>
                        </li>
                        <li className="text-pharma-grey">
                          Clearly label storage areas and maintain environmental monitoring logs.
                        </li>
                      </ul>
                    </div>

                    {/* C. Warehouse Responsibilities */}
                    <div>
                      <h4 className="text-lg font-medium text-pharma-blue mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        C. Warehouse Responsibilities
                      </h4>
                      <ul className="space-y-2 ml-6">
                        <li className="text-pharma-grey">
                          Ensure proper segregation of materials (e.g., APIs, excipients, quarantined stock).
                        </li>
                        <li className="text-pharma-grey">
                          Maintain accurate inventory records and conduct periodic audits.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Transportation Procedure */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-pharma-blue mb-4">4. Transportation Procedure</h3>
                  
                  <div className="space-y-6">
                    {/* A. Preparation for Dispatch */}
                    <div>
                      <h4 className="text-lg font-medium text-pharma-blue mb-3 flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        A. Preparation for Dispatch
                      </h4>
                      <ul className="space-y-2 ml-6">
                        <li className="text-pharma-grey">
                          <strong>Ensure all shipments include:</strong>
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Invoice</li>
                            <li>• Delivery Note</li>
                            <li>• Certificate of Analysis (CoA)</li>
                            <li>• Material Safety Data Sheet (MSDS), if applicable</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    {/* B. Transportation Conditions */}
                    <div>
                      <h4 className="text-lg font-medium text-pharma-blue mb-3 flex items-center">
                        <Truck className="w-5 h-5 mr-2" />
                        B. Transportation Conditions
                      </h4>
                      <ul className="space-y-2 ml-6">
                        <li className="text-pharma-grey">
                          Use validated transport methods to maintain required conditions (e.g., cold chain).
                        </li>
                        <li className="text-pharma-grey">
                          Monitor and record temperature during transit where necessary.
                        </li>
                        <li className="text-pharma-grey">
                          Ensure vehicles are clean, secure, and suitable for pharmaceutical transport.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReturnPolicy;

import React, { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home page with the section
      navigate(`/#${sectionId}`);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleContactNavigation = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Top contact bar */}
      <div className="bg-pharma-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 9372780117</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>ankur@jignaenterprises.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Global Pharmaceutical Raw Materials Supplier</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div
            className="text-2xl lg:text-3xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="https://i.postimg.cc/T3zsHmV4/Logo-2.png"
              width="150px"
              alt=""
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("home")}
              className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium"
            >
              Home
            </button>
            {location.pathname !== "/return-policy" && (
              <>
                <button
                  onClick={() => handleNavigation("products")}
                  className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium"
                >
                  Products
                </button>
                <button
                  onClick={() => handleNavigation("services")}
                  className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavigation("legacy")}
                  className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium"
                >
                  Our Legacy
                </button>
                <button
                  onClick={() => handleNavigation("about")}
                  className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium"
                >
                  About
                </button>
                <button
                  onClick={handleContactNavigation}
                  className="bg-pharma-green hover:bg-pharma-green-dark text-white px-6 py-2 rounded-lg transition-colors font-medium"
                >
                  Contact Us
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-pharma-grey hover:text-pharma-blue"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation("home")}
                className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("products")}
                className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium text-left"
              >
                Products
              </button>
              <button
                onClick={() => handleNavigation("services")}
                className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("legacy")}
                className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium text-left"
              >
                Our Legacy
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={handleContactNavigation}
                className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium text-left"
              >
                Contact
              </button>
              <button
                onClick={handleContactNavigation}
                className="bg-pharma-green hover:bg-pharma-green-dark text-white px-6 py-2 rounded-lg transition-colors font-medium w-fit"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

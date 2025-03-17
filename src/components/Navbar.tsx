
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold tracking-tight text-truffle-dark">
              Trufex<span className="text-truffle-gold">MX</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link text-truffle-dark font-medium hover:text-truffle-gold transition-colors">Inicio</Link>
          <Link to="/productos" className="nav-link text-truffle-dark font-medium hover:text-truffle-gold transition-colors">Productos</Link>
          <Link to="/educacion" className="nav-link text-truffle-dark font-medium hover:text-truffle-gold transition-colors">Aprende</Link>
          <Link to="/about" className="nav-link text-truffle-dark font-medium hover:text-truffle-gold transition-colors">Sobre Nosotros</Link>
          <Link to="/contacto" className="nav-link text-truffle-dark font-medium hover:text-truffle-gold transition-colors">Contacto</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-truffle-dark hover:text-truffle-gold hover:bg-truffle-cream">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-truffle-dark hover:text-truffle-gold hover:bg-truffle-cream">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="bg-truffle-gold hover:bg-truffle-gold/90 text-white">
            Comprar Ahora
          </Button>
        </div>

        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-truffle-dark hover:text-truffle-gold transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-8">
          <Link 
            to="/" 
            className="text-xl font-medium text-truffle-dark hover:text-truffle-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            to="/productos" 
            className="text-xl font-medium text-truffle-dark hover:text-truffle-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Productos
          </Link>
          <Link 
            to="/educacion" 
            className="text-xl font-medium text-truffle-dark hover:text-truffle-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Aprende
          </Link>
          <Link 
            to="/about" 
            className="text-xl font-medium text-truffle-dark hover:text-truffle-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre Nosotros
          </Link>
          <Link 
            to="/contacto" 
            className="text-xl font-medium text-truffle-dark hover:text-truffle-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contacto
          </Link>
          
          <div className="pt-6 flex flex-col space-y-4">
            <Button className="bg-truffle-gold hover:bg-truffle-gold/90 text-white w-full">
              Comprar Ahora
            </Button>
            <div className="flex justify-center space-x-6 pt-4">
              <Button variant="ghost" size="icon" className="text-truffle-dark hover:text-truffle-gold">
                <Globe className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-truffle-dark hover:text-truffle-gold">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

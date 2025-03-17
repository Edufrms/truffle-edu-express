
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-truffle-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">Trufex<span className="text-truffle-gold">MX</span></h3>
            <p className="text-gray-300 max-w-xs">
              Importamos y distribuimos la más fina selección de trufas y productos derivados, trayendo la excelencia culinaria europea a México.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-truffle-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-truffle-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-truffle-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-truffle-gold transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-300 hover:text-truffle-gold transition-colors">Productos</Link>
              </li>
              <li>
                <Link to="/educacion" className="text-gray-300 hover:text-truffle-gold transition-colors">Aprende</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-truffle-gold transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-truffle-gold transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg">Productos Destacados</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/productos/trufas-frescas" className="text-gray-300 hover:text-truffle-gold transition-colors">Trufas Frescas</Link>
              </li>
              <li>
                <Link to="/productos/aceite-de-trufa" className="text-gray-300 hover:text-truffle-gold transition-colors">Aceite de Trufa</Link>
              </li>
              <li>
                <Link to="/productos/salsa-de-trufa" className="text-gray-300 hover:text-truffle-gold transition-colors">Salsa de Trufa</Link>
              </li>
              <li>
                <Link to="/productos/mantequilla-de-trufa" className="text-gray-300 hover:text-truffle-gold transition-colors">Mantequilla de Trufa</Link>
              </li>
              <li>
                <Link to="/productos/sal-de-trufa" className="text-gray-300 hover:text-truffle-gold transition-colors">Sal de Trufa</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-truffle-gold shrink-0 mt-0.5" />
                <span className="text-gray-300">Av. Reforma 222, Col. Juárez, CDMX, México</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-truffle-gold shrink-0" />
                <span className="text-gray-300">+52 55 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-truffle-gold shrink-0" />
                <span className="text-gray-300">info@trufexmx.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TrufexMX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

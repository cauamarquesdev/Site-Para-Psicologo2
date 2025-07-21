import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>São Paulo, SP</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>CRP 06/123456 - Atendimento Presencial e Online</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-emerald-600">
                Dra. Ana Paula Santos
              </div>
              <div className="ml-2 text-sm text-gray-600 hidden sm:block">
                Psicóloga Clínica
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                Áreas de Atuação
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                Contato
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="hidden md:inline-flex bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-200"
              >
                Agendar Consulta
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  Áreas de Atuação
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  Depoimentos
                </button>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  Blog
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  Contato
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-200 w-fit"
                >
                  Agendar Consulta
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
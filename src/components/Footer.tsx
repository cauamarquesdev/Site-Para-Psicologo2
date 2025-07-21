import React from 'react';
import { Heart, Shield, Users, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Informações da Psicóloga */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-white">
                Dra. Ana Paula Santos
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Psicóloga clínica especializada em Terapia Cognitivo-Comportamental, 
              oferecendo um espaço seguro e acolhedor para sua jornada de autoconhecimento 
              e bem-estar emocional.
            </p>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="text-emerald-400" size={20} />
                <span className="text-sm text-gray-400">CRP 06/123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-amber-400" size={20} />
                <span className="text-sm text-gray-400">8+ Anos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-rose-400" size={20} />
                <span className="text-sm text-gray-400">500+ Atendimentos</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-emerald-600 p-3 rounded-full hover:bg-emerald-700 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-emerald-600 p-3 rounded-full hover:bg-emerald-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-emerald-600 p-3 rounded-full hover:bg-emerald-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="text-emerald-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">(11) 99999-9999</p>
                  <p className="text-gray-500 text-sm">WhatsApp disponível</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-orange-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">contato@drapaulapsicologa.com.br</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-amber-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Vila Madalena</p>
                  <p className="text-gray-500 text-sm">São Paulo - SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Seção de Avisos Importantes */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-amber-900 bg-opacity-30 border border-amber-600 rounded-lg p-6 mb-8">
            <h4 className="text-amber-400 font-semibold mb-2 flex items-center">
              <Shield className="mr-2" size={20} />
              Aviso Importante
            </h4>
            <p className="text-amber-100 text-sm leading-relaxed">
              <strong>Este site não oferece atendimento de emergência.</strong> Em casos de crise ou ideação suicida, 
              procure imediatamente o CVV (Centro de Valorização da Vida) pelo telefone 188 (gratuito, 24h) 
              ou dirija-se ao pronto-socorro mais próximo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-gray-300 font-semibold mb-3">Ética e Sigilo Profissional</h4>
              <p className="text-gray-400 text-sm">
                Todos os atendimentos seguem rigorosamente o Código de Ética Profissional 
                do Psicólogo e as diretrizes do Conselho Federal de Psicologia (CFP).
              </p>
            </div>
            <div>
              <h4 className="text-gray-300 font-semibold mb-3">Atendimento Online</h4>
              <p className="text-gray-400 text-sm">
                Sessões online realizadas em plataforma segura e criptografada, 
                em conformidade com a Resolução CFP nº 11/2018.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dra. Ana Paula Santos - Psicóloga. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desenvolvido com ❤️ para promover saúde mental e bem-estar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
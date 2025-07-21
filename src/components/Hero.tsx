import React from 'react';
import { Calendar, Shield, Heart, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Seu espaço seguro para
              <span className="block text-emerald-600 mt-2">cuidar da mente</span>
            </h1>
            
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Psicoterapia com acolhimento e profissionalismo. 
              Aqui você encontra um ambiente seguro para sua jornada de autoconhecimento e bem-estar emocional.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Calendar className="inline-block mr-2" size={20} />
                Agendar Consulta
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200"
              >
                Conheça Meu Trabalho
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-emerald-100 p-3 rounded-full mb-2">
                  <Shield className="text-emerald-600" size={24} />
                </div>
                <span className="text-sm font-semibold text-gray-700">Sigilo Profissional</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-3 rounded-full mb-2">
                  <Heart className="text-orange-600" size={24} />
                </div>
                <span className="text-sm font-semibold text-gray-700">Atendimento Humanizado</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-amber-100 p-3 rounded-full mb-2">
                  <Users className="text-amber-600" size={24} />
                </div>
                <span className="text-sm font-semibold text-gray-700">CRP 06/123456</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Consultório de psicologia acolhedor"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-emerald-200 to-orange-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-r from-orange-50 to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero;
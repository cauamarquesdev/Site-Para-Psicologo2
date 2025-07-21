import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Dra. Ana Paula Santos - Psicóloga"
              className="rounded-2xl shadow-lg w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm">Anos de experiência</div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <span className="text-emerald-600 font-semibold text-lg">Sobre a Psicóloga</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                Dra. Ana Paula Santos
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Psicóloga clínica com mais de 8 anos de experiência no atendimento de adolescentes e adultos. 
                Especializada em Terapia Cognitivo-Comportamental (TCC) e Psicologia Positiva, oferece um 
                ambiente seguro e acolhedor para sua jornada de autoconhecimento.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Acredito que cada pessoa possui recursos internos únicos para superar desafios e alcançar 
                bem-estar emocional. Minha abordagem integra técnicas baseadas em evidências científicas 
                com um olhar humanizado e empático.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <GraduationCap className="text-emerald-600 mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Formação</h3>
                <p className="text-gray-600 text-sm">
                  Graduação em Psicologia pela USP<br/>
                  Especialização em TCC
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <Award className="text-orange-600 mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Certificações</h3>
                <p className="text-gray-600 text-sm">
                  CRP 06/123456<br/>
                  Certificada em TCC
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <BookOpen className="text-amber-600 mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Abordagens</h3>
                <p className="text-gray-600 text-sm">
                  Terapia Cognitivo-Comportamental<br/>
                  Psicologia Positiva
                </p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <Users className="text-rose-600 mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Experiência</h3>
                <p className="text-gray-600 text-sm">
                  Adolescentes e Adultos<br/>
                  Atendimento Individual
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-orange-600 text-white p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Minha Missão</h3>
              <p className="text-emerald-100">
                Proporcionar um espaço seguro e acolhedor onde cada pessoa possa explorar seus 
                sentimentos, compreender seus padrões de pensamento e desenvolver habilidades 
                para uma vida mais plena e equilibrada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
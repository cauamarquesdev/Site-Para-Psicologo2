import React from 'react';
import { Brain, Heart, Users, Lightbulb, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="text-emerald-600" size={32} />,
      title: "Ansiedade e Síndrome do Pânico",
      description: "Técnicas específicas para o manejo da ansiedade, ataques de pânico e fobias, promovendo maior tranquilidade no dia a dia.",
      color: "emerald"
    },
    {
      icon: <Heart className="text-orange-600" size={32} />,
      title: "Depressão e Transtornos do Humor",
      description: "Acompanhamento especializado para superar episódios depressivos e desenvolver estratégias de enfrentamento eficazes.",
      color: "orange"
    },
    {
      icon: <Users className="text-amber-600" size={32} />,
      title: "Terapia de Casais",
      description: "Fortalecimento de vínculos afetivos, melhoria da comunicação e resolução de conflitos no relacionamento.",
      color: "amber"
    },
    {
      icon: <Lightbulb className="text-rose-600" size={32} />,
      title: "Autoestima e Autoconhecimento",
      description: "Desenvolvimento da autoconfiança, descoberta de potenciais pessoais e construção de uma autoimagem positiva.",
      color: "rose"
    },
    {
      icon: <Shield className="text-teal-600" size={32} />,
      title: "Trauma e Estresse Pós-Traumático",
      description: "Processo de elaboração de experiências traumáticas com técnicas especializadas e suporte empático.",
      color: "teal"
    },
    {
      icon: <Clock className="text-purple-600" size={32} />,
      title: "Gestão do Estresse e Burnout",
      description: "Estratégias para lidar com o estresse profissional, prevenção do burnout e melhoria da qualidade de vida.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: "hover:border-emerald-200 hover:shadow-emerald-100",
      orange: "hover:border-orange-200 hover:shadow-orange-100",
      amber: "hover:border-amber-200 hover:shadow-amber-100",
      rose: "hover:border-rose-200 hover:shadow-rose-100",
      teal: "hover:border-teal-200 hover:shadow-teal-100",
      purple: "hover:border-purple-200 hover:shadow-purple-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-lg">Áreas de Atuação</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
            Como Posso Te Ajudar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofereço atendimento especializado em diversas áreas da psicologia clínica, 
            sempre com foco no seu bem-estar e desenvolvimento pessoal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${getColorClasses(service.color)}`}
            >
              <div className="mb-6">
                <div className={`bg-${service.color}-50 w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200">
                Saiba mais →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Atendimento Personalizado</h3>
          <p className="text-emerald-100 text-lg mb-6 max-w-2xl mx-auto">
            Cada pessoa é única, por isso adapto minha abordagem às suas necessidades específicas. 
            Juntos, construiremos um caminho personalizado para seu bem-estar emocional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <span className="font-semibold">Presencial</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <span className="font-semibold">Online</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <span className="font-semibold">Horários Flexíveis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
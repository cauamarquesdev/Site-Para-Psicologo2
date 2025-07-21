import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "32 anos",
      text: "Dra. Ana Paula mudou minha vida. Seu acolhimento e profissionalismo me ajudaram a superar a ansiedade que me acompanhava há anos. Hoje me sinto mais segura e confiante para enfrentar os desafios do dia a dia.",
      rating: 5,
      treatment: "Tratamento para Ansiedade"
    },
    {
      name: "João Santos",
      age: "28 anos", 
      text: "Procurei ajuda em um momento muito difícil da minha vida. A terapia com a Dra. Ana Paula me proporcionou ferramentas valiosas para lidar com a depressão. Recomendo de coração!",
      rating: 5,
      treatment: "Terapia para Depressão"
    },
    {
      name: "Carla e Roberto",
      age: "Casal",
      text: "Nossa relação estava passando por um momento delicado. A terapia de casais nos ajudou a nos reconectarmos e melhorar nossa comunicação. Estamos mais unidos do que nunca.",
      rating: 5,
      treatment: "Terapia de Casais"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-lg">Depoimentos</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
            O Que Dizem Meus Pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A confiança e satisfação dos meus pacientes são o maior indicador do sucesso do nosso trabalho conjunto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <Quote className="text-emerald-600 opacity-50" size={32} />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.age}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-600 text-sm font-medium">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Resultados que Transformam Vidas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                <p className="text-gray-600">Pacientes satisfeitos com o tratamento</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">8+</div>
                <p className="text-gray-600">Anos de experiência clínica</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <p className="text-gray-600">Pessoas atendidas com sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
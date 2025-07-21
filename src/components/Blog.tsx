import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "5 Técnicas de Respiração para Controlar a Ansiedade",
      excerpt: "Aprenda métodos simples e eficazes para acalmar a mente e reduzir os sintomas da ansiedade no dia a dia.",
      date: "15 Mar 2024",
      readTime: "5 min",
      category: "Ansiedade",
      image: "https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Como Identificar e Romper Padrões de Pensamento Negativos",
      excerpt: "Descubra estratégias da Terapia Cognitivo-Comportamental para reconhecer e modificar pensamentos disfuncionais.",
      date: "10 Mar 2024", 
      readTime: "7 min",
      category: "TCC",
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "A Importância do Autocuidado na Saúde Mental",
      excerpt: "Entenda por que cuidar de si mesmo não é egoísmo, mas uma necessidade fundamental para o bem-estar emocional.",
      date: "5 Mar 2024",
      readTime: "6 min", 
      category: "Bem-estar",
      image: "https://images.pexels.com/photos/6187774/pexels-photo-6187774.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colorMap = {
      "Ansiedade": "bg-emerald-100 text-emerald-600",
      "TCC": "bg-orange-100 text-orange-600", 
      "Bem-estar": "bg-amber-100 text-amber-600"
    };
    return colorMap[category as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-lg">Blog</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
            Conteúdo Sobre Saúde Mental
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artigos e insights sobre psicologia, bem-estar emocional e ferramentas 
            práticas para melhorar sua qualidade de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Ler artigo
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-200 inline-flex items-center">
            <BookOpen size={20} className="mr-2" />
            Ver Todos os Artigos
          </button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Newsletter Semanal</h3>
          <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
            Receba conteúdos exclusivos sobre saúde mental, dicas de bem-estar 
            e insights da psicologia diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
import React from 'react';
import { ArrowLeft, BookText, Download, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function TeologiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>

          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="relative h-72">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
                alt="Teología Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl font-serif font-bold text-white mb-4">
                  Perspectivas Teológicas
                </h1>
                <p className="text-xl text-white/90">
                  Explorando la fe en el contexto contemporáneo
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Publications Section */}
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Publicaciones Recientes
                </h2>
                {publications.map((pub, index) => (
                  <PublicationCard key={index} {...pub} />
                ))}
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <section className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  Áreas de Investigación
                </h3>
                <ul className="space-y-3">
                  {researchAreas.map((area, index) => (
                    <li key={index} className="flex items-start">
                      <BookText className="w-5 h-5 text-gray-600 mr-2 mt-1" />
                      <span className="text-gray-600">{area}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  Recursos Gratuitos
                </h3>
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    className="block p-4 bg-gray-50 rounded-lg mb-3 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-medium">{resource.title}</span>
                      <Download className="w-4 h-4 text-gray-600" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                  </a>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PublicationCard({ title, description, date, link, tags }: {
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-serif font-bold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors"
      >
        Leer más <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}

const publications = [
  {
    title: "La Teología en Tiempos de Crisis",
    description: "Un análisis profundo sobre el papel de la fe y la teología en momentos de incertidumbre global...",
    date: "Marzo 2024",
    link: "#",
    tags: ["Teología Contemporánea", "Crisis Global", "Fe"]
  },
  {
    title: "Diálogo Interreligioso en América Latina",
    description: "Explorando las oportunidades y desafíos del diálogo entre diferentes tradiciones religiosas...",
    date: "Febrero 2024",
    link: "#",
    tags: ["Diálogo Interreligioso", "América Latina", "Ecumenismo"]
  },
  {
    title: "Espiritualidad y Justicia Social",
    description: "Una reflexión sobre la conexión intrínseca entre la fe cristiana y el compromiso con la justicia social...",
    date: "Enero 2024",
    link: "#",
    tags: ["Justicia Social", "Espiritualidad", "Teología Práctica"]
  }
];

const researchAreas = [
  "Teología Contemporánea",
  "Diálogo Interreligioso",
  "Espiritualidad y Arte",
  "Justicia Social",
  "Ecología y Fe",
  "Teología Latinoamericana"
];

const resources = [
  {
    title: "Guía de Reflexión Teológica",
    description: "PDF con metodología para el estudio teológico",
    link: "#"
  },
  {
    title: "Podcast: Conversaciones Teológicas",
    description: "Serie de episodios sobre temas actuales",
    link: "#"
  },
  {
    title: "Material de Estudio",
    description: "Recursos para grupos de estudio",
    link: "#"
  }
];
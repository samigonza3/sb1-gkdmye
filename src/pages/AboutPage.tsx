import React from 'react';
import { ArrowLeft, BookOpen, Palette, BookText, Mail, MapPin, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function AboutPage() {
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
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200"
                alt="Harold Segura Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl font-serif font-bold text-white mb-4">
                  Harold Segura
                </h1>
                <div className="flex flex-wrap gap-4 text-white">
                  <span className="inline-flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Bogotá, Colombia
                  </span>
                  <span className="inline-flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    30+ años de experiencia
                  </span>
                  <span className="inline-flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    contacto@haroldsegura.com
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Biografía
                </h2>
                <p className="text-gray-600 mb-6">
                  Harold Segura es un reconocido teólogo, escritor y caricaturista colombiano con más de tres décadas de experiencia en el campo de la teología y la expresión artística. Su trabajo único combina la profundidad teológica con la creatividad artística, ofreciendo perspectivas frescas sobre la fe y la espiritualidad en el mundo contemporáneo.
                </p>

                <div className="grid md:grid-cols-3 gap-8 my-12">
                  <ExperienceCard
                    icon={<BookText className="w-8 h-8" />}
                    title="Teología"
                    items={[
                      "Doctor en Teología",
                      "Profesor universitario",
                      "Investigador en teología contemporánea",
                      "Conferencista internacional"
                    ]}
                  />
                  <ExperienceCard
                    icon={<BookOpen className="w-8 h-8" />}
                    title="Publicaciones"
                    items={[
                      "Autor de 12 libros",
                      "Columnista regular",
                      "Blog de reflexiones diarias",
                      "Artículos académicos"
                    ]}
                  />
                  <ExperienceCard
                    icon={<Palette className="w-8 h-8" />}
                    title="Arte"
                    items={[
                      "Caricaturista",
                      "Ilustrador de libros",
                      "Exposiciones artísticas",
                      "Talleres creativos"
                    ]}
                  />
                </div>

                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Trayectoria
                </h2>
                <p className="text-gray-600 mb-6">
                  A lo largo de su carrera, Harold ha dedicado su vida a tender puentes entre la teología académica y la vida cotidiana de las personas. Su enfoque único combina el rigor académico con una sensibilidad artística que hace accesibles conceptos teológicos complejos a través del arte y la narrativa visual.
                </p>

                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Proyectos Actuales
                </h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Serie de meditaciones diarias en redes sociales</li>
                  <li>Nuevo libro sobre espiritualidad contemporánea</li>
                  <li>Talleres de arte y teología</li>
                  <li>Podcast semanal sobre fe y cultura</li>
                </ul>

                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Visión
                </h2>
                <p className="text-gray-600">
                  Mi visión es continuar explorando y compartiendo las intersecciones entre fe, arte y vida contemporánea, creando espacios de diálogo y reflexión que enriquezcan la experiencia espiritual de las personas en el mundo actual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="text-gray-900 mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600">{item}</li>
        ))}
      </ul>
    </div>
  );
}
import React from 'react';
import { BookOpen, Palette, BookText, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import BlogCarousel from './components/BlogCarousel';
import SubscribeForm from './components/SubscribeForm';
import SocialLinks from './components/SocialLinks';
import haroldSeguraImage from './img/harold-segura.jpg';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Explorando la Fe a través de las Palabras y el Arte
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Teólogo, escritor y artista gráfico compartiendo reflexiones sobre fe, espiritualidad y expresión creativa.
              </p>
              <a
                href="#sobre-mi"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Conoce mi trabajo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="flex-1">
            <img
            src={haroldSeguraImage}
            alt="Harold Segura"
            className="rounded-lg shadow-xl"
          />

            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Reflexiones Recientes</h2>
          <BlogCarousel />
        </div>
      </section>

      {/* Work Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <WorkCard
              icon={<BookText className="w-8 h-8" />}
              title="Teología"
              description="Explorando perspectivas teológicas contemporáneas y su relevancia en el mundo actual."
            />
            <WorkCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Escritos"
              description="Libros y artículos que conectan la espiritualidad con las experiencias de la vida cotidiana."
            />
            <WorkCard
              icon={<Palette className="w-8 h-8" />}
              title="Arte"
              description="Caricaturas e ilustraciones que dan vida a conceptos espirituales a través de la narrativa visual."
            />
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <SubscribeForm />

      {/* Social Media Section */}
      <SocialLinks />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Harold Segura</h3>
              <p className="text-gray-400">
                Dedicado a explorar y compartir las intersecciones entre fe, arte y vida contemporánea.
              </p>
            </div>
            <div className="md:text-right">
              <h3 className="text-xl font-serif font-bold mb-4">Contacto</h3>
              <div className="space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Harold Segura. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WorkCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-gray-900 mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={`#${title.toLowerCase()}`}
        className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors"
      >
        Saber más <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}

export default App;
import React from 'react';
import { ArrowLeft, Eye, Heart, MessageCircle, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function ArtePage() {
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
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1200"
                alt="Arte Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl font-serif font-bold text-white mb-4">
                  Galería de Arte
                </h1>
                <p className="text-xl text-white/90">
                  Expresiones visuales de fe y espiritualidad
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <ArtworkCard key={index} {...artwork} />
            ))}
          </div>

          {/* Exhibition Section */}
          <section className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Próximas Exposiciones
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {exhibitions.map((exhibition, index) => (
                  <ExhibitionCard key={index} {...exhibition} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ArtworkCard({ title, description, image, likes, views, comments }: {
  title: string;
  description: string;
  image: string;
  likes: number;
  views: number;
  comments: number;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {likes}
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {views}
            </span>
            <span className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              {comments}
            </span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ExhibitionCard({ title, date, location, image }: {
  title: string;
  date: string;
  location: string;
  image: string;
}) {
  return (
    <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div>
        <h3 className="font-serif font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  );
}

const artworks = [
  {
    title: "La Fe en Colores",
    description: "Una interpretación visual de la esperanza y la fe...",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
    likes: 245,
    views: 1200,
    comments: 23
  },
  {
    title: "Meditación Visual",
    description: "Serie de ilustraciones inspiradas en la contemplación...",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&q=80&w=800",
    likes: 189,
    views: 856,
    comments: 15
  },
  {
    title: "Símbolos Sagrados",
    description: "Explorando la iconografía religiosa contemporánea...",
    image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?auto=format&fit=crop&q=80&w=800",
    likes: 312,
    views: 1500,
    comments: 34
  },
  {
    title: "Espacios de Silencio",
    description: "Caricaturas que invitan a la reflexión interior...",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=800",
    likes: 178,
    views: 920,
    comments: 19
  },
  {
    title: "Diálogos Espirituales",
    description: "Serie sobre el encuentro entre diferentes tradiciones...",
    image: "https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?auto=format&fit=crop&q=80&w=800",
    likes: 265,
    views: 1100,
    comments: 28
  },
  {
    title: "Luz y Sombra",
    description: "Explorando los contrastes de la experiencia espiritual...",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    likes: 223,
    views: 980,
    comments: 21
  }
];

const exhibitions = [
  {
    title: "Espiritualidad en el Arte Contemporáneo",
    date: "15-30 Abril, 2024",
    location: "Galería Central, Bogotá",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Retrospectiva: Fe y Arte",
    date: "1-15 Mayo, 2024",
    location: "Centro Cultural, Medellín",
    image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?auto=format&fit=crop&q=80&w=400"
  }
];
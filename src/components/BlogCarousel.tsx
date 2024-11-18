import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "El Papel de la Fe en la Sociedad Moderna",
    excerpt: "Explorando la intersección entre espiritualidad y vida contemporánea...",
    date: "15 de marzo, 2024",
    image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "El Arte como Práctica Espiritual",
    excerpt: "Cómo la expresión creativa nos conecta con lo divino...",
    date: "10 de marzo, 2024",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Reflexiones Teológicas sobre la Comunidad",
    excerpt: "Entendiendo la importancia del compañerismo en la fe...",
    date: "5 de marzo, 2024",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % posts.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + posts.length) % posts.length);
  };

  return (
    <div className="relative overflow-hidden bg-white rounded-xl shadow-lg">
      <div className="relative h-[500px]">
        <div
          className="absolute w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex h-full">
            {posts.map((post) => (
              <div
                key={post.id}
                className="w-full h-full flex-shrink-0"
              >
                <div className="relative h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-sm font-medium mb-2">{post.date}</p>
                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-200">{post.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
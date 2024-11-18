import { Instagram, Youtube } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
          Sígueme en Redes Sociales
        </h2>
        <div className="flex justify-center gap-8">
          <a
            href="https://instagram.com/haroldsegura"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-gradient-to-tr from-purple-600 to-pink-600 p-4 rounded-xl text-white mb-3 group-hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8" />
            </div>
            <span className="text-gray-900 font-medium">@haroldsegura</span>
          </a>
          <a
            href="https://youtube.com/@haroldsegura"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="bg-red-600 p-4 rounded-xl text-white mb-3 group-hover:scale-110 transition-transform">
              <Youtube className="w-8 h-8" />
            </div>
            <span className="text-gray-900 font-medium">Harold Segura</span>
          </a>
        </div>
      </div>
    </div>
  );
}
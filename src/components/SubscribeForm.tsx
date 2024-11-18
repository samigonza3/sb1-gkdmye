import { Send } from 'lucide-react';
import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Meditaciones Diarias
        </h2>
        <p className="text-gray-400 mb-8">
          Suscríbete para recibir reflexiones diarias sobre fe, arte y espiritualidad
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 flex-1 max-w-md"
            required
          />
          <button
            type="submit"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          >
            Suscribirse
            <Send className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
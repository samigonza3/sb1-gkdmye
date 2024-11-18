import { Menu, X, BookOpen, Palette, BookText } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-serif font-bold text-gray-900">
              Harold Segura
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/sobre-mi" icon={<BookOpen size={18} />} text="Sobre Mí" />
            <NavLink to="/teologia" icon={<BookText size={18} />} text="Teología" />
            <NavLink to="/arte" icon={<Palette size={18} />} text="Arte" />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <MobileNavLink to="/sobre-mi" text="Sobre Mí" />
            <MobileNavLink to="/teologia" text="Teología" />
            <MobileNavLink to="/arte" text="Arte" />
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, text }: { to: string; text: string }) => (
  <Link
    to={to}
    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
  >
    {text}
  </Link>
);
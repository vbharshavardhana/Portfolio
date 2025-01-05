import { Home, Briefcase, BookOpen, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1D2528] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-white">
          vbharshavardhana
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden text-white"
          aria-label="Toggle Menu"
        >
          <Menu size={24} />
        </button>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex gap-6 items-center text-white`}
        >
          <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
            <Home size={18} />
            Home
          </Link>
          <Link to="/work" className="flex items-center gap-2 hover:text-gray-300">
            <Briefcase size={18} />
            Work
          </Link>
          <a
            href="https://vbharshavardhana.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <BookOpen size={18} />
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}

import { Home, Briefcase, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#1D2528] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          aashutosh.dev
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
            <Home size={18} />
            Home
          </Link>
          <Link to="/work" className="flex items-center gap-2 hover:text-gray-300">
            <Briefcase size={18} />
            Work
          </Link>
          <Link to="/blog" className="flex items-center gap-2 hover:text-gray-300">
            <BookOpen size={18} />
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2A363B] text-white flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
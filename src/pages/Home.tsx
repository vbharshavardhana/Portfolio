import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-6">
        👋 I'm Aashutosh Rathi
      </h1>
      <div className="flex gap-6 mb-8">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <Github size={24} />
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <Twitter size={24} />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <Linkedin size={24} />
        </a>
        <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <Facebook size={24} />
        </a>
      </div>
      <div className="flex gap-4">
        <a href="/resume.pdf" className="bg-white text-[#2A363B] px-6 py-2 rounded-full hover:bg-gray-200">
          Résumé
        </a>
        <a href="mailto:your@email.com" className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#2A363B]">
          Email me
        </a>
      </div>
    </div>
  );
}
import { Github, Twitter, Linkedin, Instagram, } from 'lucide-react';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-6">
        👋 I'm V B Harshavardhana
      </h1>
      <div className="flex gap-6 mb-8">
        <a href="https://github.com/vbharshavardhana" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <Github size={24} />
        </a>
        <a href="https://twitter.com/harshavardhanavb" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <Twitter size={24} />
        </a>
        <a href="https://linkedin.com/in/vbharshavardhana" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <Linkedin size={24} />
        </a>
        <a href="https://instagram.com/users/harshavardhanaa_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <Instagram size={24} />
        </a>
      </div>
      <div className="flex gap-4">
        <a href="https://drive.google.com/file/d/1rtyA80UCXHfzMBzT-LC8nPpxz4BS9I_l/view" target="_blank" rel="noopener noreferrer" className="bg-white text-[#2A363B] px-6 py-2 rounded-full hover:bg-gray-200">
          Résumé
        </a>
        <a href="mailto:your@email.com" className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#2A363B]">
          Email me
        </a>
      </div>
    </div>
  );
}
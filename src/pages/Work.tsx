import { Pin } from 'lucide-react';
import GitHubCalendar from '../components/GitHubCalendar';

const projects = [
  {
    name: 'InstaQuery',
    description: 'InstaQuery is a real-time, page-aware chatbot built with Streamlit and LangChain. It uses Google’s Gemini API for contextually relevant responses and incorporates retrieval-augmented generation (RAG).',
    tech: 'Python', // Deployed project URL
    github: 'https://github.com/vbharshavardhana/InstaQuery', // GitHub URL
    url:'',
    requiresDownload: false, // Set to true if a download is needed
  }

];

export default function Work() {
  return (
    <div className="py-8">
      <div className="space-y-12">
        <GitHubCalendar />
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Projects 📁</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="bg-[#1D2528] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <div className="flex items-center gap-1">
                    <span></span>
                    <Pin size={16}  />
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400">Written in {project.tech}</p>
                
                <div className="mt-4">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400"
                    >
                      Visit Website
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400"
                    >
                      View on GitHub
                    </a>
                  )}
                  
                  {project.requiresDownload && (
                    <a
                      href={`${project.github}/releases/latest/download/${project.name}.zip`} // Customize based on your repo structure
                      download
                      className="ml-4 text-blue-500 hover:text-blue-400"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

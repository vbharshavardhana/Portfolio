import { Star } from 'lucide-react';
import GitHubCalendar from '../components/GitHubCalendar';

const projects = [
  {
    name: '1Chat',
    stars: 19,
    description: 'Flutter and FireStore based Chat App',
    tech: 'Flutter'
  },
  {
    name: 'dcart',
    stars: 16,
    description: 'Decentralized Online Market Prototype',
    tech: 'Solidity'
  },
  {
    name: 'keepr',
    stars: 12,
    description: 'Yet Another Note Keeper',
    tech: 'Flutter'
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
                    <span>{project.stars}</span>
                    <Star size={16} className="fill-current text-yellow-400" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400">Written in {project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
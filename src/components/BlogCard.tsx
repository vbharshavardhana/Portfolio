import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/date';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const blogUrl = `https://vbharshavardhana.hashnode.dev/${post.slug}`;
  
  return (
    <a href={blogUrl} 
       target="_blank" 
       rel="noopener noreferrer" 
       className="block bg-[#1D2528] rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
      <img 
        src={post.coverImage} 
        alt={post.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <div className="flex gap-4 text-sm text-gray-400 mb-3">
          <span>{formatDate(post.dateAdded)}</span>
          <span>{post.readTime} min read</span>
        </div>
        <p className="text-gray-300">{post.brief}</p>
      </div>
    </a>
  );
}
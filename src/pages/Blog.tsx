import { useEffect, useState } from 'react';
import { BlogPost } from '../types/blog';
import BlogCard from '../components/BlogCard';

const HASHNODE_QUERY = `
  query GetUserArticles {
    user(username: "vbharshavardhana") {
      publication {
        posts(page: 1) {
          title
          brief
          slug
          dateAdded
          coverImage
          readTime
        }
      }
    }
  }
`;

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('https://api.hashnode.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: HASHNODE_QUERY }),
        });

        const data = await response.json();
        setPosts(data.data.user.publication.posts);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="py-8 text-center">
        <p className="text-xl">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="text-xl text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
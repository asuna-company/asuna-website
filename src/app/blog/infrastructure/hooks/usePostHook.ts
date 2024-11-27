import { useState, useEffect } from 'react';
import { fetchPosts } from '../services/postsServices';
import { Post } from '../types/PostType';

let cachedPosts: Post[] | null = null;

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>(cachedPosts || []);
  const [loading, setLoading] = useState<boolean>(!cachedPosts);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedPosts) return;

    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        cachedPosts = data;
        setPosts(data);
      } catch {
        setError('Ocorreu um erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, loading, error };
};

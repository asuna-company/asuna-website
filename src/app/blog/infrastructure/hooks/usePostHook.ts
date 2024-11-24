import { useEffect, useState } from 'react';

import { Post } from '../types/PostType';
import { fetchPosts } from '../services/postsServices';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || 'Ocorreu um erro desconhecido');
      }
      finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  return { posts, loading, error };
};

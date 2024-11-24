import { Post } from "../types/PostType";


const cdnFilesUrl = "https://cdn.asuna.com.br/posts/files.json";

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(cdnFilesUrl, { headers: { Accept: "application/json", "Access-Control-Allow-Origin": "*"  } });

  if (!res.ok) {
    throw new Error(`Erro ao carregar os posts: ${res.statusText}`);
  }

  return res.json();
};

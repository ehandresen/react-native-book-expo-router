import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Post } from '@/types/post';

// Define context types
type PostContextType = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

// Create the context
const PostContext = createContext<PostContextType | undefined>(undefined);

// Create a provider component
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'title',
      description: 'some descriptive text',
      hashtags: '#hashtags #summer',
    },
  ]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

// Hook to use the post context
export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
};

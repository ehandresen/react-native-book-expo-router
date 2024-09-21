import React from 'react';
import { Stack } from 'expo-router';
import { PostProvider } from '@/context/postContext';

const RootLayout = () => {
  return (
    <PostProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </PostProvider>
  );
};

export default RootLayout;

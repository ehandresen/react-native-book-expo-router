import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, Text, Modal } from 'react-native';
import PostForm from '@/components/PostForm';
import { Post } from '@/types/post';
import HomeScreen from '.';
import { usePosts } from '@/context/postContext';

const TabLayout = () => {
  const { posts, setPosts } = usePosts();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // TODO handleform
  const handleForm = (title: string, description: string, hashtags: string) => {
    const newPost: Post = {
      id: Math.random().toString(),
      title,
      description,
      hashtags,
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  // TODO add asyncstorage in utils

  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          tabBarActiveTintColor: '#f4511e',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={28} color={color} />
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ paddingRight: 6 }}
                onPress={() => setIsModalOpen(true)}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                  New post
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
      </Tabs>

      <Modal
        visible={isModalOpen}
        animationType="slide"
        presentationStyle="formSheet"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <PostForm handleForm={handleForm} />
      </Modal>
    </>
  );
};

export default TabLayout;

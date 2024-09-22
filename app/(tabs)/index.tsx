import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  StatusBar,
  FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Post } from '@/types/post';
import { usePosts } from '@/context/postContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { posts } = usePosts();

  //   As an alternative to the <Stack.Screen> component, you can use navigation.setOptions() to configure a route's options from within the route's component file.
  useEffect(() => {
    navigation.setOptions({ title: 'Home' });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>HomeScreen</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //  TODO make each todo clickable? Pressable
          <View style={styles.post}>
            <Text style={styles.title}>{item.title}</Text>
            {/* TODO add style for text? */}
            <Text>{item.description}</Text>
            <Text style={styles.hashtags}>{item.hashtags}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  post: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  hashtags: {
    color: 'grey',
  },
});

export default HomeScreen;

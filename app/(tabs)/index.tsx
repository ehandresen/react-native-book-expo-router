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
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;

import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';
import React, { useEffect } from 'react';
import { Link, Stack, useNavigation } from 'expo-router';

const HomeScreen = () => {
  const navigation = useNavigation();

  //   As an alternative to the <Stack.Screen> component, you can use navigation.setOptions() to configure a route's options from within the route's component file.
  useEffect(() => {
    navigation.setOptions({ title: 'Home' });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>HomeScreen</Text>
      {/* <Link href="/settings" asChild>
        <Button title="settings" />
      </Link> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;

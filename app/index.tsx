import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>HomeScreen</Text>
      <Link href="/settings" asChild>
        <Button title="settings" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;

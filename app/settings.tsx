import { View, Text, Button, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Settings = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Settings</Text>
      <Link href="/" asChild>
        <Button title="home" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Settings;

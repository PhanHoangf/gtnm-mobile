import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/Header';
import HomePage from './src/pages/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <HomePage></HomePage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

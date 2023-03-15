import React from 'react';
import { StyleSheet, View } from 'react-native';
import Menu from './components/Menu';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

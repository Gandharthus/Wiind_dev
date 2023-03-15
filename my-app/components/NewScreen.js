import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Screen</Text>
      <Text>This is the new screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

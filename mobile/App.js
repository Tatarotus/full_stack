import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from App.js</Text>
      <Text style={styles.lead}>I'm Samuel Dantas!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    backgroundColor: "red",
    padding: 5
  },
  lead: {
    color: '#d2d2d2',
    fontSize: 21,
  }
});

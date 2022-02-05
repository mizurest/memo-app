import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello>React</Hello>
      <Hello style={{ backgroundColor: 'pink' }}>Native</Hello>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

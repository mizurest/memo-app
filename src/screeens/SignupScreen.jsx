import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignupScreen() {
  return (
    <View style={styles.container}>

      <AppBar />

      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="hybs11@yahoo.co.jp" />
        <TextInput style={styles.input} value="パスワード" />

        <Button label="Submit" />

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Text style={styles.footerLink}>Log In.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    backgroundColor: '#fff',
    borderColor: '#dddddd',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerContainer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#2E74D5',
  },
});

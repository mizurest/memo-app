import React from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>

      <CircleButton
        name="check"
        onPress={() => { navigation.goBack(); }}
      />

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: 'top',
  },
});

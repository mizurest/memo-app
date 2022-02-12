import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';

import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [body, setBody] = useState('');

  const handlePress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText: body,
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('created!', docRef.id);
      })
      .catch((error) => {
        console.log('error!', error);
      });
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => setBody(text)}
          autoFocus
        />
      </View>

      <CircleButton
        name="check"
        onPress={handlePress}
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

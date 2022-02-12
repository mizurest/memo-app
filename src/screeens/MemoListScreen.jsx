import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  console.log('MemoListScreenの開始点');
  const { navigation } = props;
  console.log('Stateの初期化');
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
          console.log('メモ情報を配列に入れる');
        });
        console.log('ここでSetMemoを実行');
        console.log(userMemos);
        setMemos(userMemos);
        console.log(memos);
      }, () => {
        Alert.alert('データの読み込みに失敗しました');
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>

      <MemoList />

      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});

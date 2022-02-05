import React from 'react';
import {
  View, ScrollView, StyleSheet, Text,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>メモタイトル</Text>
        <Text style={styles.memoDate}>2022年2月6日</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          検索（けんさく、英: search）とは、データの集合の中から目的とするデータを探し出すことである。
          検索（けんさく、英: search）とは、データの集合の中から目的とするデータを探し出すことである。
          検索（けんさく、英: search）とは、データの集合の中から目的とするデータを探し出すことである。
        </Text>
      </ScrollView>

      <CircleButton style={{ top: 160, bottom: 'auto' }} name="pencil" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  memoHeader: {
    height: 96,
    backgroundColor: '#2E74D5',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#fff',
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

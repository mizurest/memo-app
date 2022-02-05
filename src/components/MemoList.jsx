import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>メモタイトル</Text>
          <Text style={styles.memoListItemDate}>2022年2月5日</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>メモタイトル</Text>
          <Text style={styles.memoListItemDate}>2022年2月5日</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>メモタイトル</Text>
          <Text style={styles.memoListItemDate}>2022年2月5日</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});

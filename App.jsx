import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarLogout}>ログアウト</Text>
        </View>
      </View>

      <View style={styles.memoListItems}>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>メモタイトル</Text>
            <Text style={styles.memoListItemDate}>2022年2月5日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>メモタイトル</Text>
            <Text style={styles.memoListItemDate}>2022年2月5日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>メモタイトル</Text>
            <Text style={styles.memoListItemDate}>2022年2月5日</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonIcon}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

  appbar: {
    backgroundColor: '#2E74D5',
    height: 104,
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 8,
    color: 'white',
  },
  appbarLogout: {
    color: 'rgba(255,255,255,0.8)',
    position: 'absolute',
    right: 19,
    bottom: 10,
  },

  memoListItems: {

  },
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

  circleButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    backgroundColor: '#2E74D5',
    borderRadius: 32,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, Height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonIcon: {
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
  },
});

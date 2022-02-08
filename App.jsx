import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';

import MemoListScreen from './src/screeens/MemoListScreen';
import MemoDetailScreen from './src/screeens/MemoDetailScreen';
import MemoEditScreen from './src/screeens/MemoEditScreen';
import MemoCreateScreen from './src/screeens/MemoCreateScreen';
import LoginScreen from './src/screeens/LoginScreen';
import SignupScreen from './src/screeens/SignupScreen';

const Stack = createStackNavigator();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxmvw9UVH-IIV5xDX-Dnf8oQSpQXNHkgo',
  authDomain: 'memoapp-8c86e.firebaseapp.com',
  projectId: 'memoapp-8c86e',
  storageBucket: 'memoapp-8c86e.appspot.com',
  messagingSenderId: '10372382284',
  appId: '1:10372382284:web:7cca7934a9fcb92960bee9',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerStyle: { backgroundColor: '#2E74D5' },
          headerTitleStyle: { color: '#fff' },
          headerTitle: 'Memo App',
          headerBackTitle: 'Back',
          headerTintColor: '#fff',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

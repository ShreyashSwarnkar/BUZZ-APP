import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottonTabNavigator } from 'react-navigation-tabs';
import fb from './screens/fb';
import ins from './screens/in';


export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const Navigator = createBottonTabNavigator({
  fb : {screen:fb},
  ins : {screen:ins}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

export default class ins extends React.Component {
    render() {
        return (
            <View>
            <Text style={styles.text}>Instagarm</Text>
            <StatusBar style="auto" /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#8a3ab9',
    },
  });
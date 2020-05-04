import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LoginScreen from './LoginScreen'

export class App extends Component {
  render() {
    return (
      <View>
        <LoginScreen />
      </View>
    )
  }
}

export default App;

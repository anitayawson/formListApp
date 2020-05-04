import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LoginScreen from './LoginScreen'
import ContactsScreen from './ContactsScreen'
import Contact from './components/Contact'

export class App extends Component {
  render() {
    return (
      <View>
        <ContactsScreen/>
        {/* <Contact/> */}
      </View>
    )
  }
}

export default App;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Main from './components/MainComponent'


export default function App() {
  return (
    < SafeAreaView style={styles.container}>
      {/* <Login/> */}
      <Main/>
      <StatusBar style="auto" />
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical:50 ,
    justifyContent: 'center',
  },
});

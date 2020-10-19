import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Main from './components/MainComponent';
import Detail from './components/Detail';
import CalendarsScreen from './components/Calender';
import Agenda from './components/Agenda'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Slot from './components/Slot';
const Stack = createStackNavigator();

export default function App() {
  return (
    < SafeAreaView style={styles.container}>
      {/* <Login /> */}
      {/* <Main/> */}
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name="Home" component={CalendarsScreen} />
          <Stack.Screen name="List" component={Main} />
          <Stack.Screen name="Slot" component={Slot} />
          {/* <Stack.Screen name="Detail" component={Detail} /> */}
        </Stack.Navigator>
      </NavigationContainer>

    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 50,
    justifyContent: 'center',
  },
});

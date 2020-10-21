import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Main from "./components/MainComponent";
import Detail from "./components/Detail";
import List from "./components/List";
import CalendarsScreen from "./components/Calender";
import Agenda from "./components/Agenda";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Slot from "./components/Slot";
import Appointment from "./components/tab/Appointment";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login"
         screenOptions={{
          headerStyle: {
            backgroundColor: '#52BC91',
            textAlign:'center'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:'center'
          },
        }}>
          <Stack.Screen
            name="login"
            component={Login}
            options={{ title: "Login" ,
            headerStyle: {
              backgroundColor: '#52BC91',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          />
          <Stack.Screen name="Home" component={CalendarsScreen} />
          {/* <Stack.Screen name="Slot" component={Slot} /> */}
          {/* <Stack.Screen name="Appointment" component={Appointment} /> */}
          <Stack.Screen
            name="Appointments"
            component={List}
            options={({ route }) => ({ title: route.params.selectedDate })}
          />
          <Stack.Screen name="Appointment Info" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 50,
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View ,Button} from "react-native";
import Login from "./components/Login";

import Detail from "./components/Detail";
import List from "./components/List";
import Calender from "./components/Calender";
import Today from "./components/today"

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function Home() {
  console.log(hello)
  return (
    <Text><h1>Hello</h1></Text>
  )
}




export default function App({route,navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: "rgb(53,156,164)",
              textAlign: "center",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
            },
           
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Calender} />

          <Stack.Screen
            name="Appointments"
            component={List}
            // options={{
            // // headerTitle:() => ({ title: route.params.selectedDate }),
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Schedule"
            //     color="#fff"
            //     backgroundColor= "rgb(53,156,164)"/>
            // )
            // }}
            options={
              ({ route }) => ({ title: route.params.selectedDate })
            //   headerRight : ({navigate, navigation}) => (
            //   <Button
            //     onPress={() =>navigation.navigate('Home')}
            //     title="Calender"
            //     backgroundColor='#fff'
            //     color="rgb(53,156,164)"
            //     style={{margin:5}}
            //   />
            // )
          }
          />
          {/* <Stack.Screen
            name="Today"
            component={Today}
            options={{
            headerTitle:'Today',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Schedule"
                color="#fff"
                backgroundColor= "rgb(53,156,164)"/>
            )
            }}
            /> */}
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

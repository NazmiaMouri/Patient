import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import Login from "./components/Login";

import Detail from "./components/Detail";
import List from "./components/List";
import Calender from "./components/Calender";
import Icon from "react-native-vector-icons/FontAwesome";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  console.log(hello);
  return (
    <Text>
      <h1>Hello</h1>
    </Text>
  );
}

export default function App({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: "rgb(53,156,164)",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Calender} />

          <Stack.Screen
            name="Appointments"
            component={List}
            options={({ navigation, route }) => ({
              headerTitle: route.params.selectedDate,
              headerRight: () => (
                
                   <Icon
                  name='calendar'
                  color='#fff'
                  size = {26}
                  style={[styles.calenderBtnWrapper, styles.shadow]}
                  onPress={() => navigation.navigate("Home")}
                >
                  {/* <Text style={styles.calenderBtnText}>Calender</Text> */}
                </Icon>
),
            
              headerLeft: () => {
                return(
                <Icon
               name='bars'
               color='#fff'
               size = {26}
               style={[styles.calenderBtnWrapper, styles.shadow]}
               onPress={() => navigation.navigate("Home")}
             >
               {/* <Text style={styles.calenderBtnText}>Calender</Text> */}
             </Icon>)
              },})}
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
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 0.1,
  },
  calenderBtnWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "transparent",
    
  },
  calenderBtnText: {
    color: "#fff",
    fontSize: 14,
    textTransform: "uppercase",
    textDecorationLine: "underline",
  },
});

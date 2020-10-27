import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
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
import Profile from "./components/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import Dashboard from './components/Dashboard';
import DrawerContent from './components/DrawerContent'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function DashboardStack({navigation}){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "rgb(53,156,164)",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
      <Stack.Screen name ='Dashboard' component={Dashboard}
      options={{
        headerLeft: () => {
         return(
          <Icon
         name='bars'
         color='#fff'
         size = {26}
         style={[styles.calenderBtnWrapper, styles.shadow]}
         onPress={() => navigation.openDrawer()}
       >
       
       </Icon>
         )}
      }}
      />
    </Stack.Navigator>
  )
}
function ProfileStack({navigation}){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "rgb(53,156,164)",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
      <Stack.Screen name ='My Profile' component={Profile}
      options={{
        headerLeft: () => {
         return(
          <Icon
         name='bars'
         color='#fff'
         size = {26}
         style={[styles.calenderBtnWrapper, styles.shadow]}
         onPress={() => navigation.openDrawer()}
       >
       
       </Icon>
  )}
      }}
      />
    </Stack.Navigator>
  )
}

 

export default function App() {
  const [login, setlogin] = useState(false)
  const [isLoading, setisLoading] = useState()
  const [userToken, setuserToken] = useState()
  function onlogin(log){
    setlogin(log)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
  <Drawer.Navigator   >
          <Drawer.Screen name='Dashboard'  component={DashboardStack}/>
          <Drawer.Screen name='My Profile'  component={ProfileStack}/>
          <Drawer.Screen name="Today's Appointment"  component={List}/>
        </Drawer.Navigator>
      
        {/* <Stack.Navigator
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
              headerRight: (previous,) => (
                
                   <Icon
                  name='calendar'
                  color='#fff'
                  size = {26}
                  style={[styles.calenderBtnWrapper, styles.shadow]}
                  onPress={() => navigation.navigate("Home")}
                >
                
                </Icon>
),
            
              headerLeft: () => {
                return(
                <Icon
               name='bars'
               color='#fff'
               size = {26}
               style={[styles.calenderBtnWrapper, styles.shadow]}
               onPress={() => navigation.navigate('drawer')}
             >
             
             </Icon>)
              },})}
          />

          <Stack.Screen name="Appointment Info" component={Detail} />
         
        </Stack.Navigator> */}
   
        

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

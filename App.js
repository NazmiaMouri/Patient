import { StatusBar } from "expo-status-bar";
import React,{useState,useEffect} from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Login from "./components/Login";
import Today from "./components/Today";
import { AuthContext } from "./components/context";
import Detail from "./components/Detail";
import List from "./components/List";
import Settings from "./components/Settings";
import Calender from "./components/Calender";
import Profile from "./components/Profile";
import Icon from "react-native-vector-icons/FontAwesome";
import Dashboard from './components/Dashboard';
import DrawerContent from './components/DrawerContent'
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import RootStackScreen from "./components/RootStackScreen";
import { set } from "react-native-reanimated";

const Stack = createStackNavigator();

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
           <View style={{flexDirection:'row'}}>
          <Icon
         name='bars'
         color='#fff'
         size = {26}
         style={[styles.calenderBtnWrapper, styles.shadow]}
         onPress={() => navigation.openDrawer()}
       >
       
       </Icon>
        {/* <Icon
        name='bars'
        color='#fff'
        size = {26}
        style={[styles.calenderBtnWrapper, styles.shadow]}
        onPress={() => navigation.openDrawer()}
      >
      
      </Icon> */}
           </View>
         
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
function TodayStack({navigation}){
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
      <Stack.Screen
            name="Today"
            component={Today}
            options={{
              // headerTitle: 'Today',
              headerRight: () => (
                
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
               onPress={() => navigation.openDrawer()}
             >
             
             </Icon>
             
           
              )
              }
            }}
          />
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
            
            //   headerLeft: () => {
            //     return(
            //     <Icon
            //    name='bars'
            //    color='#fff'
            //    size = {26}
            //    style={[styles.calenderBtnWrapper, styles.shadow]}
            //    onPress={() => navigation.openDrawer()}
            //  >
             
            //  </Icon>)
            //   },
            })}
          />
          <Stack.Screen name="Appointment Info" component={Detail} />

    </Stack.Navigator>
  )
}

function SettingStack({navigation}){
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
      <Stack.Screen name ='Settings' component={Settings}
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
  const [isLoading, setisLoading] = useState(true)
  const [userToken, setuserToken] = useState()

  const initialLoginState = useState({

    isLoading: true,
    userName: null,
    userToken: null
  });

  const loginReducer = (prevState, action) =>{
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false

        };
      case 'LOGIN':
        return {
          ...prevState,
          userName:action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName:null,
          userToken: null,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName:action.id,
          userToken: action.token,
          isLoading: false
        };
    }
  }
  const [loginState,dispatch]= React.useReducer(loginReducer,initialLoginState)

  const authContext = React.useMemo(()=>({
    signIn:(userName,password)=>{
      // setuserToken('admin');
      // setisLoading(false);
      let userToken;
      userToken=null;
      if(userName =='admin' && password =='pass'){
        userToken ='123'
      }
     dispatch({type:'LOGIN', id: userName, token: userToken})
    },
    signOut:()=>{
      // setuserToken(null);
      // setisLoading(false);
      dispatch({type:'LOGOUT'})
    },
    signUp:()=>{
      // setisLoading(false);
      // let userToken;
      // userToken=null;
      // if(userName =='admin' && password =='pass'){
      //   userToken ='123'
    //   }
    //  dispatch({type:'REGISTER', id: userName, token: userToken})
      // setuserToken('admin');
      // setisLoading(false);
    }
  }),[])
 
  useEffect(() => {
    setTimeout(()=>{
      // setisLoading(false)
      let userToken;
      
      // userToken='123'
      dispatch({type:'RETRIEVE_TOKEN',token: '123'})
    },1000)
    
  }, [])

  if(loginState.isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size='large' animation={true}/>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <AuthContext.Provider value={authContext}  > 
      <StatusBar style="auto" />
      <NavigationContainer >
        { loginState.userToken != null ?
         <Drawer.Navigator drawerContent= {props =>< DrawerContent {...props} /> } >
            <Drawer.Screen name='Dashboard'  component={DashboardStack}/>
            <Drawer.Screen name='My Profile'  component={ProfileStack}/>
            <Drawer.Screen name="Today"  component={TodayStack} />
            <Drawer.Screen name="Settings"  component={SettingStack}/>
            
          </Drawer.Navigator>  :  
          <RootStackScreen/> }
       
          
      
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
      </AuthContext.Provider>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginVertical: 50,
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

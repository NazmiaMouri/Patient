import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { AuthContext } from './context';


import patientList from './patientList';
import CalenderStrip from './CalenderStrip'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Dashboard() {
   
  // const [value, onChangeText] = React.useState(route.params.title);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: value === '' ? 'No title' : value,
  //   });
  // }, [navigation, value]);
    const Tab = createBottomTabNavigator();
    return (
       
    
    <View style={styles.container}>
       
    <Tab.Navigator>
      <Tab.Screen name="Pending" component={CalenderStrip} />
      <Tab.Screen name="Confirm" component={CalenderStrip} />
    </Tab.Navigator>
    </View>
       
    )
}


export default Dashboard
const styles = StyleSheet.create({
    container: { flex: 1 }
  });

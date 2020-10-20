import React from "react";
import Pending from "./Pending";
import Confirm from "./Confirm";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Appointment() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pending Appointments" component={Pending} />
      <Tab.Screen name="Confirm Appointments" component={Confirm} />
    </Tab.Navigator>
  );
}

export default Appointment;

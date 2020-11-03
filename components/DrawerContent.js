import React, { useState } from "react";
import { View, StyleSheet, Picker } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";
import { AuthContext } from "./context";

function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { signOut } = React.useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState("java");
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>    
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>   
          <View style={styles.userInfoSection}>  
            <View style={{ flexDirection: "row", marginTop: 15 }}>   
              <Avatar.Image
                source={require("../assets/doctor.png")}
                size={50}
              />
              <View style={{ marginLeft: 15 }}>  
                <Title style={styles.title}>Dr. Robert</Title>
                <Caption style={styles.caption}>Neurologist</Caption>
              </View>  
            </View>  
            <View style={styles.row}> 
              <View style={styles.section}>  
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>  
              <View style={styles.section}>  
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>  
            </View>  
          </View>  
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate("Dashboard");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="calendar-account" color={color} size={size} />
              )}
              label="Appointments"
              onPress={() => {
                props.navigation.navigate("Appointments");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="card-account-details" color={color} size={size} />
              )}
              label="Patient"
              onPress={() => {
                props.navigation.navigate("Appointments");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-circle" color={color} size={size} />
              )}
              label="Prescription"
              onPress={() => {
                props.navigation.navigate("Appointments");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="calendar-account" color={color} size={size} />
              )}
              label="Today's Appointments"
              onPress={() => {
                const date = moment().format("YYYY-MM-DD");
                props.navigation.navigate("Today");
               
              }}
            />
            </Drawer.Section>
            {/* <Drawer.Section title="Organization">
               <DrawerItem 
                        icon={({color, size}) =>(
                            <Icon
                            name='settings-outline'
                            color= {color}
                            size ={size}
                            />
                        )}
                        label="Organization"
                        onPress={()=>{props.navigation.navigate('Settings')}}

                   /> 
              <Picker
                style={{ paddingLeft: 10 }}
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Labaid" value="lab" />
                <Picker.Item label="Square" value="sq" />
              </Picker>
            </Drawer.Section> */}
        
          {/* <Drawer.Section title='Preferences'>
                    <TouchableRipple onPress={()=>{toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents='none'>
                            <Switch value={isDarkTheme} />
                            </View>
                           
                        </View>
                    </TouchableRipple>
                   
                </Drawer.Section> */}
     
     </View>  
      </DrawerContentScrollView>
      <Drawer.Section style={StyleSheet.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="account-circle" color={color} size={size} />
          )}
          label="Profile"
          onPress={() => {
            props.navigation.navigate("My Profile");
           
          }}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign-Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    
      
    </View>  
  );
}
export default DrawerContent;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    flexDirection:'row',
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
 
});

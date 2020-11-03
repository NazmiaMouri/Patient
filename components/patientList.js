import React ,{Component} from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    StyleSheet,
    Button,
    SafeAreaView,
  } from "react-native";
  import { ListItem, Avatar, Badge } from "react-native-elements";
import { PATIENTS } from "../shared/patients";
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

class patientList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        patient: PATIENTS,
        matchdate: null,
       

      };
      
    }
    
  
    render() {
       
    
      const renderListItem = ({ item }) => {
        return (
            <View>
              <ListItem
                bottomDivider
                key={item.serialNo}
                title={
                  <Text >{item.name}</Text>
                }
           
                subtitle={<View>
                          <Text style={{color:'gray'}} >Status : {item.status}</Text>
                          <Text  style={{color:'gray'}} >Appointed time : {item.appointedTime}</Text>
    
                         </View>
                         
                        }
                hideChevron={true}
                onPress={() => navigate("Appointment Info", { patId: item.id })}
                leftAvatar={
                  <View>
                    <Image source={item.image} style={{ width: 40, height: 40 }} />
                   
                  </View>
                }
              />
            </View>
          );
        };
        const { navigate } = this.props.navigation;
         
        
        const today = moment().format("YYYY-MM-DD");
        var list = this.state.patient.filter((patient) =>
          moment(patient.appointedDate).isSame(this.state.matchdate)
        );
        
   
    return (
       
               
                    <SafeAreaView style={{ flex: 1 }}>
                        
                    {list.length !== 0 ? (
                      <FlatList
                        data={list}
                        renderItem={renderListItem}
                        keyExtractor={(item) => item.id.toString()}
                      />
                    ) : (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          
                        }}
                      >
                        <Text style={{ color: "gray", alignSelf: "center" }}>
                          No appointment available
                        </Text>
                      </View>
                    )}
                  </SafeAreaView>
                );
       
    
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      marginVertical: 50,
      justifyContent: "center",
    },
  });

export default patientList

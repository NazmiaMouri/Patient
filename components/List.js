import React, { useSatate, Component } from "react";
import {
  View,
  FlatList,
 
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView
} from "react-native";
import { ListItem, Avatar,Header} from "react-native-elements";
import { PATIENTS } from "../shared/patients";
import moment from "moment";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: PATIENTS,
      date: this.props.route.params.matchDate,
      
    };
  }
  componentDidUpdate(){
    const newdate =this.props.route.params.matchDate
    if(moment(this.state.date).isSame(newdate)){
   console.log('true')
    }else{
      console.log('not same')
      this.setState({date:newdate})
    }

  }

  render() {
    const renderListItem = ({ item, index }) => {
      console.log(item.name)
      if(typeof item.name !== 'undefined' || item !== null ){
        console.log('not empty --------------------------')
      
        return (
       
          <View>
            <ListItem
              bottomDivider
              key={index}
              title={item.name}
              subtitle={item.status}
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

      }
       else{
         return(<SafeAreaView style={{ backgroundColor:'red'}} ></SafeAreaView>)
         
       }

     
    };
    const { navigate } = this.props.navigation;
    console.log(this.state.date);
  
    var list = this.state.patient.filter((patient) =>
      moment(patient.appointedDate).isSame(this.state.date)
    );
    console.log(list)
   
    return (
      <SafeAreaView>
        {/* <Header
  placement="left"
  
  centerComponent={{ text: 'Appointment List', style: { color: '#fff' } }}
  rightComponent={{ icon: 'calendar', color: '#fff' }}
/> */}
        <View style={{display:'flex',margin:5, flexDirection:'row', justifyContent:"space-between"}}>
        <Text style={{fontWeight:"bold" ,fontSize: 20}}>Appointment List</Text>
        <Button
        style={{margin:5,backgroundColor: "rgb(53,156,164)",}}
          title="Calender"
          onPress={() => navigate("Home")}
          color="rgb(53,156,164)"
        />

        </View>
       
        <FlatList
          data={list}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
        />
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

export default List;




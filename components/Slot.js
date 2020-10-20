import React, { Component } from "react";
import { View, FlatList, SafeAreaView, Text, Image,Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { SLOTS } from "../shared/time";
import moment from 'moment';


export class Slot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeslot: SLOTS,
      appointedDate:this.props.route.params.bookingDate
    };
  }
  
  renderSlotItem = ({ item, index }) => {
    return (
      <ListItem style={{alignItems: 'center',justifyContent: 'center'}}>
        <Button title={item.time} onPress={() => this.props.navigation.navigate("Appointment")} />
      </ListItem>
    );
  };
  render() {
    const monthNum=this.state.appointedDate.month 
    const month = moment().months(this.state.appointedDate.month -1 ).format('MMMM');
    const date = this.state.appointedDate.day
    return (
      <SafeAreaView>
         <Text style={{  fontWeight: "bold", margin: 10, fontSize: 30 }}>{month}, {date}</Text> 
        <Text style={{ textAlign: 'center', fontWeight: "bold", margin: 10, fontSize: 30 }}>Choose a slot</Text>
        <FlatList
          data={this.state.timeslot}
          renderItem={this.renderSlotItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

export default Slot;

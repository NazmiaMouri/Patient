import React, { Component } from "react";
import { View, FlatList, SafeAreaView, Text, Image,Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { SLOTS } from "../shared/time";


export class Slot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeslot: SLOTS,
    };
  }
  renderSlotItem = ({ item, index }) => {
    return (
      <ListItem style={{alignItems: 'center',justifyContent: 'center'}}>
        <Button title={item.time} onPress={() => navigation.navigate("Home")} />
      </ListItem>
    );
  };
  render() {
    return (
      <SafeAreaView>
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

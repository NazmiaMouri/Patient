import React, { useSatate, Component } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { PATIENTS } from "../shared/patients";
import moment from "moment";

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: PATIENTS,
     
      today:this.props.route.params.todayDate
    };
  }

  render() {
    const renderListItem = ({ item, index }) => {
     
        console.log(item)
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

     
    };
    const { navigate } = this.props.navigation;
    // console.log(this.state.date);
  
    var list = this.state.patient.filter((patient) =>
      moment(patient.appointedDate).isSame(this.state.today)
    );
    console.log(list)
   
    return (
      <SafeAreaView>
        <Button
          title="Calender"
          onPress={() => navigate("Home")}
        />
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

export default Today;




import React, { useSatate, Component } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
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

  render() {
    const renderListItem = ({ item, index }) => {
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
    console.log(this.state.date);
    // var matchDate=moment(this.state.date).format("YYYY-MM-D ")
    var list = this.state.patient.filter((patient) =>
      moment(patient.appointedDate).isSame(this.state.date)
    );
   
    return (
      <SafeAreaView>
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




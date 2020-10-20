import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { PATIENTS } from "../shared/patients";

function RenderPatient(props) {
  const patient = props.patient;

  if (patient != null) {
    return (
      <ScrollView>
        <ListItem
          hideChevron={true}
          leftAvatar={
            <View>
              <Image
                source={patient.image}
                style={{ width: 180, height: 180 }}
              />
            </View>
          }
        >
          <Text>
            <ListItem>
              <Text style={{ fontWeight: "bold" }}> Appointment Time :</Text>
              <Text>{patient.appointedTime}</Text>{" "}
            </ListItem>
            {"\n"}
            <ListItem>
              <Text style={{ fontWeight: "bold" }}> Name :</Text>
              <Text>{patient.name}</Text>{" "}
            </ListItem>
            {"\n"}
            <ListItem>
              <Text style={{ fontWeight: "bold" }}> Phone: :</Text>
              <Text>{patient.phoneNo}</Text>
            </ListItem>
            {"\n"}
            <ListItem>
              <Text style={{ fontWeight: "bold" }}> Age :</Text>
              <Text>{patient.age}</Text>
            </ListItem>
            {"\n"}
            <ListItem>
              <Text style={{ fontWeight: "bold" }}> Type :</Text>
              <Text>{patient.type}</Text>
            </ListItem>
            {"\n"}
            <ListItem>
              <Text style={{ fontWeight: "bold" }}> Status :</Text>
              <Text>{patient.status}</Text>
            </ListItem>
            {"\n"}
            <ListItem>
              <Text style={{ fontWeight: "bold" }}> Gender :</Text>{" "}
              <Text>{patient.gender}</Text>
            </ListItem>
            {"\n"}
            <ListItem>
              <Text style={{ fontWeight: "bold" }}> Emergency :</Text>
              <Text>{patient.emerg}</Text>
            </ListItem>
            {"\n"}

            <ListItem>
              <Text style={{ fontWeight: "bold" }}> Blood Group :</Text>{" "}
              <Text>{patient.bloodGrp}</Text>
            </ListItem>
          </Text>
        </ListItem>
      </ScrollView>
    );
  } else {
    return <View></View>;
  }
}

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: PATIENTS,
    };
  }
  render() {
    const patId = this.props.route.params.patId;
    return <RenderPatient patient={this.state.patient[+patId]} />;
  }
}

export default Detail;

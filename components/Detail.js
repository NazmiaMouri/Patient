import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Card, ListItem } from "react-native-elements";

function RenderPatient(props) {
  const patient = props.patient;

  if (patient != null) {
    return (
      <ScrollView>
        <Text style={{ fontWeight: "bold", margin: 10, fontSize: 30 }}>
          Details
        </Text>
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
            <Text style={{ fontWeight: "bold" }}> Name :</Text> {patient.name}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}> Age :</Text> {patient.age}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}> Gender :</Text>{" "}
            {patient.gender}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}>
              {" "}
              AppointMent Status :
            </Text>{" "}
            {patient.status}
            {"\n"}
            <Text style={{ fontWeight: "bold" }}> Appointment Date :</Text>{" "}
            {patient.date}
          </Text>
        </ListItem>
      </ScrollView>
    );
  } else {
    return <View></View>;
  }
}

function Detail(props) {
  // const patId = props.navigation.getParam('patId','');
  return <RenderPatient patient={props.patient} />;
}

export default Detail;

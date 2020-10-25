import React, { Component } from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { PATIENTS } from "../shared/patients";
import moment from "moment";

function RenderPatient(props) {
  const patient = props.patient;
 
  if (patient != null) {
    return (
      <ScrollView>
        <Card>
          <Card.Title>{patient.name}</Card.Title>
          <Card.Divider />

          <Card.Image
            style={{ justifyContent: "center", backgroundColor: "#fff" }}
          >
            <Image
              style={{ width: 100, height: 100, alignSelf: "center" }}
              resizeMode="contain"
              source={patient.image}
            />
          </Card.Image>

          <View>
            <View>
              <View style={styles.verticalMargin}>
                <Text style={[styles.marginRight, { fontWeight: "bold" }]}>
                  {" "}
                  Appointment Time :
                </Text>
                <Text>{patient.appointedTime}</Text>
              </View>
              <View style={styles.verticalMargin}>
                <Text style={[styles.marginRight, { fontWeight: "bold" }]}>
                  {" "}
                  Name :
                </Text>
                <Text>{patient.name}</Text>
              </View>
              <View style={styles.verticalMargin}>
                <Text style={[styles.marginRight, { fontWeight: "bold" }]}>
                  {" "}
                  Phone: :
                </Text>
                <Text>{patient.phoneNo}</Text>
              </View>
              <View style={styles.verticalMargin}>
                <Text style={[styles.marginRight, { fontWeight: "bold" }]}>
                  {" "}
                  Age :
                </Text>
                <Text>{patient.age}</Text>
              </View>
              <View style={styles.verticalMargin}>
                <Text style={[styles.marginRight, { fontWeight: "bold" }]}>
                  {" "}
                  Type :
                </Text>
                <Text>{patient.type}</Text>
              </View>
              <View style={styles.verticalMargin}>
                <Text style={[styles.marginRight, { fontWeight: "bold" }]}>
                  {" "}
                  Status :
                </Text>
                <Text>{patient.status}</Text>
              </View>
              <View style={styles.verticalMargin}>
                <Text style={[styles.marginRight, { fontWeight: "bold" }]}>
                  {" "}
                  Gender :
                </Text>
                <Text>{patient.gender}</Text>
              </View>
              <View style={styles.verticalMargin}>
                <Text style={[styles.marginRight, { fontWeight: "bold" }]}>
                  {" "}
                  Emergency :
                </Text>
                <Text>{patient.emerg}</Text>
              </View>
              <View style={styles.verticalMargin}>
                <Text style={[styles.marginRight, { fontWeight: "bold" }]}>
                  {" "}
                  Blood Group :
                </Text>
                <Text>{patient.bloodGrp}</Text>
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }

 
  else {
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

const styles = StyleSheet.create({
  verticalMargin: {
    marginBottom: 5,
    flexDirection: "row",
  },
  marginRight: {
    marginRight: 5,
  },
});

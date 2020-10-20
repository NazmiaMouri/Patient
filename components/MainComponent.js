import React, { Component } from "react";
import List from "./List";
import Slot from "./Slot";
import Detail from "./Detail";
import { View } from "react-native";
import { PATIENTS } from "../shared/patients";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: PATIENTS,
      selectedPatient: null,
    };
  }
  onPatientSelect(patientId) {
    this.setState({ selectedPatient: patientId });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <List
          patients={this.state.patients}
          onPress={(patientId) => this.onPatientSelect(patientId)}
        />
        <Detail
          patient={
            this.state.patients.filter(
              (patient) => patient.id === this.state.selectedPatient
            )[0]
          }
        />
      </View>
    );
  }
}

export default Main;

import React, { Component } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import moment from "moment";
import { PATIENTS } from "../shared/patients";

export class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: PATIENTS,
      date: [],
      selected: null,
      marked: null,
    };
    this.onDayPress = this.onDayPress.bind(this);
  }
  // Fetching the appointed dates from json file and pushing then in to date array before component mount
  componentWillMount() {
    var dt = [];
    this.state.patient.map((each) => dt.push(each.appointedDate));
    this.setState({
      date: dt,
    });
  }
  //After component mounts converting the date Array to an object to mark the dates in the calender
  componentDidMount() {
    
    var obj = this.state.date.reduce(
      (c, v) => Object.assign(c, { [v]: { selected: true, marked: true } }),
      {}
    );
    this.setState({ marked: obj });
  }
 //---------- What will happend when a doctor prees the marked date on the calender------------???

 //************ firs the selected date will be assigned to the selected variable  ********************* */

  onDayPress(day) {
    this.setState({
      selected: day.dateString,
    });
  }
  // ******************** If the selected date is presented in the date array then formating the selected date and passing it ti the Appointments list page for the header and to view the patients of that selected date
  componentDidUpdate() {
    var result = this.state.date.filter(
      (date) => date === this.state.selected
    )[0];
   

    const date = moment(this.state.selected).format("Do MMMM, YYYY ");
    console.log(date);

    if (result != undefined || result != null) {
      console.log(result);
      this.props.navigation.navigate("Appointments", {
        selectedDate: date,
        matchDate: this.state.selected,
      });
    } else {
      <View>
       
      </View>;
    }
  }
  // _onPressBack() {
  //   const { goBack } = this.props.navigation;
  //   goBack();
  // }
  render() {
   
    const today = moment().format("YYYY-MM-DD");
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <TouchableOpacity onPress={() => this._onPressBack()}>
         
          </TouchableOpacity>
        </View>
        <Calendar
          minDate={today}
          disableAllTouchEventsForDisabledDays={true}
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={this.state.marked}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    height: 350,
  },
});

export default Calender;

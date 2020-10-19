import React, { Component } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar} from 'react-native';
  import moment from 'moment';

 

export class Calender extends Component {
  constructor(props){
    super (props)
    this.state={
      date:['2020-10-28','2020-10-19','2020-10-29'],
      selected:null
    };
    this.onDayPress=this.onDayPress.bind(this)
  }
  onDayPress(day){
    this.setState({
      selected:day.dateString
    })
    this.props.navigation.navigate('Slot')
  }
  _onPressBack(){
    const {goBack}=this.props.navigation
    goBack()
  }
  render() {
    const today = moment().format("YYYY-MM-DD");
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View >
        <TouchableOpacity onPress={() => this._onPressBack() }>
          {/* <Text >Back</Text> */}
          </TouchableOpacity>
                    {/* <Text style={Commonstyle.toolbarTitle}></Text>
                    <Text style={Commonstyle.toolbarButton}></Text> */}
      </View>
        <Calendar
          minDate={today}
          disableAllTouchEventsForDisabledDays={true}
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: 'green',
            todayTextColor: 'green',
            arrowColor: 'green',
          }}
          // markedDates={{
          //   [this.state.date].map((date)=>{
          //     date : {selected: true, marked: true, selectedColor: 'blue'}

          // }}}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  }
});

export default Calender

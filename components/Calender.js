import React, { Component } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar} from 'react-native';
  import moment from 'moment';
import { PATIENTS } from '../shared/patients';

 

export class Calender extends Component {
  constructor(props){
    super (props)
    this.state={
      patient:PATIENTS,
      date:['2020-10-28','2020-10-19','2020-10-29'],
      selected:null,
      marked:null
    };
    this.onDayPress=this.onDayPress.bind(this)
  }
  componentDidMount() {
    this.anotherFunc();
}
anotherFunc = () => {
  var obj = this.state.date.reduce((c, v) => Object.assign(c, {[v]: {selected: true,marked: true}}), {});
  this.setState({ marked : obj});
}
  onDayPress(day){
    this.setState({
      selected:day.dateString
    })
    
       
  }
  componentDidUpdate(){
    var result=this.state.date.filter((date) => date === this.state.selected)[0]
     
      if( result != undefined || result != null){
        console.log(result)
       this.props.navigation.navigate('Appointments')
  
      }else{
        <View>
          <Text styles={{textAlignment:'center'}}>No appointment available</Text>
        </View>
      }

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

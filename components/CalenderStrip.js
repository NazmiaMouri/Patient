import React ,{Component} from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    StyleSheet,
    Button,
    SafeAreaView,
  } from "react-native";
  import { ListItem, Avatar, Badge } from "react-native-elements";
import { PATIENTS } from "../shared/patients";
import CalendarStrip from 'react-native-calendar-strip';
import patientList from './patientList'
import moment from 'moment';

class CalenderStrip extends Component {
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
      (c, v) => Object.assign(c, { date:[v],
        dots : [{ selected: true, marked: true }]  }),
     
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
 
    if (result != undefined || result != null) {

    //  <patientList matchdate={result}/>
     
    
    } else {
      <View>
       
      </View>;
    }
  }
    
    
  
    render() {
       
    
      
         
        
        const today = moment().format("YYYY-MM-DD");
      
        
   
    return (
       
               
                    <SafeAreaView style={{ flex: 1 }}>
                         <CalendarStrip
                            style={{height:100, paddingBottom: 10}}
                             minDate={today}
                            // disableAllTouchEventsForDisabledDays={true}
                            // // onDayPress={this.onDayPress}
                            // style={styles.calendar}
                            // hideExtraDays
                            // markedDates={this.state.marked}
            
            
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

export default  CalenderStrip

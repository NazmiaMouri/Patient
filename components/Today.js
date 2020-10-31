import React, { useSatate, Component } from "react";
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/FontAwesome";
import { PATIENTS } from "../shared/patients";
import moment from "moment";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: PATIENTS,
      date: moment().format("YYYY-MM-DD"),
    };
  }
  
//   componentDidUpdate() {
//     if(this.state.date == 'undefined'){
//       this.setState({date: moment().format("YYYY-MM-DD")})
//     }
//     else{
//       const newdate = this.props.route.params.matchDate;
//     if (moment(this.state.date).isSame(newdate)) {
     
//     } else {
     
//       this.setState({ date: newdate });
//     }

//     }
    
//   }

  render() {
   
  
    const renderListItem = ({ item }) => {
        const currentTime=moment().format('HH:mm')
        const currentMilliSec=moment.duration(currentTime)._milliseconds
        console.log(currentTime)
        console.log(currentMilliSec)
        
     
      return (
        <View>
          <ListItem
            bottomDivider
            key={item.serialNo}
            title={
                <View style={{flexDirection : 'row' ,justifyContent:'space-between',width:'100%'}}> 
                  <Text >{item.name}</Text>
                  
                  {
                  ( moment(currentMilliSec).isSameOrBefore(moment.duration(moment(item.appointedTime,['h:mm A']).format("HH:mm") )._milliseconds )) 
                  ?
                
                 
                 <Badge
                 value={<Text style={{ padding : 5,color:'#fff'}}> Cont. </Text>}
                   status="success"
                />
                 
                 :
                 <View>
                    <Icon
                 name="history"
                 color='grey'
                 size={20}
                  />

                 </View>
               
                
                  }
                 </View>}
                
                  
                  
            subtitle={<View>
                      <Text style={{color:'gray'}} > Status : {item.status}</Text>
                      <Text  style={{color:'gray'}} > Appointed time : {item.appointedTime}</Text>

                     </View>
                     
                    }
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
    
   
    var list = this.state.patient.filter((patient) =>
      moment(patient.appointedDate).isSame(this.state.date)
    );
    { list.map((each)=>{
                 
      const time=moment(each.appointedTime,['h:mm A']).format("HH:mm")  //  12 To 24 HR Time Format
      const appointTime=moment.duration(time)._milliseconds
      const currentMoment=moment()
      const current=moment(currentMoment,['h:mm A']).format("HH:mm")   // 12 To 24 HR Time Format
      const currenTime=moment.duration(current)._milliseconds

    
    })
  }
    
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {list.length !== 0 ? (
          <FlatList
            data={list}
            renderItem={renderListItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              
            }}
          >
            <Text style={{ color: "gray", alignSelf: "center" }}>
              No appointment available
            </Text>
          </View>
        )}
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

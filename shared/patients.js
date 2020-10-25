import { Icon } from "react-native-elements";

export const PATIENTS = [
  {
    id: 0,
    appointedTime: "08:00 AM",
    appointedDate: "2020-10-28",
    name: "Andrew",
    image: require("../assets/man.png"),
    age: "30",
    gender: "Male",
    status: "Confirm",
    serialNo: 1,
    phoneNo: "+880 124 732 878",
    bloodGrp: "B+",
    onlineCons: "false",
    type: "New",
    emerg: "false",
  },
  {
    id: 1,
    appointedTime: "09:00 AM",
    appointedDate: "2020-10-28",
    name: "Lio",
    image: require("../assets/man.png"),
    age: "30",
    gender: "Male",
    status: "Pending",
    serialNo:2,
    phoneNo: "+880 124 732 878",
    bloodGrp: "B+",
    onlineCons: "false",
    type: "New",
    emerg: "false",
  },
  {
    id: 2,
    appointedTime: "10:00 AM",
    appointedDate: "2020-10-29",
    name: "Bella",
    image: require("../assets/man.png"),
    age: "20",
    gender: "Female",
    status: "Confirm",
    serialNo: 1,
    phoneNo: "+880 124 732 878",
    bloodGrp: "B+",
    onlineCons: "false",
    type: "New",
    emerg: "false",
  },
  {
    id: 3,
    appointedTime: "11:00 AM",
    appointedDate: "2020-10-29",
    name: "Alexa",
    image: require("../assets/man.png"),
    age: "30",
    gender: "Female",
    status: "Cancel",
    serialNo:2,
    phoneNo: "+880 124 732 878",
    bloodGrp: "B+",
    onlineCons: "false",
    type: "New",
    emerg: "false",
  },
  {
    id: 4,
    appointedTime: "12:00 PM",
    appointedDate: "2020-10-30",
    name: "Alexa",
    image: require("../assets/man.png"),
    age: "30",
    gender: "Female",
    status: "Cancel",
    serialNo:1,
    phoneNo: "+880 124 732 878",
    bloodGrp: "B+",
    onlineCons: "false",
    type: "New",
    emerg: "false",
  },
];
// { list ? 
        
//   <FlatList
//     data={list}
//     renderItem={renderListItem}
//     keyExtractor={(item) => item.id.toString()}
//   />
//   :
//  <View><Text h1>Empty</Text></View>
//  }


import React,{Component} from 'react';
import { View, FlatList, SafeAreaView,Text,Image } from 'react-native';
import { ListItem ,Avatar} from 'react-native-elements';
import { PATIENTS } from '../shared/patients';


// export class List extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             patients: PATIENTS,
//             selectedPatient: null
//           };
//         }
    
//    renderListItem = ({item, index}) => {

//         return (
            
//                 <ListItem bottomDivider
//                     key={index}
//                     title={item.name}
//                     subtitle={item.status}
//                     hideChevron={true}
//                     onPress={() => navigation.navigate('Detail')}
//                     leftAvatar={
                       
//                         <View>
//                             <Image source={item.image}
//                             style={{ width: 40, height: 40 }}/>

//                         </View>
//                     }
                  

//                     />
                   
                  
//         );
//     };
//     render() {
        
//         return (
//             <SafeAreaView>
//             <Text style={{fontWeight: "bold", margin: 10, fontSize:30}}>Patient List</Text>
//             <FlatList 
//                 data={patients}
//                 renderItem={renderListItem}
//                 keyExtractor={item => item.id.toString()}
//                 />

//             </SafeAreaView>
//         )
//     }
// }

// export default List


function List(props) {

    const renderListItem = ({item, index}) => {

        return (
            
                <ListItem bottomDivider
                    key={index}
                    title={item.name}
                    subtitle={item.status}
                    hideChevron={true}
                    onPress={()=>props.onPress(item.id)}
                    leftAvatar={
                       
                        <View>
                            <Image source={item.image}
                            style={{ width: 40, height: 40 }}/>

                        </View>
                    }
                  

                    />
                   
                  
        );
    };

    return (
        <SafeAreaView>
            <Text style={{fontWeight: "bold", margin: 10, fontSize:30}}>Appointments</Text>
            <FlatList 
                data={props.patients}
                renderItem={renderListItem}
                keyExtractor={item => item.id.toString()}
                />

        </SafeAreaView>
            
    );
}


export default List;



import React,{useSatate} from 'react';
import { View, FlatList, SafeAreaView,Text,Image,StyleSheet } from 'react-native';
import { ListItem ,Avatar} from 'react-native-elements';


// const [Selected, setSelected] = useState(null)

function List(props) {

  

    const renderListItem = ({item, index}) => {

        return (
            <View >

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

            </View>
               
             
                   
                  
        );
    };

    return (
        <SafeAreaView >
          
            <FlatList 
                data={props.patients}
                renderItem={renderListItem}
                keyExtractor={item => item.id.toString()}
                />

        </SafeAreaView>
            
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginVertical: 50,
      justifyContent: 'center',
    },
  });

export default List;

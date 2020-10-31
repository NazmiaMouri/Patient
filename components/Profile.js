import React from 'react';

import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


function Profile() {
    return (
      <Card>
      <Card.Title>Dr. Robert</Card.Title>
      <Card.Divider/>
     
            <View >
              <Image
                
                resizeMode="cover"
              
              />
              <Text></Text>
            </View>
        
    </Card>
    )
}

export default Profile

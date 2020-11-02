import React from 'react';
import {View,Text} from 'react-native';
import { AuthContext } from './context';

function Dashboard() {
    const {data}= React.useContext(AuthContext)
    return (
       
    
        <Text>{data}</Text>
       
       
    )
}


export default Dashboard

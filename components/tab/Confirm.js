import React from 'react';
import {Text} from 'react-native';
import Main from '../MainComponent';

function Confirm() {
    return (
        <>
         <Text style={{ fontWeight: "bold", margin: 10, fontSize: 20 }}>
          Confirmed
        </Text>
        <Main/>
        </>
    )
}

export default Confirm

import React from 'react';
import {Text} from 'react-native'
import Main from '../MainComponent';

function Pending() {
    return (
        <>
         <Text style={{ fontWeight: "bold", margin: 10, fontSize: 20 }}>
          Pending...
        </Text>
        <Main/>
        </>
        )
}

export default Pending

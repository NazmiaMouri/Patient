import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderPatient(props) {

    const patient = props.patient;
    
        if (patient != null) {
            return(
                <Card
                featuredTitle={patient.name}
                image={require('../assets/icon.png')}>
                    <Text style={{margin: 10}}>
                        {patient.status}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

function Detail(props) {
    return(<RenderPatient patient={props.patient} />);
}

export default Detail;
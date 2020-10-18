import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderPatient(props) {

    const patient = props.patient;
    
        if (patient != null) {
            return(
                <Card
                featuredTitle={patient.name}
                image={patient.image}>
                    <Text style={{margin: 10}}>
                    <Text style={{fontWeight: "bold"}}> Name :</Text> {patient.name}{"\n"}
                    <Text style={{fontWeight: "bold"}}> Age :</Text> {patient.age}{"\n"}
                    <Text style={{fontWeight: "bold"}}> Gender :</Text> {patient.gender}{"\n"}
                    <Text style={{fontWeight: "bold"}}> AppointMent Status :</Text> {patient.status}{"\n"}
                    <Text style={{fontWeight: "bold"}}> Appointment Date :</Text> {patient.date}
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
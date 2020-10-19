import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Login({ navigation }) {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return (
    <View style={styles.container}>
     <Text style={styles.title}>LOG IN</Text>
      <StatusBar style="auto" />

    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 150,marginBottom: 10, padding:10 }}
      placeholder='Username'
      onChangeText={text => onChangeUsername(text)}
      value={username} 
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 150,marginBottom: 10 ,padding:10 }}
      placeholder='Password'
      secureTextEntry={true}
      onChangeText={text => onChangePassword(text)}
      value={password}
    />
    <Button
        title="Log in"
        onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

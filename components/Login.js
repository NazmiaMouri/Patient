import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userError: true,
      passwordError: true,
      errMsgUser: "",
      errMsgPass: "",
    };
  }

  validate(text, type) {
    if (type === "username") {
      if (text === "admin") {
        this.setState({ userError: false });
      } else {
      }
    } else {
      if (text === "admin") {
        this.setState({ passwordError: false });
      } else {
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LOG IN</Text>
        <StatusBar style="auto" />

        <Input
          //style={{  borderColor: 'gray', borderWidth: 1 , width: 15,marginBottom: 10, padding:10 }}
          leftIcon={<Icon name="user" size={24} color="black" />}
          placeholder="Username"
          onChangeText={(text) => this.validate(text, "username")}
          errorMessage={this.state.errMsgUser}

          //value={this.state.username}
        />
        <Input
          //style={{ height: 40, borderColor: 'gray', borderWidth: 1 , width: 150,marginBottom: 10 ,padding:10 }}
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={<Icon name="key" size={24} color="black" />}
          onChangeText={(text) => this.validate(text, "password")}
          errorMessage={this.state.errMsgPass}
          //value={this.state.password}
        />
        <Button
          title="Log in"
          // onPress={this.validateRegister}
          onPress={() => {
            if (!this.state.userError && !this.state.passwordError) {
              this.props.navigation.navigate("Home");
            } else {
              if (this.state.userError == true) {
                this.setState({ errMsgUser: "Invalid Username" });
              } else if (this.state.passwordError == true) {
                this.setState({ errMsgPass: "Invalid Password" });
              }
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

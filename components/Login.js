import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";

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
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 80, height: 80 }}
        ></Image>
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
        <TouchableHighlight
          style={{
            backgroundColor: "rgb(53,156,164)",
            width: 200,
            padding: 10,
            alignItems: "center",
            borderRadius: 10,
            color: "#fff",
          }}
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
        >
          <Text style={{ fontWeight: "700", color: "#fff" ,fontSize:'20'}}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",

    // color:'white'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // color:'white',
    padding: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

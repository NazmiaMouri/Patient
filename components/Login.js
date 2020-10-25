import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableHighlight,
} from "react-native";
import moment from "moment";
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
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 80, height: 80 }}
        ></Image>
        <Text style={styles.title}>LOG IN</Text>
        <StatusBar style="auto" />

        <Input
          leftIcon={<Icon name="user" size={24} color="black" />}
          placeholder="Username"
          onChangeText={(text) => this.validate(text, "username")}
          errorMessage={this.state.errMsgUser}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={<Icon name="key" size={24} color="black" />}
          onChangeText={(text) => this.validate(text, "password")}
          errorMessage={this.state.errMsgPass}
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
          onPress={() => {
            const date = moment().format("YYYY-MM-DD");
            const today = moment(date).format("Do MMMM, YYYY ");
            this.props.navigation.navigate("Appointments", {
              selectedDate: "Today",
              matchDate: date,
            });

            // if (!this.state.userError && !this.state.passwordError) {
            //   this.props.navigation.navigate("Appointments", {
            //     selectedDate: "Today",
            //     matchDate: date,
            //   });
            //   // this.props.navigation.navigate("Home")
            // } else {
            //   if (this.state.userError == true) {
            //     this.setState({ errMsgUser: "Invalid Username" });
            //   } else if (this.state.passwordError == true) {
            //     this.setState({ errMsgPass: "Invalid Password" });
            //   }
            // }
          }}
        >
          <Text style={{ fontWeight: "700", color: "#fff" }}>Login</Text>
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

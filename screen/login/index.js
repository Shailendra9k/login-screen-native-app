import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Button,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";

const { width, height } = Dimensions.get("window");

const background = require("./bg.jpg");
const lock = require("./lock.jpg");
const login = require("./login.jpg");
const user = require("./user.jpg");

export default class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text>Hello There!</Text>
      </View>
    );
  }
}

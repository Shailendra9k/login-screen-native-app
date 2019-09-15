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
  ImageBackground,
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
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.logoContainer}>
            <Image source={login} style={styles.logo} resizeMode="contain" />
          </View>

          <View style={styles.wrapper}>
            <View style={styles.inputWrapper}>
              <View style={styles.iconWrapper}>
                <Image source={user} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholder="Your User Name"
                placeholderTextColor="#FFFFFF"
                style={styles.input}
              />
            </View>

            <View style={styles.inputWrapper}>
              <View style={styles.iconWrapper}>
                <Image source={lock} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholder="Your Password"
                placeholderTextColor="#FFFFFF"
                style={styles.input}
                secureTextEntry
              />
            </View>
            <TouchableOpacity>
              <View>
                <Text style={styles.forgotPassword}>Forgot your Password</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SignIn</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <View style={styles.signUpWrapper}>
              <Text style={styles.account}>You can also</Text>
              <TouchableOpacity>
                <View>
                  <Text style={styles.signUpLink}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width,
    height
  },
  logoContainer: {
    flex: 1,
    paddingVertical: 20
  },

  logo: {
    width: null,
    height: null,
    flex: 1
  },
  wrapper: {
    paddingVertical: 30
  },
  inputWrapper: {
    flexDirection: "row",
    marginVertical: 15,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#c1c1c1"
  },
  iconWrapper: {
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    height: 20,
    width: 20
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "#41eba3",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20
  },
  forgotPassword: {
    color: "#c1c1c1",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 20
  },
  signUpWrapper: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  account: {
    color: "#c1c1c1"
  },
  signUpLink: {
    color: "#ffffff",
    marginLeft: 20
  }
});

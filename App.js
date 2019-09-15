import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  onPressButton() {
    console.log("Button is pressesd");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here"
          onChangeText={text => this.setState({ text })}
        />

        <Text style={{ padding: 10, fontSize: 30, backgroundColor: "#e74c3c" }}>
          {this.state.text}
        </Text>
        <TouchableHighlight onPress={this.onPressButton}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center"
  }
});

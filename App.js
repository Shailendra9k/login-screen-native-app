import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center"
  }
});

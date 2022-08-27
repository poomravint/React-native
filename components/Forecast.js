import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Forecast = ({ main, description, temp }) => {
  return (
    <View style={{flex:1, justifyContent:'space-evenly'}}>
      <Text style={styles.content}>{main}</Text>
      <Text style={styles.content}>{description}</Text>
      <Text style={styles.content}>{temp} °C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
});

export default Forecast;
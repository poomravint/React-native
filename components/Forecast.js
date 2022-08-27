import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Forecast = ({ main, description, temp }) => {
  return (
    <View style={{flex:1, justifyContent:'space-evenly'}}>
      <Text style={styles.Text}>Main</Text>
      <Text style={styles.Text2}>{main}</Text>
      <Text style={styles.Text}>Description</Text>
      <Text style={styles.Text2}>{description}</Text>
      <Text style={styles.Text}>Temperature</Text>
      <Text style={styles.Text2}>{temp} °C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    Text: {
        fontSize: 15 ,
        textAlign: 'center' ,
        paddingTop: 5,
        color: 'white'
    },
    Text2: {
        fontSize: 20 ,
        textAlign: 'center' ,
        paddingTop: 5,
        color: 'blue'
    },
});

export default Forecast;
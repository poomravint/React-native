import { View, Text, FlatList, StatusBar, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import {useNavigation} from '@react-navigation/native'

const availableZipItems = [
  { place: "Hatyai", code: "90110" },
  { place: "Trang", code: "92000" },
  { place: "Chiangmai", code: "50000" },
  { place: "Khonkaen", code: "40000" },
  { place: "Chonburi", code: "20000" },
];
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight style={{backgroundColor:'rgba(182, 182, 182, 0.8)'}} onPress={() => {
        navigation.navigate('Weather', { zipCode: code})}}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
);
const _keyExtractor = (item) => item.code;

export default function ZipCodeScreen() {
    const navigation = useNavigation()
  return (
    <View>
      <FlatList
        data={availableZipItems}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 30,
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    }
})
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.View}>
      <View style={styles.imageContainer}>
        <Image style={styles.Image} source={{ uri: result.image }} />
      </View>
      <View style={styles.textContainer}>
        <Text>{result.name}</Text>
        <Text>
          {result.cost}eur {result.time}min
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 250,
    height: 200,
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
  },
  View: {
    marginLeft: 30,
    padding: 10,
  },
  textContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFA07A',
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      
  }
});

export default ResultsDetails;

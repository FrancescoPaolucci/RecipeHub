import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { withNavigation } from "react-navigation";

const image = {uri: 'https://previews.123rf.com/images/sn333g/sn333g1801/sn333g180100252/94128213-simple-fast-food-vector-seamless-pattern-or-texture-made-with-thin-line-fast-food-icons.jpg'}
const StartScreen = ({ navigation }) => {
  return (
      
    <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to FoodHub!</Text>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.option}>
          Would you like to see recipes or restaurants?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Recipes"
            onPress={() => navigation.navigate("Index")}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Restaurants"
            onPress={() => navigation.navigate("Search")}
          />
        </View>
      </View>
      <View style = {styles.image}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "black",
    fontFamily: "Arial",
    padding: 20,
  },
  header: {
    flex: 4,
    backgroundColor: "#CD5C5C",
    paddingVertical: 20,
    elevation: 20,
   

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",

  },
  optionContainer: {
      backgroundColor:"#CD5C5C",
    elevation: 10,

      
  },
  option: {
    marginVertical: 30,
    marginLeft: 50,
    fontSize: 20,
    color: "white"
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#CD5C5C",
    
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    elevation: 20,
    
  },
  button: {
    width: 150,
    height: 70,
   
  },
  image: {
    flex: 4,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default withNavigation(StartScreen);

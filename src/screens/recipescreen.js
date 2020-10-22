import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { withNavigation } from "react-navigation";

const recipescreen = ({ navigation }) => {
  const recipe = navigation.getParam("item");

  return (
    <View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: recipe.image,
          }}
        />
      </View>
      <View style = {styles.nameContainer}>
      <Text style = {styles.name}>{recipe.name}</Text>
      </View>
      <View style = {styles.ctContainer}>
        <View style = {{width: 100, alignItems: 'center'}}>
        <Text style = {styles.cost}>Cost: {recipe.cost}eur</Text>
        </View>
        <View style = {{width: 100, alignItems: 'center'}}>
        <Text style = {styles.time}>Time: {recipe.time}mins</Text>
        </View>
      </View>
      <View style = {styles.methodContainer}>
      <Text style = {styles.method}>{recipe.method}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  img: {
    width: 350,
    height: 350,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#CD5C5C",
    
  },
  nameContainer:{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
backgroundColor:  "#CD5C5C",
padding: 10,
borderBottomWidth: 1,


  },
  name: {
fontSize: 30,
fontWeight: 'bold',
fontStyle: 'italic',
fontFamily: 'Staatliches-Regular'
  },
  ctContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
backgroundColor: '#E9967A',
borderBottomColor: 'black',
borderBottomWidth: 1,
elevation: 10
  },
  cost: {
fontSize: 16,
  },
  time: {
    fontSize: 16,
  },
  methodContainer:{
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#EF9A9A',
padding: 20,
paddingBottom: 200,
  },
  method: {
fontSize: 20,
  }
});

export default withNavigation(recipescreen);

import React, { useState, useEffect } from "react";
import {
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
// import { TextInput } from "react-native-gesture-handler";

const AddData = () => {
  const [recipe, setRecipe] = useState([]);
  const [RecipeName, setRecipeName] = useState("");
  const [RecipeCost, setRecipeCost] = useState("");
  const [Recipetime, setRecipetime] = useState(0);
  const [RcipeImage, setRecipeImage] = useState("");
  const [RecipeMethod, setRecipeMethod] = useState("");

  const addRecipeHandler = () => {
    setRecipe([
      {
        name: RecipeName,
        cost: RecipeCost,
        time: Recipetime,
        image: RcipeImage,
        method: RecipeMethod,
      },
    ]);
    saveRecipe();
  };

  async function saveRecipe() {
    const response = await fetch(
      "https://ringed-bebop-293214.appspot.com/rest/Recipeservice/addingRecipe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: RecipeName,
          cost: RecipeCost,
          time: Recipetime,
          image: RcipeImage,
          method: RecipeMethod,
        }),
      }
    );
    Alert.alert("New Recipe added");
  }
  return (
    <View style={styles.container}>
      <View style = {styles.titleContainer}>
        <Text style = {styles.title}>Add your Recipe</Text>
      </View>
      <View style={styles.nameContainer}>
        <TextInput
          placeholder="Name of the recipe"
          style={styles.inputStyle}
          onChangeText={(newValue) => setRecipeName(newValue)}
          value={RecipeName}
        />
      </View>
      <View style={styles.ctContainer}>
        <View style={styles.cost}>
          <TextInput
            placeholder="Cost (in eur)"
            style={styles.inputStyle}
            onChangeText={(newValue) => setRecipeCost(newValue)}
            value={RecipeCost}
          />
        </View>
        <View style={styles.time}>
          <TextInput
            placeholder="Time (in mins)"
            style={styles.inputStyle}
            onChangeText={(newValue) => setRecipetime(newValue)}
            value={Recipetime}
          />
        </View>
      </View>
      <View style={styles.imgContainer}>
        <TextInput
          placeholder="Image Url"
          style={styles.inputStyle}
          onChangeText={(newValue) => setRecipeImage(newValue)}
          value={setRecipeImage}
        />
      </View>
      <View style={styles.methodContainer}>
        <TextInput
          placeholder="Method of Cooking"
          style={styles.inputStyle}
          onChangeText={(newValue) => setRecipeMethod(newValue)}
          value={RecipeMethod}
        />
      </View>
      <View style={styles.buttoncontainer}>
        <Button title="Add" onPress={addRecipeHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: 'center',
    borderColor: "#CD5C5C",
    borderWidth: 2,
  },
  titleContainer:{
marginVertical: 50,
backgroundColor: "#CD5C5C",
width: '100%',
alignItems: 'center'
  },
  title:{
fontSize: 30,
fontWeight: 'bold',
fontStyle: 'italic',
textDecorationLine: 'underline',
color: 'white'

  },
nameContainer:{
  width: 300,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  borderColor: '#CD5C5C',
  borderWidth: 2,
  margin: 10,

},
ctContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 20,
  margin: 10,



},
cost:{
width: 145,
padding: 20,
borderColor: '#CD5C5C',
borderWidth: 2,
marginRight: 10,

},
time:{
width: 145,
padding: 20,
borderColor: '#CD5C5C',
borderWidth: 2,

},
imgContainer:{
  width: 300,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  borderColor: '#CD5C5C',
  borderWidth: 2,
  margin: 10,


},
methodContainer:{
  width: 300,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  borderColor: '#CD5C5C',
  borderWidth: 2,
  margin: 10,


},
buttoncontainer:{
  paddingTop: 50,
  width: 300
}
});

export default AddData;

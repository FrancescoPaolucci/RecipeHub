import React, { useState, useEffect } from "react";
import {Button, TextInput, View, Text, FlatList, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
// import { TextInput } from "react-native-gesture-handler";

const AddData = () => {
  const [recipe, setRecipe]=useState([]);
  const [RecipeName, setRecipeName]=useState('');
  const [RecipeCost, setRecipeCost]=useState('');
  const [Recipetime, setRecipetime]=useState(0);
  const [RcipeImage, setRecipeImage]=useState('');
  const [RecipeMethod, setRecipeMethod]=useState('');

  const addRecipeHandler=()=>{
  
    setRecipe([{name:RecipeName, cost:RecipeCost, time:Recipetime, image:RcipeImage, method:RecipeMethod}]);
    saveRecipe();
  }


  async function saveRecipe() {
    const response = await fetch("https://ringed-bebop-293214.appspot.com/rest/Recipeservice/addingRecipe",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:RecipeName, cost:RecipeCost, time:Recipetime, image:RcipeImage, method:RecipeMethod})
    });
    Alert.alert("New Recipe added");

  }
    return (
      <ScrollView style={{marginTop:50, flex:1}}>
      <View style={styles.inputcontainer}>
        <TextInput placeholder="Name" 
                  style={styles.inputStyle} 
                  onChangeText={(newValue)=>setRecipeName(newValue)}
                  value={RecipeName}/>  
        <TextInput placeholder="Time" 
                  style={styles.inputStyle} 
                  onChangeText={(newValue)=>setRecipetime(newValue)}
                  value={Recipetime}/>  
        <TextInput placeholder="Cost" 
                  style={styles.inputStyle} 
                  onChangeText={(newValue)=>setRecipeCost(newValue)}
                  value={RecipeCost}/>
           <TextInput placeholder="Image Url" 
                  style={styles.inputStyle} 
                  onChangeText={(newValue)=>setRecipeImage(newValue)}
                  value={setRecipeImage}/>    
              <TextInput placeholder="Method" 
                  style={styles.methodinput} 
                  onChangeText={(newValue)=>setRecipeMethod(newValue)}
                  value={RecipeMethod}/>   

      </View> 
      <View style={styles.buttoncontainer}>
        <Button title="Add" onPress={addRecipeHandler}/>
      </View>
      </ScrollView> 
    );
};

const styles=StyleSheet.create({

  methodinput:{
    width:300,
    height:300,
    padding:10,
    borderWidth:2,
    borderColor:'#f00',
  },
  listItem:{
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#0f0',
    backgroundColor: '#fce',    
  },
  inputcontainer: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    justifyContent:'space-evenly',
},
  buttoncontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  inputStyle:{
    width:100,
    height:50,
    padding:10,
    borderWidth:2,
    borderColor:'#f00',
  },

})

export default AddData;
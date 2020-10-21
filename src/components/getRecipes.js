import React, { useState, useEffect } from "react";
import {View, Text, FlatList, StyleSheet, Alert, Button} from 'react-native';

export default ()=> {
  const [hasError, setErrors] = useState(false);
  const [someError, setSomeErrors] = useState('');
  const [recipes, setRecipes] = useState([]);

  
 


//And the third version with longer code and normal single function calls.
  async function fetchData() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let res = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      res=await fetch("https://ringed-bebop-293214.appspot.com/rest/Recipeservice/getRecipes");
    }
    catch(error){
      setErrors(true);
    }

    try{
      //Getting json from the response
      const responseData = await res.json();
      console.log(responseData);//Just for checking.....
      setRecipes(responseData);
    }
    catch(err){
      setErrors(true);
      setSomeErrors("ERROR: "+hasError+ " my error "+err);
      console.log(someError);
    }
  }

  useEffect(() => {
      fetchData();
  },[]);


    return [recipes,hasError];
  
};

const styles=StyleSheet.create({});

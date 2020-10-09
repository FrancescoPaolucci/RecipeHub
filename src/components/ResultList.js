import React  from "react";
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ResultsDetails from '../components/ResultsDetail';
import * as axios from 'axios';





const ResultList = ({title, recipes,hasError}) => {

  const deleteRecipe=async(id)=>{
    const response = await fetch("https://recipehub-291212.ew.r.appspot.com/rest/Recipeservice/deleterecipe/"+id,
    {
      method:'DELETE',
    });
 
  }


    return (
      <View style={{marginTop:50}}>
        <Text>{title} </Text>
        <Text>{hasError} </Text>
        <FlatList
            horizontal={true}
            data={recipes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => { return(
                <TouchableOpacity onPress={()=>('ShowMethod',{id: item.id})} onLongPress={()=>deleteRecipe(item.id)} >
              <View>
                  <ResultsDetails result={item}/>
              </View>
              </TouchableOpacity>
            )}}
            
        />
      </View>
    );
  }

const styles=StyleSheet.create({});

export default ResultList;
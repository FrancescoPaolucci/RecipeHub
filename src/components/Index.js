import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ResultList from './ResultList'
import getRecipes from './getRecipes'
import { ScrollView } from 'react-native-gesture-handler';

const Index = ({navigation})=>{

  const [recipes,hasError] = getRecipes();

const filterResultsBytime = (time,time1) =>{

  return recipes.filter (recipe =>{
      return recipe.time >= time && recipe.time <= time1 ;
      
  });
};
   
return(
  <View >   
    <ScrollView>
{hasError ? <Text>{hasError}</Text> : null} 
<ResultList recipes={filterResultsBytime(45,1000)} title="Takes a lot of time" />
<ResultList recipes={filterResultsBytime(30,40)} title="Takes some time" />
<ResultList recipes={filterResultsBytime(0,30)} title="Quick cooking" />
<Button 
    onPress={()=>navigation.navigate('Add')}
    title= "Add recipe!" 
    
    />
    </ScrollView>
  </View>
)
}


const styles = StyleSheet.create({
  
});

export default Index;
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ResultList from '../components/ResultList'
import getRecipes from '../components/getRecipes'
import { ScrollView } from 'react-native-gesture-handler';

const Index = ({navigation})=>{

  const [recipes,hasError] = getRecipes();

const filterResultsBytime = (time, samay) =>{

  return recipes.filter (recipes =>{
      return recipes.time >= time && recipes.time <= samay;
      
  });
};
   
return(
  <View >   
    <ScrollView>
{hasError ? <Text>{hasError}</Text> : null} 
<ResultList recipes={filterResultsBytime(45,1000)} title="More or eq 40" />
<ResultList recipes={filterResultsBytime(30, 40)} title="More than 30 less 60" />
<ResultList recipes={filterResultsBytime(0, 30)} title="more than 0 less eq 30" />
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
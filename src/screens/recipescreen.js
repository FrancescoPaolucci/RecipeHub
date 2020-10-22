import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import {withNavigation} from 'react-navigation';

 
const recipescreen = ({navigation}) => {

    const method = navigation.getParam('method');
    console.log(method)
  return(

    <View>
        <Text>{method}</Text>
    </View>

      
  
  )
}

 
const styles = StyleSheet.create({
 
});
 
export default recipescreen;
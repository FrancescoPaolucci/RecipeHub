import React from 'react';
import {View, Text, StyleSheet,Image } from 'react-native';
         
const ResultsDetails = ({result}) => {
    return( 
    <View style={styles.View}>
          <Image style={styles.Image} source={{uri: result.image}}/>
 
        <Text>{result.name}</Text>
        <Text>{result.cost}  {result.time}min</Text>
        
    </View>
    )
}

const styles = StyleSheet.create({
    Image:{
        width: 250,
        height:200,
        borderRadius: 1
        
    },
    View:{
        marginLeft:30
    }
});

export default ResultsDetails

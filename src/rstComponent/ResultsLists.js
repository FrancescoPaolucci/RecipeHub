import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ResultsDetails from '../rstComponent/ResultsDetails';
import {withNavigation} from 'react-navigation';

const ResultsLists = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
return (
    <View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
       <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result)=>result.id}
        renderItem={({item})=>{
         
           return (
               <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow',{method: item.method})}>
            <ResultsDetails result={item}/>
            </TouchableOpacity>
           ) 
        }}
       /> 
    </View>
);

};

const styles = StyleSheet.create({

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }

});

export default withNavigation(ResultsLists);
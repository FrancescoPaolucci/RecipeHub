import React, {useState, useEffect} from 'react'
import {View,Text,StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen=({navigation})=>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async id =>{
    const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(()=> {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }
     
    return (
        <View style={styles.view}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return( 
                     <Image style={styles.image} source ={{uri: item}}/> 
                )

            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height:250,
        width: 370,
        borderWidth: 3,
        borderColor: '#d4467c',
        marginTop:5
        
      
        
        

    },

    view:{
        marginTop:10,
        marginBottom: 20,
        alignSelf:'center'
    },

    title:{
            fontSize:30,
            alignSelf:'center'
           
    }

});

export default ResultsShowScreen;
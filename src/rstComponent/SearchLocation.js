import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
// Feather è il nome della libreria contenente l'icona e ovviamente "search" è il nome dell'icona :D

const Searchlocation = ({location,onLocationChange,onLocationSubmint,}) =>{
    return(
        <View style={styles.backgroundStyle}>  
        <Entypo name="location-pin" style={styles.iconStyle} /> 
        <TextInput 
        style={styles.inputStyle} 
        placeholder= "Search Location"
        value = {location}
        onChangeText={newLocation => onLocationChange(newLocation)}
        onEndEditing={()=>onLocationSubmint()}
            />

    </View>
    );
};



const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15, 
        flexDirection: 'row'

    },

    inputStyle:{
        fontSize: 18,
        flex: 1,
        
    },

    iconStyle:{
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal: 12
    }
});

export default Searchlocation;
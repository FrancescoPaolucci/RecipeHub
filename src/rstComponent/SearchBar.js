import React, {useState} from 'react'
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
// Feather è il nome della libreria contenente l'icona e ovviamente "search" è il nome dell'icona :D
const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return(
     <View style={styles.backgroundStyle}>
         <Feather name="search" style={styles.iconStyle} /> 
        <TextInput 
        style={styles.inputStyle} 
        placeholder= "Search"
        value = {term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={()=>onTermSubmit()}
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

export default SearchBar;
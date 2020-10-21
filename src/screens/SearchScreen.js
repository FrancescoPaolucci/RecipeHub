import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../rstComponent/SearchBar';
import useResults from '../hooks/useResult';
import ResultsLists from '../rstComponent/ResultsLists';
import Searchlocation from '../rstComponent/SearchLocation';



const SearchScreen = () =>{
    
    const[term, setTerm] = useState('Pasta');
    const [searchApi, results, errormessage] = useResults('');
    const [location, setLocation] = useState('Firenze');

    const filterResultsByPrice = (price) =>{

        return results.filter (result =>{
            return result.price === price;
        });
    };

    return <View style={{flex:1}}>
        <SearchBar term={term}
         onTermChange={setTerm} 
         onTermSubmit={()=>searchApi(term,location)}
        
        />
        <Searchlocation location={location}
            onLocationChange={setLocation}
            onLocationSubmint={()=>searchApi(term,location)}
            
            />

       {errormessage ? <Text>{errormessage}</Text> : null} 
        <Text style={{paddingLeft:15}}>We have found {results.length} results</Text>
        <ScrollView>
        <ResultsLists results={filterResultsByPrice('€')}  title="Cost Effective"/>
        <ResultsLists results={filterResultsByPrice('€€')} title ="Bit Pricier" />
        <ResultsLists results={filterResultsByPrice('€€€')} title ="Bit Spender"/>
        </ScrollView>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;
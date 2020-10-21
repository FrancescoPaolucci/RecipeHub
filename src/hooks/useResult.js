import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () =>{


    const [results, setResults]= useState([]);
    const [errormessage, setErrormessage]= useState('');

    const searchApi = async (searchTerm,searchLoc) =>{
        try{
        const response = await yelp.get('/search',{
            params: {
                limit:50,
                term: searchTerm,
                location: searchLoc
            }
        });
        setErrormessage(null);
        setResults(response.data.businesses)
    } catch (err) {
        setErrormessage('Something went wrong  ...');
        console.log(err);
     }
    }

    useEffect(()=>{

        searchApi('pasta','Firenze');
    },[])
   

    return [searchApi, results, errormessage];
};

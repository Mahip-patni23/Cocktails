import React, { useContext, useEffect, useState } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a')

    const fetchData = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const {drinks} = data 
            if(drinks){
            const newCocktails = drinks.map((drink) => {
               const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;
               return {id: idDrink, name: strDrink, glass: strGlass, image: strDrinkThumb, info: strAlcoholic};
            })
            setCocktails(newCocktails);
        }else{
            setCocktails([])
        }
        setLoading(false)
        }catch(error){
            console.log(error);
            setLoading(false);
        }   
    }, [searchTerm])

    useEffect(() => {
        fetchData();
    }, [searchTerm, fetchData]);
    
    return <AppContext.Provider value={{cocktails, loading, searchTerm, setSearchTerm}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider}
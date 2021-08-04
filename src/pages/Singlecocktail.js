import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import { useCallback } from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const Singlecocktail = () => {
    const {id} = useParams();
    const [cocktail, setCocktail] = useState(null)
    const [loading, setLoading] = useState(false);

    const getCocktail = useCallback(async() => {
        setLoading(true);
        try{
        const response = await fetch(`${url}${id}`);
        const data  = await response.json();
        console.log(data);
        if(data.drinks){
        const { 
            strDrink: name, 
            strDrinkThumb: image, 
            strAlcoholic: info, 
            strGlass: glass,
            strCategory: category,
            strInstructions: instructions, 
            strIngredient1, 
            strIngredient2, 
            strIngredient3,
            strIngredient4} = data.drinks[0];
        const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4];

        const newCocktail = {
            name,
            image, 
            info,
            category, 
            glass, 
            instructions,
            ingredients
        };
        setCocktail(newCocktail);
        
    }else{
        setCocktail(null);
    }
    setLoading(false);

    }catch(error){
        console.log(error);
        setLoading(false);
    }
    }, [id])


    useEffect(() => {
        getCocktail();
    }, [id, getCocktail])

    if(loading){
        return <Loading></Loading>
    }
    if(!cocktail){
        return <section className="single-cocktail">
            <h2>No cocktail To Display</h2>
        </section>
    }else{
        const {name, image, info, category,  glass, instructions, ingredients} = cocktail;
    
    return <section className="single-cocktail">
        <Link to="/" className="btn back-home-btn">Back Home</Link>
        <div className="cocktail-container">
            <h2>{name}</h2>
            <div className="full-container">
                <img src={image} alt={name} />
                <div className="info-container">
                    <p><span className="tag">name: </span>{name}</p>
                    <p><span className="tag">category: </span>{category}</p>
                    <p><span className="tag">info: </span>{info}</p>
                    <p><span className="tag">glass: </span>{glass}</p>
                    <p><span className="tag">instructions: </span>{instructions}</p>
                    <p><span className="tag">ingredients :</span>
                    {
                      ingredients.map((item, index) => {
                        return item ? <span key={index}> {item}</span> : null
                    })}</p>
                </div>
            </div>
            
        </div>
    </section>
    }
}

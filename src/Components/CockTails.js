import React from 'react';
import { useGlobalContext } from '../context';
import SingleCocktail from './SingleCocktail';
import Loading from './Loading';

const Cocktails = () => {
    const {cocktails, loading} = useGlobalContext();

    if(loading){
      return <Loading></Loading>
    }

    if(cocktails.length < 1){
      return <section className="cocktails">
        <h2>No Cocktails Matched Your Criteria</h2>
      </section>
    }

    return <section className="cocktails">
      <h2>cocktails</h2>
      <div className="container">
        {
          cocktails.map((item) => {
            return <SingleCocktail key={item.id} {...item}></SingleCocktail>
          })
        }
      </div>
    </section>
}

export default Cocktails
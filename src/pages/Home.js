import React from 'react';
import Cocktails from '../Components/CockTails';
import SearchForm from '../Components/SearchForm';
import Copyright from '../Components/Copyright';

export const Home = () => {
    return <main>
        <SearchForm></SearchForm>
        <Cocktails></Cocktails>
        <Copyright></Copyright>
    </main>
} 
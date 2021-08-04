import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = useRef('');

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    searchValue.current.focus();
  }, [])

    return <header className="search-form">
      <form className="form-control" onSubmit={handleSubmit}>
        <label htmlFor="search">search your favourite cocktail</label>
        <input type="text" ref={searchValue} onChange={searchCocktail}/>
      </form>
    </header>
}

export default SearchForm
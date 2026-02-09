import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SelectMenu from './components/SelectMenu';
import CountryCard from './components/CountryCard';
import CountriesContainer from './components/CountriesContainer';
import { useState } from 'react';
import './App.css';
const App = () => {
  const [query,setQuery] = useState('')
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQueryProp={setQuery}/>
          <SelectMenu />
        </div>
       <CountriesContainer queryProp={query}/>
      </main>
    </>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
// import countriesdata from '../../countriesdata';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';
export default function CountriesContainer({ queryProp }) {
  const [countriesdata, setCountriesData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,tld,languages,borders',
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
    console.log('hi');
    
    return () => {
      return console.log('clearning');
    }

  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> count</button>
      <div className="countries-container">
        {countriesdata
          .filter((country) =>
            country.name.common.toLocaleLowerCase().includes(queryProp),
          )
          .map((country) => {
            // console.log(country.name.common)

            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString()}
                capital={country.capital?.[0]}
                region={country.region}
              />
            );
          })}
      </div>
    </>
  );
}

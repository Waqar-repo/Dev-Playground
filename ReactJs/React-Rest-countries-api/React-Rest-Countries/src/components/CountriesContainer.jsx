import React from 'react';
import countriesdata from '../../countriesdata';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';
export default function CountriesContainer({queryProp}) {
  // console.log(countriesdata)

  return <div className="countries-container">{

countriesdata.filter((country)=> country.name.common.toLocaleLowerCase().includes(queryProp)).map((country) => {
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
}

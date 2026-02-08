import React from 'react';
import countriesdata from '../../countriesdata';
import CountryCard from './CountryCard';
export default function CountriesContainer() {
  // console.log(countriesdata)
  const array = countriesdata.map((country) => {
    console.log(country.region);
    return (
      <CountryCard
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population}
        capital={country.capital[0]}
        region={country.region}
      />
    );
  });
  // console.log(array)
  return <div className="countries-container">{array}</div>;
}

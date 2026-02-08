import React from 'react';

function CountryCard(props) {
  const {name,flag,population,capital,region} = props
  return (
    <a className="country-card" href="/country.html?name=Mauritania">
      <img src={flag} alt="flag" />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population</b>: {population}
        </p>
        <p>
          <b>Region</b>: {region}
        </p>
        <p>
          <b>Capital</b>: {capital}
        </p>
      </div>
    </a>
  );
}

export default CountryCard;

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router';
import LoadingCard from './LoadingCard';
import BackButton from './BackButton';

export default function CountriesDetail() {
  const [countryData, setCountryData] = useState({});
  const [loadingone, setLoadingone] = useState(true);
  const [countryFound,setcountryFound] = useState(false)
  // const countryName = new URLSearchParams(window.location.search).get('name');
  
  const params =  useParams()
  const countryName = params.country
  
  useEffect(() => {
    
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setLoadingone(false)
        
       
       
        setCountryData({
          name: data[0].name.common,
          flag: data[0].flags.svg,
          nativeName: Object.values(data[0].name.nativeName)[0].common,
          population: data[0].population,
          region: data[0].region,
          subRegion: data[0].subregion,
          capital: data[0].capital[0] || 'N/A',
          domain: data[0].tld[0] || '',
          currencies: data[0].currencies ? Object.values(data[0].currencies)[0].name : 'No official currency',
          language: data[0].languages ? Object.values(data[0].languages)[0] : 'No official language',
          map:data[0].maps.googleMaps
        
        })
      })
      .catch(err =>{
          setcountryFound(true)
        })
  }, []);
if(loadingone){
  return (
    <div className="country-container-country">
      <LoadingCard />
    </div>
  )
}
if(countryFound){
  return <div>Something Went Wrong</div>
}
  return (
    <>
    <BackButton />
    <div className="country-container-country">
      <div className="country-img">
        <img src={countryData.flag} alt="flag" />
      </div>
      <div className="mainData">
        <div className="country-data">
          <h1>{countryData.name}</h1>
          <p>
            <strong>Native Name:</strong> {countryData.nativeName}
          </p>
          <p>
            <strong>Population:</strong> {countryData.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {countryData.region}
          </p>
          <p>
            <strong>Sub Region:</strong> {countryData.subRegion}
          </p>
          <p>
            <strong>Capital:</strong> {countryData.capital}
          </p>
        </div>
        <div className="country-data-one">
          <p>
            <strong>Top Level Domain:</strong> {countryData.domain}
          </p>
          <p>
            <strong>Currencies:</strong> {countryData.currencies}
          </p>
          <p>
            <strong>Languages:</strong> {countryData.language}
          </p>
          <div className="border">
            
          </div>
        </div>
      </div>
    </div>
<div className="map-container">
  <iframe

    src={`https://www.google.com/maps?q=${countryData.name}&output=embed`}
  ></iframe>
</div>
            
    </>
  );
}

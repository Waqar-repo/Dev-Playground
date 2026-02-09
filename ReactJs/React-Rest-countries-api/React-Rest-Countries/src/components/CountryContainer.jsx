import React from 'react';

function CountryContainer() {
  return (
    <div className="country-container-country">
      <div className="country-img">
        <img src="https://flagcdn.com/tt.svg" alt="flag" />
      </div>
      <div className="country-data">
        <h1>Trinidad and Tobago</h1>
        <div className="country-details">
          <p>
            <strong>Native Name:</strong> Trinidad and Tobago
          </p>
          <p>
            <strong>Population:</strong> 1,367,764
          </p>
          <p>
            <strong>Region:</strong> Americas
          </p>
          <p>
            <strong>Sub Region:</strong> Caribbean
          </p>
          <p>
            <strong>Capital:</strong> Port of Spain
          </p>
          <p>
            <strong>Top Level Domain:</strong> .tt
          </p>
          <p>
            <strong>Currencies:</strong> Trinidad and Tobago dollar
          </p>
          <p>
            <strong>Languages:</strong> English
          </p>
        </div>
        <div className="border">
          <h4>Border Countries:</h4>
          <div className="border-list">
            <span>None</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryContainer;

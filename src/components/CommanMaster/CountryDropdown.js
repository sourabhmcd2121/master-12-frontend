// src/CountryDropdown.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CountryDropdown = ({ onCountrySelect,selectedCountryValue }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Fetch country data from the API
    axios.get('http://localhost:8086/web/master/getCountryNameList')
      .then(response => {
        if (response.data.status) {
          // Transform the data to fit MUI's Autocomplete format
          const countryOptions = Object.entries(response.data.countryNameList).map(([code, name]) => ({
            code,
            name,
          }));
          setCountries(countryOptions);
          if(selectedCountryValue != null){
            setSelectedCountry(countryOptions.filter(e =>e.code == selectedCountryValue )[0]);
          }
        } else {
          console.error('Failed to fetch countries:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (event, value) => {
    setSelectedCountry(value);
    //console.log(value);
     //debugger;
    if (value) {
      // Pass the selected country's code to the parent component
      onCountrySelect(value.code);
    } else {
      onCountrySelect(null); // Handle case where no country is selected
    }
  };

  return (
    <div>
      <Autocomplete
        id="country-dropdown"
        options={countries}
        getOptionLabel={(option) => option.name}
        value={selectedCountry}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label="Select a country" variant="outlined" />}
      />
    </div>
  );
};

export default CountryDropdown;

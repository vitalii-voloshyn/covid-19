import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chart from './Chart';

const Detailed = () => {
  const [countries, setCountries] = useState([
    {Country: 'Ukraine', Slug: 'ukraine', ISO2: 'UA'}
  ]);
  const [countryCode, setCountryCode] = useState('ukraine');
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    api.get('/countries').then(res => setCountries(res.data))
  },[]);

  useEffect(() => {
    api.get('/total/country/' + countryCode)
    .then(res => setCountryData(prepareData(res.data)))
  }, [countryCode]);

 const handleChange = (e) => {
    setCountryCode(e.target.value)
  }
console.log(countryData)
  return (
    <>
      <h1>Detailed</h1>
      <Select
        label="country"
        id="country"
        value={countryCode}
        onChange={handleChange} >
      
        {countries.map(country => (
          <MenuItem
            key={country.Slug}
            value={country.Slug} 
            >
            {country.Country}
          </MenuItem>
        ))}
      </Select>
      {countryData ?  <Chart data={countryData}/> : null}
    </>
  )
}

export default Detailed

function prepareData(data) {
  const chartData = {
    labels: [],
    active: [],
    deaths: [],
    recovered: []
  }

  data.forEach((el)  => {
    chartData.labels.push(el.Date.replace(/T.*$/, ''));
    chartData.active.push(el.Active);
    chartData.deaths.push(el.Deaths);
    chartData.recovered.push(el.Recovered);
  });

  return chartData
}

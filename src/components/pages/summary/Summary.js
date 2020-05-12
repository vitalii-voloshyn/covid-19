import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import Grid from '@material-ui/core/Grid';
import GlobalDataBlock from './GlobalDataBlock';
import CountryDataBlock from './CountryDataBlock';


const Summary = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/summary').then(res => setData(res.data))
  }, [])

  return data ? (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <GlobalDataBlock data={data.Global} />
      </Grid>
      {data.Countries.map(country => (
        <Grid item xs={6} sm={3} key={country.CountryCode}>
          <CountryDataBlock data={country} />
        </Grid>
      ))}
    </Grid>
  ) : null
}

export default Summary

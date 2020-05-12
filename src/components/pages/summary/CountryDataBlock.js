import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const CountryDataBlock = ({data : {
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered,
  Country
}}) => {
  return (
    <Paper>
      <Typography variant="h4">{Country} </Typography>
      <Typography variant="h6">Confirm: {TotalConfirmed} </Typography>
      <Typography variant="h6">Death: {TotalDeaths} </Typography>
      <Typography variant="h6">Recovered: {TotalRecovered} </Typography>
    </Paper>
  )
}

export default CountryDataBlock

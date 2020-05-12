import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={appNameStyle}>
          Covid-19 status
      </Typography>
        <Button
          color="inherit"
          component={Link}
          to={`/`}>
          Home
      </Button>
        <Button
          color="inherit"
          component={NavLink}
          to={`/summary`} >
          Summary
      </Button>
        <Button
          color="inherit"
          component={Link}
          to={`/detailed`}>
          Detailed
      </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header

const appNameStyle = {
  flexGrow: 1
}
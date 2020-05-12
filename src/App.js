import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Summary from './components/pages/summary/Summary';
import Detailed from './components/pages/detailed/Detailed';

function App() {
 
  return (
    <>
     <Header />
    <Container maxWidth="md">
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/summary" component={Summary} />
       <Route path="/detailed" component={Detailed} />
       <Route path="*">
          <Redirect to="/" />
       </Route>
     </Switch>
    </Container>
    </>
  );
}

export default App;
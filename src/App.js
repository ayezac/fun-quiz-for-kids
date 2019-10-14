import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Math from './components/categories/Math';
import Flags from './components/categories/Flags';
import CapitalCities from './components/categories/CapitalCities';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/math' exact component={Math}/>
          <Route path='/capitals' exact component={CapitalCities}/>
          <Route path='/flags' exact component={Flags}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

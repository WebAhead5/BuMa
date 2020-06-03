import React from 'react';
import './App.css';
import AboutUs from '../../screens/aboutUs';
import AddCustomer from "../../screens/addCustomer";
import Customers from '../../screens/Customers'
import Home from '../../screens/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';


function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/addCustomer' exact component={AddCustomer} />
            <Route path='/customers' exact component={Customers} />
            <Route path='/aboutus' exact component={AboutUs} />
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;



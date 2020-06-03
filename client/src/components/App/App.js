import React from 'react';
import './App.css';
import AboutUs from '../../screens/aboutUs';
import AddCustomer from "../../screens/addCustomer";
import Customers from '../../screens/Customers'
import CustomerCard from '../../screens/customerCard'
import Home from '../../screens/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/addCustomer' exact component={AddCustomer} />
          <Route path='/customers' exact component={Customers} />
          <Route path ='/customerCard/:name' exact component = {CustomerCard}/>
          <Route path='/aboutus' exact component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



import React from 'react';
import './App.css';
import AboutUs from '../../screens/aboutUs';
import AddCustomer from "../../screens/addCustomer";
import Customers from '../../screens/Customers'
import Home from '../../screens/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import AddAppointment from '../../screens/addAppointment';
import Appointments from '../../screens/Appointments';
import CustomerCard from '../../screens/customerCard'

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
            <Route path='/addAppointment' exact component={AddAppointment} />
            <Route path='/appointments' exact component={Appointments}/>
            <Route path="/customercard/:id" exact component={CustomerCard} />
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;



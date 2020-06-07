import React from 'react';
import './App.css';
import AboutUs from '../../screens/aboutUs';
import AddCustomer from "../../screens/addCustomer";
import Customers from '../../screens/Customers'
import CustomerCard from '../../screens/customerCard'
import SelectCustomer from '../../screens/selectCustomer'
import Home from '../../screens/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import AddAppointment from '../../screens/addAppointment';
import Appointments from '../../screens/Appointments';


function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/addcustomer' exact component={AddCustomer} />
            <Route path='/customercard/:id' exact component={CustomerCard} />
            <Route path='/selectcustomer' exact component={SelectCustomer} />
            <Route path='/customers' exact component={Customers} />
            <Route path='/aboutus' exact component={AboutUs} />
            <Route path='/addappointment' exact component={AddAppointment} />
            <Route path='/appointments' exact component={Appointments}/>
            <Route path="/customercard/:id" exact component={CustomerCard} />
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;



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
import Settings from '../../screens/settings'
import PaymentSettings from '../../screens/paymentSettings'
import AppointmentCard from '../../screens/appointmentCard';
import Registration from '../../screens/registration';
import Profile from '../../screens/profile';
import Signin from '../../screens/signin';


function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">

          <Switch>
            <Route path={['/', '/home']} exact component={Home} />
            <Route path='/addcustomer' exact component={AddCustomer} />
            <Route path='/customercard/:id' exact component={CustomerCard} />
            <Route path='/selectcustomer' exact component={SelectCustomer} />
            <Route path='/customers' exact component={Customers} />
            <Route path='/aboutus' exact component={AboutUs} />
            <Route path='/addappointment' exact component={AddAppointment} />
            <Route path='/appointments' exact component={Appointments}/>
            <Route path="/customercard/:id" exact component={CustomerCard} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/payment-settings" exact component={PaymentSettings} />
            <Route path="/appointmentcard/:id" exact component={AppointmentCard} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/signin" exact component={Signin} />
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}


export default App;



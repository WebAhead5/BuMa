import React from 'react';
import './App.css';
import AboutUs from '../../screens/aboutUs';
import AddCustomer from "../../screens/addCustomer";
import Customers from '../../screens/Customers'
import CustomerCard from '../../screens/customerCard'
import Home from '../../screens/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import Appointments from '../../screens/Appointments';


function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/addCustomer' exact component={AddCustomer} />
            <Route path='/customerCard/:id' exact component={CustomerCard} />
            <Route path='/customers' exact component={Customers} />
            <Route path='/aboutus' exact component={AboutUs} />
            <Route path='/appointments' exact component={Appointments}/>
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;



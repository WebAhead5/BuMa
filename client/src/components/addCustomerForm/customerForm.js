import React, { Component } from 'react'
import CustomerName from './customerName';
import CustomerEmail from './customerEmail';
import CustomerNote from './customerNote';
import CustomerPhone from './customerPhone';
import CustomerPrice from './customerPrice';
import PaymentNumber from './paymentEvery';
import PaymentPeriod from './paymentPer';
import {addCustomer} from '../../actions/customers';

class CustomerForm extends Component {
 
    state = {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        userid: '1',
        paymentStatus: 'false',
        activityStatus: 'true',
        notes: 'Note',
        balance: '0',
        appointmentPrice : 'Price per appointment $',
        paymentEveryValue : '1',
        paymentEveryUnit : 'Week',
        balanceValidUntil : '2/2/2000'
    };

    // handleDate = () =>{
    //   const date= new Date();
    //   const todaysDate = date.getFullYear()+'/'+(Date.getMonth()+1)+'/'+Date.getDate();
    //   this.setState({balanceValidUntil : todaysDate});
    // }

    handleChange = (e, id) => {
      console.log(id + ":" + e.target.value)
      if(e.target.value === '')
        this.setState({[id] : id});
      // else if (id == 'email')
      //   this.setState({email : e.target.value});
      else
        this.setState({[id] : e.target.value});
      console.log(this.state)
    }

    handleSubmit = (event) => {
      //onsole.log(this.state.value)
      const date= new Date();
      const todaysDate = date.getDate()+'/'+(date.getMonth()+1) +'/'+ date.getFullYear();
      console.log(todaysDate)
      this.setState({balanceValidUntil : todaysDate});
      addCustomer(this.state)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} style={{background:'#1F2B30'}}>
          <div className="tl pa4 vcenter">
            <CustomerName 
              stateId="name" 
              onChange={this.handleChange} 
              placeHolder={this.state.name}
            />
            <CustomerEmail 
              stateId="email" 
              onChange={this.handleChange} 
              placeHolder={this.state.email}
            />
            <CustomerPhone 
              stateId="phone" 
              onChange={this.handleChange} 
              placeHolder={this.state.phone}
            />
            <CustomerPrice 
              stateId="appointmentPrice" 
              onChange={this.handleChange} 
              placeHolder={this.state.appointmentPrice}
            />
            <PaymentNumber 
              stateId="paymentEveryValue" 
              onChange={this.handleChange} 
              placeHolder={this.state.paymentEveryValue}
            />
            <PaymentPeriod
              stateId="paymentEveryUnit" 
              onChange={this.handleChange} 
              placeHolder={this.state.paymentEveryUnit}
            />
            <CustomerNote 
              stateId="notes" 
              onChange={this.handleChange} 
              placeHolder={this.state.notes}
            />
           </div>
            <input 
              type="submit" 
              value="Add" 
              className='btn btn-submit ma3 btn-lg grow' 
              style={{background:'#0B8D98',color:"white",width:"100px"}}
            />
        </form>
      );
    }
  }
 
export default CustomerForm;
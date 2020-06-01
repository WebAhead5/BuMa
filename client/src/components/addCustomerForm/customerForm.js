import React, { Component } from 'react'
import CustomerName from './customerName';
import CustomerEmail from './customerEmail';
import CustomerNote from './customerNote';
import CustomerPhone from './customerPhone';
import CustomerPrice from './customerPrice';
import Payment from './paymentEvery';

class CustomerForm extends Component {

    state = {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        price: 'Price per appointment $',
        payment: 'Payment every',
        note: 'Note'  
    };

    handleChange = (e, id) => {
      console.log(id + ":" + e.target.value)
      if(e.target.value === '')
        this.setState({[id] : id});
      else
        this.setState({[id] : e.target.value});
      console.log(this.state)
    }

    handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.name);
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
              stateId="price" 
              onChange={this.handleChange} 
              placeHolder={this.state.price}
            />
            <Payment 
              stateId="payment" 
              onChange={this.handleChange} 
              placeHolder={this.state.payment}
            />
            <CustomerNote 
              stateId="note" 
              onChange={this.handleChange} 
              placeHolder={this.state.note}
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
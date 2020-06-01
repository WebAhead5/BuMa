import React, { Component } from 'react'
import CustomerName from './customerName';
import CustomerEmail from './customerEmail';
import CustomerNote from './customerNote';
import CustomerPhone from './customerPhone';

class CustomerForm extends Component {

    state = {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        price: 'Price per appointment',
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
        <form onSubmit={this.handleSubmit} className="tc pa3 bg-light-gray">
            <CustomerName stateId="name" onChange={this.handleChange} placeHolder={this.state.name}/>
            <CustomerEmail stateId="email" onChange={this.handleChange} placeHolder={this.state.email}/>
            <CustomerPhone stateId="phone" onChange={this.handleChange} placeHolder={this.state.phone}/>
            <CustomerNote stateId="note" onChange={this.handleChange} placeHolder={this.state.note}/>
           
            <input type="submit" value="Add" className='btn btn-primary ma3 btn-lg' />
        </form>
      );
    }
  }
 
export default CustomerForm;
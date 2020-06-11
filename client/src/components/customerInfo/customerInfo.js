import React, { useState } from 'react'
import CustomerName from '../addCustomerForm/customerName';
import CustomerEmail from '../addCustomerForm/customerEmail';
import CustomerPhone from '../addCustomerForm/customerPhone';
import CustomerPrice from '../addCustomerForm/customerPrice';
import PaymentNumber from '../addCustomerForm/paymentEvery';
import PaymentPeriod from '../addCustomerForm/paymentPer';
import NoteFieldText from '../NoteFieldText'
import { updateCustomer } from '../../actions/customers';
import { Redirect } from 'react-router'

const styles = {

    saveBtn: {

        background: '#0B8D98',
        color: "white",
        width: "100px"
    },

    btnContainer: {


        display: 'flex',
        justifyContent: 'center',

    },



}

const CustomerInfo = (props) => {

    const [isRedirect, setRedirect] = useState(false);

    let customer = props.updatedCustomer;

    const handleSubmit = (event) => {

        updateCustomer(customer.id, customer, (err, res) => {
            if (err) {
                console.log(err)
                return;
            }
            setRedirect(true);
        })
        event.preventDefault();
    }

    const handleChange = (e, id) => {

        customer = { ...customer, [id]: e.target.value }


    }

    return (

        <form onSubmit={handleSubmit} style={{ height : '80vh',background: '#1F2B30' }}>
            <div className="tl pa4 vcenter">
                <CustomerName
                    stateId="name"
                    placeHolder={customer.name}
                    onChange={handleChange}
                    required={false}
                />
                <CustomerEmail
                    stateId="email"
                    placeHolder={customer.email}
                    onChange={handleChange}
                    required={false}
                />
                <CustomerPhone
                    stateId="phone"
                    placeHolder={customer.phone}
                    onChange={handleChange}
                    required={false}
                />


                <CustomerPrice
                    stateId="appointmentprice"
                    placeHolder={customer.appointmentprice}
                    onChange={handleChange}
                    required={false}
                />


                <div style={{ display: 'flex', flexWrap: 'nowarp', justifyContent: 'space-evenly' }} className="shadow-5 ma3 w-80 tl">
                    <PaymentNumber
                        stateId="paymenteveryvalue"
                        Value={customer.paymenteveryvalue}
                        onChange={handleChange}
                    />

                    <PaymentPeriod
                        stateId="paymenteveryunit"
                        Value={customer.paymenteveryunit}
                        onChange={handleChange}
                    />
                </div>
                <NoteFieldText
                    stateId="notes"
                    placeHolder={customer.notes}
                    onChange={handleChange}
                    required={false}
                />


                <input className="input-reset ba b--black-20 pa2 br3 mb2 db w-90" type="text" name="paymentMethod" placeholder={'Payment Method'} disabled />

                <div style={styles.btnContainer}>
                    <input
                        type="submit"
                        value="Save"
                        className='btn btn-submit ma3 btn-lg grow'
                        style={styles.saveBtn}
                    />
                </div>


            </div>

            {isRedirect && (
                <Redirect to={'/customers'} />
            )}

        </form>

    )
}

export default CustomerInfo


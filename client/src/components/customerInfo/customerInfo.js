import React, { useEffect , useState } from 'react'
import CustomerName from '../addCustomerForm/customerName';
import CustomerEmail from '../addCustomerForm/customerEmail';
import CustomerPhone from '../addCustomerForm/customerPhone';
import CustomerPrice from '../addCustomerForm/customerPrice';
import PaymentNumber from '../addCustomerForm/paymentEvery';
import PaymentPeriod from '../addCustomerForm/paymentPer';
import NoteFieldText from '../NoteFieldText'
import Button from '../Button'
import Popup from '../Popups'
import { updateCustomer } from '../../actions/customers';
import { Redirect } from 'react-router'
import { deleteCustomer } from '../../actions/customers'
import { useDeleteCustomerFromSelectedCustomers } from '../../store/customers'
import { useHistory } from 'react-router-dom'
import { customers, useSetCustomer} from '../../store/customers'
import { useRecoilValue } from 'recoil';

const styles = {

    container: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30px',

    },

    deleteBtn: {
        border: 'none',
        marginLeft: '25px',
        height: '50px',
        width: '50px',
        background: 'url(/img/deleteIconWhite.svg)',
        backgroundSize: 'cover',
        outline: 'none',
    },

    h4: {
        color: '#E4FDFF',
    },

    saveBtn: {

        background: '#0B8D98',
        color: "white",
        width: "100px"
    },

    btnContainer: {


        display: 'flex',
        justifyContent: 'center',

    },

    activeUser: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/activityicon.svg)',
        backgroundSize: 'cover',
        transform: 'rotate(180deg)',
        outline: 'none',

    },

    notActiveUser: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/activityicon.svg)',
        backgroundSize: 'cover',
        outline: 'none',

    },



}

const CustomerInfo = (props) => {
    const allCustomers = useRecoilValue(customers)
    const [show, setShow] = React.useState(false)
    let customer = props.updatedCustomer;
    const [customerActivity, setCustomerActivity] = useState(customer.activitystatus)
    console.log(customerActivity)
    // const [isRedirect, setRedirect] = useState(false);
    const updateCustomerData = useSetCustomer()
    let history = useHistory();


    

    const handleChange = (e, id) => {
        
        customer = { ...customer, [id]: e.target.value }
        console.log(customer)
    }



    const handleSubmit = (event) => {
        //update state
       updateCustomerData(customer)
   
        //update database
        customer = { ...customer, ['activitystatus']: customerActivity };
        updateCustomer(props.matchId,customer,() => console.log('Customer Data Updated Successfully'))
        history.push('/customers')
        event.preventDefault();


    }






    const removeCustomer = useDeleteCustomerFromSelectedCustomers()


    const handleDeleteButton = (clickId) => {
        deleteCustomer(clickId, (err, msg) => {
            //TODO: handle error properly
            if (err) console.log(err)
            removeCustomer(clickId)
            return
        })
    }

    const handleNoOpt = () => {
        setShow(false)
    }



    const handleYesOpt = () => {
        handleDeleteButton(props.matchId)
        history.goBack();
    }





    return (

        <form onSubmit={handleSubmit} style={{ background: '#1F2B30' }}>
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


                <div style={styles.container}>
                    <Button style={styles.deleteBtn} onClickButton={() => setShow(true)} />
                    <Popup isOpen={show} setShow={(el) => setShow(el)} labels={['yes', 'no']} callbacks={[handleYesOpt, handleNoOpt]} style={styles.YesNoBtns}>
                        <h4 style={styles.h4}>Are You sure you want to delete Customer?</h4></Popup>

                    <Button

                        style={customerActivity ? styles.activeUser : styles.notActiveUser}
                        onClickButton={() => setCustomerActivity(!customerActivity)}>


                    </Button>
                </div>



            </div>

        </form>

    )
}

export default CustomerInfo


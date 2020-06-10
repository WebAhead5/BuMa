import React,{useState} from 'react'
import { editPaymentSettings } from '../../actions/paymentSettings'
import { Redirect } from 'react-router'

function PaymentSettingsData(props) {


    const [isRedirect, setRedirect] = useState(false);

    const styles = {

        currencyContainer: {

            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100vw',
            height: '35vh',
            paddingBottom: '190px',

        },

        paymentContainer: {

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '29vh',
            paddingBottom: '110px',

        },


        saveBtn: {

            background: '#0B8D98',
            color: "white",
            width: "100px"
        },

        currencyLabel: {
            color: 'white',
            marginTop: '60px',

        },

        paymentLabel: {

            color: 'white',
            marginBottom: '5px',


        },


    }
    let updatedData = props.userSettings;

    const handleCurrencyChange = (e) => {

        updatedData = ({ ...updatedData, [e.target.id]: e.target.value });

    }


    const handleRequestPaymentEveryValueChange = (e) => {

        updatedData = ({ ...updatedData, [e.target.id]: e.target.value });


    }


    const handleRequestPaymentEveryUnitChange = (e) => {

        updatedData = ({ ...updatedData, [e.target.id]: e.target.value });

    }


    const handleSubmit = (e) => {

        editPaymentSettings(updatedData.userid, updatedData, () => console.log("Updated Settings Successfully"))
        setRedirect(true);
        e.preventDefault();

    }


    return (
        <form onSubmit={handleSubmit}>

            <label style={styles.currencyLabel}>Currency</label>

            <div style={styles.currencyContainer}>

                <select
                    type="text"
                    id="currency"
                    className="pa2 br3 mb2 ma1 w-20"
                    onChange={handleCurrencyChange}
                >
                    <option value="ILS" selected={props.userSettings.currency == "ILS"} >ILS</option>
                    <option value="USD" selected={props.userSettings.currency == "USD"}> USD</option>
                    <option value="EUR" selected={props.userSettings.currency == "EUR"} >EUR</option>
                    <option value="CNY" selected={props.userSettings.currency == "CNY"}>CNY</option>
                </select>

            </div>


            <label style={styles.paymentLabel}>Request Every</label>

            <div style={styles.paymentContainer}>



                <select
                    type="number"
                    id="request_payment_every_value"
                    className="pa2 br3 mb2 ma1 w-15"
                    onChange={handleRequestPaymentEveryValueChange}

                >
                    <option value="1" selected={props.userSettings.request_payment_every_value == "1"} >1</option>
                    <option value="2" selected={props.userSettings.request_payment_every_value == "2"} >2</option>
                    <option value="3" selected={props.userSettings.request_payment_every_value == "3"} >3</option>
                    <option value="4" selected={props.userSettings.request_payment_every_value == "4"} >4</option>
                    <option value="5" selected={props.userSettings.request_payment_every_value == "5"} >5</option>
                </select>

                <select
                    type="text"
                    className="pa2 br3 mb2 ma1 w-15"
                    id="request_payment_every_unit"
                    onChange={handleRequestPaymentEveryUnitChange}>

                    >
                    <option value="Appointment" selected={props.userSettings.request_payment_every_unit == "Appointment"}>Appointment</option>
                    <option value="Week" selected={props.userSettings.request_payment_every_unit == "Week"}>Week</option>
                    <option value="Month" selected={props.userSettings.request_payment_every_unit == "Month"}>Month</option>
                </select>


            </div>


            <input
                type="submit"
                value="Save"
                className='btn btn-submit ma3 btn-lg grow'
                style={styles.saveBtn}
            />

            {isRedirect && (
                <Redirect to={'/settings'} />
            )}


        </form>
    )
}

export default PaymentSettingsData

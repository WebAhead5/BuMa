import React from 'react'
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';

const PaymentSettings = () => {


    const styles = {

        currencyContainer: {

            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100vw',
            height: '35vh',
            paddingBottom : '190px',

        },

        paymentContainer: {

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '29vh',
            paddingBottom : '110px',

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

        paymentLabel:{

            color: 'white',
            marginBottom: '5px',


        },


    }



    return (
        <ScreenContainer>

            <MenuHeader icon="backArrow" title="PaymentSettings" />


            <label style={styles.currencyLabel}>Currency</label>

            <div style={styles.currencyContainer}>

                <select
                    type="number"
                    className="pa2 br3 mb2 ma1 w-20">
                    <option value="ILS" >ILS</option>
                    <option value="USD" >USD</option>
                    <option value="EUR" >EUR</option>
                    <option value="CNY">CNY</option>
                </select>

            </div>


            <label style={styles.paymentLabel}>Request Every</label>

            <div style={styles.paymentContainer}>



                <select
                    type="number"
                    className="pa2 br3 mb2 ma1 w-15">
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4">4</option>
                </select>

                <select
                    type="text"
                    className="pa2 br3 mb2 ma1 w-15">
                    <option value="Appointment" >Appointment</option>
                    <option value="Day" >Day</option>
                    <option value="Week" >Week</option>
                    <option value="Month">Month</option>
                </select>


            </div>




            <input
                type="submit"
                value="Save"
                className='btn btn-submit ma3 btn-lg grow'
                style={styles.saveBtn}
            />


        </ScreenContainer>
    )
}

export default PaymentSettings

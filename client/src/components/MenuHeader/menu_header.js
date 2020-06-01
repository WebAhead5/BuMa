import React from 'react';
import BurgerIcon from '../BurgerIcon';
//import BackArrow from '../BackArrow';

let styles = {
    header: {
        fontFamily: 'gothamBook',
        backgroundColor: '#0B8D98',
        color: '#0B8D98',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    burger: {
        padding: 0,
        margin: 0,
        paddingRight: '5px',
    },
    burgerIcon: {
        width: '70%',
    },
    title: {
        fontSize: '1.0em',
        color: '#0B8D98',
        fontWeight: 'bold',
        fontFamily: 'gothamBook',
    },
    titleSingle: {
        fontSize: '1.0em',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'gothamBook',
        paddingTop: 20,
    },
};

const menu_header = (props) => {

   // styles.header.backgroundColor = props.colorBackground;
    let header = (
        <div className="col-xs-12 navbar-fixed-top" style={styles.header}>
            <span className="col-xs-1 vcenter" style={styles.burger}>
                <BurgerIcon style={styles.burgerIcon} />
            </span>

            <span className="col-xs-8 vcenter" style={styles.titleSingle}>
                {props.title && <p> {props.title}</p>}
            </span>

            <div className="col-xs-2 vcenter">
            </div>
        </div>
    );

    return (
        header
    );
}



export default menu_header;
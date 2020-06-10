import React from 'react';
//import BurgerIcon from '../BurgerIcon';
import BackArrow from '../BackArrow';
import Burger from '../BurgerIcon';
import { useRecoilValue } from 'recoil';
import { user } from '../../store/users';

let styles = {
    header: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        fontFamily: 'gothamBook',
        backgroundColor: '#0B8D98',
        color: '#0B8D98',
    },
    backArrow: {
        display: 'flex',
        justifyContent: 'start',

    },
    backArrowIcon: {

        display: 'flex',
    },
    title: {
        fontSize: '1.0em',
        color: '#0B8D98',
        fontWeight: 'bold',
        fontFamily: 'gothamBook',
    },
    titleSingle: {
        fontSize: '30px',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'gothamBook',

    },
};

const menu_header = (props) => {
    let header = (
        <div className="col-xs-12 navbar-fixed-top" style={styles.header}>
            <div className="col-xs-1 vcenter" style={styles.backArrow}>
                {/* change the icon depending on the page we are in */}
                {props.icon === 'backArrow' ? <BackArrow style={styles.backArrowIcon} /> : props.icon === 'burger' ? <Burger /> : null}
            </div>

            <span className="col-xs-8 vcenter" style={styles.titleSingle}>
                {props.title && <p> {props.title}</p>}
            </span>

            <div className="col-xs-2 vcenter">
                {/* <img 
                style={{width:'60px'}}
                src={headerImageUrl}></img> */}
            </div>
        </div>
    );

    return (
        header
    );
}



export default Menu_header;
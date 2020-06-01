import React from 'react';

const styles = {
    image: {
        width: '20px',
        background: '#545454'
    },
};

const BurgerIcon = (props) => {

    return ( < img 
            alt = "presentation"
            style = { styles.image }
            src = "/img/burger.png" 
             /> );

}


export default BurgerIcon;
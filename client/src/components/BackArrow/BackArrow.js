import React from 'react';
import { REDIRECT_URL } from '../../constants';
//import { browserHistory } from 'react-router'

const styles = {
    image: {
        position: "fixed",
        width: '40px',
        height: '40px',
        background: '#0B8D98',
        left:'20px',
        top:'20px'
    },
};

const BackArrow = (props) => {
    function onClickGoBackArrow() {
        if (props.entryPoint) {
            window.location = REDIRECT_URL;
        } else {
            //browserHistory.goBack();
        }
    }

    return ( <img 
                  className="grow br3 shadow-2"
                  onClick = { () => onClickGoBackArrow()}
                  alt = "presentation"
                  style = { styles.image }
                  src = "/img/arrow-back.png" /> );

}

// BackArrow.propTypes = {
//   entryPoint: React.PropTypes.bool,
//   style : React.PropTypes.object,
//   className: React.PropTypes.string,
// };

// BackArrow.defaultProps = {
//   entryPoint: false,
//   style: {},
//   className: ''
// };

export default BackArrow;
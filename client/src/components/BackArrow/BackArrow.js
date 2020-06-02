import React from 'react';
import { REDIRECT_URL } from '../../constants';
//import { browserHistory } from 'react-router'

const styles = {
  image: {
    width: '80%',
  
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
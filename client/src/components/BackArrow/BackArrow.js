import React, {Component} from 'react';
import {REDIRECT_URL} from '../../constants';
//import { browserHistory } from 'react-router'

const styles = {
  image: {
    width: '80%',
  
  },
};

const BackArrow = (props) => {
  function onClickGoBackArrow() {
    if (props.entryPoint){
      window.location = REDIRECT_URL;
    } else {
     //browserHistory.goBack();
    }
  }

  return (<img  onClick={() => onClickGoBackArrow()}  role="presentation" style={styles.image} src="/img/arrow-back.png"/>);
  
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

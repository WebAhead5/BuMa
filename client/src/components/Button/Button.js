import React from 'react';
var _ = require('lodash');


const styles = {
  footer: {
    fontFamily: 'gothamBook',
    textAlign: 'center',
    fontSize: '1.3em',
    padding: '16px',
    fontWeight: 'bold',
    backgroundColor: '#01A1AF',
    color: 'white',
    borderRadius: '9px',
    width: '100%',
    border: 'none',
  },
};


const Button = (props) => {
  
    // let style = Object.assign({}, styles.footer, this.props.style);
    // if (this.props.show === false) {
    //   style.display = 'none';
    // } else {
    //   style = _.omit(style, 'display');
    // }
    return (
    <button type="button"  onClick={props.onClickButton} style={props.style}>{props.text} </button>
    );
}

export default Button;

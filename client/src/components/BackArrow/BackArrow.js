import React from 'react';
import { REDIRECT_URL } from '../../constants';
import { useHistory } from 'react-router-dom'

const styles = {
  image: {
    width: '40px',
    height: '35px'
  },
};

const BackArrow = (props) => {
  let history = useHistory();
  function onClickGoBackArrow() {
    if (props.entryPoint) {
      window.location = REDIRECT_URL;
    } else {
      history.goBack();
    }
  }

  return (<img

    onClick={() => onClickGoBackArrow()}
    alt="presentation"
    style={styles.image}
    src="/img/back-button.svg" />);

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
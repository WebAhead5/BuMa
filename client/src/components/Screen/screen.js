import React from 'react';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor : '#1F2B30'
  },
};

const Screen = (props) => {
 
    return (
      <div style={styles.container}>
        {props.children}
      </div>
    );
}

Screen.propTypes = {};

Screen.defaultProps = {};

export default Screen;
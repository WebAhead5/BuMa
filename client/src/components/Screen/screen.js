import React from 'react';

const styles = {
  container: {
    height: '100vh',
    backgroundColor : '#1F2B30',
    zIndex: '0',
    width: '100%'
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
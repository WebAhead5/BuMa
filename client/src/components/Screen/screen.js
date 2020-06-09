import React from 'react';

const styles = {
  container: {
    height: '100vmax',
    backgroundColor : '#1F2B30',
    zIndex: '0',
    display: 'inline-block',
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
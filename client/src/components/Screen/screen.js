import React from 'react';

const styles = {
  container: {
    height: '100vh',
    backgroundColor : '#1F2B30',
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

export default Screen;
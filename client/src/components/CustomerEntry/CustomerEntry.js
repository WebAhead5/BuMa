import React from 'react';
import Image from '../Image';
import {MAX_CUSTOMER_NAME_DISPLAY_LEN} from '../../constants';

const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: 9,
    marginBottom: 10,
    padding: 10,
  },
  name: {
    color: '#5b90bd',
    fontWeight: 'bold',
    fontSize: '1em',
    overflowWrap: 'break-word',
  },

  settings: {
    color: '#b9b9b9',
    paddingBottom: '50px',
    textAlign: 'right',
  },
  settingsIcon: {
  }
};

const CustomerEntry = (props) => {

    let customerName = props.customer.name || '';
    if (customerName.length > MAX_CUSTOMER_NAME_DISPLAY_LEN) {
      customerName = customerName.slice(0,MAX_CUSTOMER_NAME_DISPLAY_LEN - 3) + '...';
    }
    return (
      <div className="col-xs-12 col-sm-6" style={styles.container}>
        <div className="col-xs-4 vcenter">
          <Image src={props.imageSrc}/>
        </div>
        <div className="col-xs-6 vcenter">
          <span style={styles.name}>{customerName} </span>
        </div>
        <div className="col-xs-2 vcenter" style={styles.settings}>
          <i className="fa fa-cog" aria-hidden="true" style={styles.settingsIcon} onClick={() => props.onButtonSettingsClick(props.button.id)}></i>
        </div>
      </div>
    );
  }

export default CustomerEntry;

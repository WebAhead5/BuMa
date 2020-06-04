import React from 'react'
//import Note from '../NoteFieldText';

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
}
const AppointmentInfo = (props) => {
    return (
        <div style={styles.container}>
            <input 
            className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" 
            type="text" 
            name="appTitle" 
            placeholder={props.namePlaceHolder} />
            <input 
            className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" 
            type="date" 
            name="appDate" 
            placeholder={props.datePlaceHolder} />
            <input 
            className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" 
            type="text" 
            name="time" 
            placeholder={props.time} />
            <textarea
                rows="4"
                className="input-reset ba b--black-20 pa2 mb2 br3 db w-50"
                placeholder={props.notePlaceHolder} />
        </div>
    )
}
export default AppointmentInfo;
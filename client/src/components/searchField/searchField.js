import React from 'react'





let styles = {

    container: {

        backgroundColor: '#1F2B30',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        paddingTop : '10px',
        paddingBottom : '20px'

    },

    form: {
        margin: 'auto',
        maxWidth: '300px',
        boxSizing: 'border-box'
    },

    inputField: {
        padding: '10px',
        fontSize: '17px',
        border: '1px solid grey',
        float: 'left',
        width: '80%',
        background: '#f1f1f1',
        boxSizing: 'border-box'
    },

    submitButton: {

        width: '40px',
        height: '42px',
        padding: '12px',
        color: 'blue',
        cursor: 'pointer',

    }
}


 const SearchField = ({value, handleChange}) => {

    return (

        <div style={styles.container}>
            

            <form className="example" action="" style={styles.form}>
                <input type="text" value={value} onChange={handleChange} placeholder="Search.." name="search" style={styles.inputField} />
            </form>


        </div>

    );




}


export default SearchField;
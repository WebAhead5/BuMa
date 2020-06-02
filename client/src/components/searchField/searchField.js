import React from 'react'





let styles = {

    container: {

        backgroundColor: '#282c34',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        paddingTop : '10px'

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

        width: '15px',
        height: '15px',
        padding: '10px',
        color: 'blue',
        cursor: 'pointer',

    }
}


 const SearchField = ({value, handleChange}) => {

    return (

        <div style={styles.container}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <form className="example" action="" style={styles.form}>
                <input type="text" value={value} onChange={handleChange} placeholder="Search.." name="search" style={styles.inputField} />
                <button type="submit"><i className="fa fa-search" style={styles.submitButton}></i></button>
            </form>


        </div>

    );




}


export default SearchField;
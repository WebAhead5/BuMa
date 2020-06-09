import React from 'react'
import {localeDate} from '../../store/date'
import {useRecoilValue} from 'recoil'


const DateClicked = (props) => {

    const dateClicked = useRecoilValue(localeDate)
    return (
        <p style={props.style}>Date: {dateClicked? dateClicked : new Date().toLocaleDateString() }</p>
    )
}

export default DateClicked
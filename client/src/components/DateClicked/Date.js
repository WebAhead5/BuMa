import React from 'react'
import {localeDate} from '../../store/date'
import {useRecoilValue} from 'recoil'


const DateClicked = (props) => {

    const dateClicked = useRecoilValue(localeDate)
    return (
        <p style={props.style}>{dateClicked? dateClicked.split(' 00:00:00')[0] : new Date().toLocaleDateString() }</p>
    )
}

export default DateClicked
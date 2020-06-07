import React from 'react'
import {localeDate} from '../../store/date'
import {useRecoilValue} from 'recoil'


const Date = (props) => {

    const dateClicked = useRecoilValue(localeDate)
    return (
        <p style={props.style}>Date: {dateClicked.toLocaleDateString()} </p>
    )
}

export default Date
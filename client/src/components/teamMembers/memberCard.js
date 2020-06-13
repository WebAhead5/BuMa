import React from 'react';

const memberCard = (props) => {
    return (
        <div 
        key={props.id} 
        className='tc bg-white dib br3 ma2 pa2 shadow-5 grow' 
        style={{marginTop:'20px'}}>
            <img src={props.src} 
            alt={props.name} 
            style={{width:'150px', height:'150px'}}></img>
            <h5> {props.name} </h5>
            <h6> {props.profession} </h6>
            <p> {props.desciption} </p>
        </div>
                    
    );

}

export default memberCard;
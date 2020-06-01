import React from 'react';
import { members } from "./teamProfile";

const teamCards = () => {
    const style={
        layout:{
            background:'#1F2B30',
            border:'0px', 
            overflow: 'scroll' , 
            height:'100vh'}
    };
    return (
        <div style={style.layout}>
            {
                members.map((user) => {
                    return(
                        <div key={user.id} className='tc bg-white dib br3 ma2 pa2 shadow-5'>
                           <img src={user.src} alt={user.name}></img>
                           <h5> {user.name} </h5>
                           <h6> {user.profession} </h6>
                           <p> {user.desciption} </p>
                        </div>
                    );
                })
            }
        </div>
    );

}

export default teamCards;
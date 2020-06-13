import React from 'react';
import { members } from "./teamProfile";
import MemberCard from "./memberCard";

const teamCards = () => {
    const style={
        layout:{
            background:'#1F2B30',
            border:'0px', 
            overflow: 'scroll' , 
            height:'100vh'},
        img:{
                width:'200px',
                height:'200px',
                overFlow:'hidden'}
    };


    return (
        <div style={style.layout}>
            <div className="tc shadow-4 pa3 br3">
            <img src='../img/logo.png' style={style.img}></img>
            <br></br>
            <h1 style={{marginTop:'-40px', color:'#0B8D98'}}>BuMa L.T.D</h1>
            <h4 style={{marginTop:'-10px', color:'white'}}>Business Solution Version 3</h4>
            <h5 style={{ color:'white'}}>404 Wall Street Avenu #1</h5>
            </div>
            {
                members.map((user) => {
                    return(
                        <MemberCard 
                        key={user.id} 
                        src={user.src} 
                        name={user.name} 
                        profession={user.profession} 
                        desciption={user.desciption}
                        />
                    );
                })
            }
        </div>
    );

}

export default teamCards;
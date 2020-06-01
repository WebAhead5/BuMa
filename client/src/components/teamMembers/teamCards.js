import React from 'react';
import { members } from "./teamProfile";
import MemberCard from "./memberCard";

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
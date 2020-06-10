import React from 'react';

const ReportCard = (props) => {
    const style={
        layout:{
            background:'#1F2B30',
            overflow: 'scroll' , 
            height:'250px',
            width:'200px',
            marginTop:'20px',
            border:'solid 2px #0B8D98'
        },
        img:{
            height:'150px',
            width:'150px'
        }
    };
    return (
        <div key={props.key} 
        className='tc bg-white dib br3 ma2 pa2 shadow-5 grow pointer' 
        style={style.layout}>
            <span>Customer: {props.userid} </span><br></br>
            <span>Date: {props.creatingDate}</span>
            <img src={props.pdfile} style={style.img}></img>
            <br></br>
            Delete
        </div>
                    
    );

}

export default ReportCard;
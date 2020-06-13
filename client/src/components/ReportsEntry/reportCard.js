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

    const handleDate = (dataDate) => {
        let reportsCreatingDate = new Date(dataDate);
        let month = reportsCreatingDate.getMonth() + 1;
        let day = reportsCreatingDate.getDate();
        let year= reportsCreatingDate.getFullYear();
        if (day<=9)
          day = "0" + day;
        if (month<10)
          month="0"+month;
        const  appointmentDateValue = year + "-" + month + "-" + day;
        return appointmentDateValue;
    }

    return (
        <div key={props.key} 
        className='tc bg-white dib br3 ma2 pa2 shadow-5 grow pointer' 
        style={style.layout}>
            <span>Customer id: {props.userid} </span><br></br>
            <span>Date: {handleDate(props.creatingdate)}</span>
            <img src='/img/report.png' style={style.img}></img>
            <br></br>
        </div>
                    
    );

}

export default ReportCard;
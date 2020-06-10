import React, { useState, useEffect } from 'react';
import ReportCard from "./reportCard";
import Button from "../../components/Button";
import {fetchReports, getReportById} from '../../actions/reports';
import { fetchCustomers } from '../../actions/customers';

const ReportsList = ({match}) => {
    
    const reportsDetails = [
        {id: '1', userid: '3', creatingdate:'20-12-2020', pdfile:'/img/report.png'},
        {id: '2', userid: '4', creatingdate:'20-12-2020', pdfile:'/img/report.png'},
        {id: '3', userid: '1', creatingdate:'20-12-2020', pdfile:'/img/report.png'},
        {id: '4', userid: '1', creatingdate:'20-12-2020', pdfile:'/img/report.png'},
        {id: '5', userid: '1', creatingdate:'20-12-2020', pdfile:'/img/report.png'}
    ];
    // let reportsDetails;
    // const handleReports = (err, res) => {
    //     if (err) {
    //         return;
    //     }
    //     reportsDetails= res.report[0]
    //     console.log(reportsDetails)
    // };
        
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     getReportById(1, handleReports);
      

    // }, []);
   
    const style={
        layout:{
            background:'#1F2B30',
            border:'0px', 
            overflow: 'scroll' , 
            height:'100vh',
        },
        btn: {
            color:'#1F2B30',
            background:'#0B8D98',
            marginTop:'30px',
            height: '50px',
            width:'200px',
            border:'solid 5px #0B8D98',
            fontSize:'22px'
        }
    };

    const handlePopUp = () => {

    }

    return (
        <div>
            <div style={style.layout} className="tc">
            {
                reportsDetails.map((user) => {
                    return(
                        <ReportCard 
                        key={user.id} 
                        userid={user.userid} 
                        creatingdate={user.creatingdate} 
                        pdfile={user.pdfile} 
                        />
                    );
                })
            }
            <br></br>
             <Button text="New Report" style={style.btn} onClickButton={handlePopUp}/> 
            </div>
           
        </div>
    );

}

export default ReportsList;
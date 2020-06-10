import React from 'react';
import ReportCard from "./reportCard";
import Button from "../../components/Button";
import {fetchReports} from '../../actions/reports';
import { fetchCustomers } from '../../actions/customers';

const reports = () => {
    
    const reports = [
        {id: '1', userid: '3', creatingdate:'20-12-2020', pdfile:'/img/report.png'},
        {id: '2', userid: '4', creatingdate:'20-12-2020', pdfile:'/img/report.png'},
        {id: '3', userid: '1', creatingdate:'20-12-2020', pdfile:'/img/report.png'},
        {id: '4', userid: '1', creatingdate:'20-12-2020', pdfile:'/img/report.png'},
        {id: '5', userid: '1', creatingdate:'20-12-2020', pdfile:'/img/report.png'}
    ];
    
    //const reports = fetchReports();

    //console.log(reports)

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
                reports.map((user) => {
                    return(
                        <ReportCard 
                        key={user.id} 
                        userid={user.userid} 
                        creatingdate={user.creatingDate} 
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

export default reports;
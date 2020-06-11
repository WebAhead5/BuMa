import React, { useState, useEffect } from 'react';
import ReportCard from "./reportCard";
import {fetchReports, getReportById} from '../../actions/reports';
import {useRecoilValue} from 'recoil'
import { user } from '../../store/users';
import { SetUserDetails } from '../../store/users';

const ReportsList = () => {
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
    const userRecord = useRecoilValue(user)
    //const setNewReport = SetUserDetails()
    let [reportsDetails, setReportsDetails]= useState([]);

    const handleReports = (err, res) => {
        if (err) {
            return;
        }
        setReportsDetails(res.reports)
        
    };
        
    useEffect(() => {
        //getReportById(userRecord.id, handleReports);
        fetchReports(handleReports)
    }, []);
   
    const handlePopUp = () => {

    }


    return (
        <div>
            <div style={style.layout} className="tc">
            {
                reportsDetails.map(user => (
                    <div className="tc dib">
                        <ReportCard 
                        key={user.id} 
                        userid={user.userid} 
                        creatingdate={user.creatingdate} 
                        pdfile={user.pdfile} 
                        />
                        <br></br>
                    </div>
                ))
            }
            <br></br>
            </div>
           
        </div>
    );

}

export default ReportsList;
import React, {useState} from 'react';
import MenuHeader from '../components/MenuHeader';
import ReportsList from "../components/ReportsEntry";
import ScreenContainer from '../components/Screen';
import Button from "../components/Button";
import TextBoxesPopup from '../components/TextBoxesPopup';
import { makeStyles } from '@material-ui/core/styles'; 


const Reports = () => {
    const [popupShow, setPopupShow] = useState(false)
    
    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: '15px',
            width: '200px'
         
        },
        dates :{
            backgroundColor: 'white',
            marginBottom: '10px'
        }
    }));
   
    const classes = useStyles();
    const popupChildren = [
       {
           label:"from",
           type: "date",
           defaultValue:"",
           multiline:null,
           rows:1,
           variant: "outlined",
           className: classes.dates
       },
       {
           label:"to",
           type: "date",
           defaultValue:"",
           multiline:null,
           rows:1,
           variant: "outlined",
           className: classes.dates
       }
   ]
    const callBack = () =>{}
    const callBacks = [callBack]
   
           
    
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
    const addClick = () =>{
        setPopupShow(true)
    }    

    return (
            <ScreenContainer>
                <TextBoxesPopup callbacks= {callBacks} textBoxes={popupChildren} setShow={setPopupShow} show= {popupShow}></TextBoxesPopup>
                <MenuHeader icon="backArrow" title="Reports" />
                <ReportsList />
                <Button text="New Report" style={style.btn} onClickButton={addClick}/> 
            </ScreenContainer>
        );
}
 
export default Reports;
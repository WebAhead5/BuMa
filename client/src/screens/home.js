import React, { useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ScreenContainer from '../components/Screen';
import { localeDate } from '../store/date'
import { useRecoilValue } from 'recoil';
import MenuHeader from '../components/MenuHeader'
import { fetchAppointments } from '../actions/appointments'
import { appointments, useSetAppointments } from '../store/appointments'
import { slide as Menu } from 'react-burger-menu'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { logout } from '../actions/users'



var styles = {

  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '12px',
    top: '12px'
  },
  bmBurgerBars: {
    background: '#E4FDFF'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '0px',
    width: '0px'
  },
  bmCross: {
    background: '#bdc3c7',
    width:'0px',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '60%'
  },
  bmMenu: {
    background: '#1A4452',
    padding: '0.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  bmItem: {
    display: 'flex',
    color: '#E4FDFF',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  addBtn: {
    background: 'url(/img/addAppointment.svg)',
    backgroundSize: 'cover',
    width: '50px',
    height: '50px',
    border: 'none',
    position: 'absolute',
    bottom:'20px',
    right: '20px'

  },
  img: {
    position: 'absolute',
    top: '-18px',
    right: '5px',
    width: '100px',
    height: '90px',
    transform: 'rotate(-1deg)'
  },

  link : {

    outline: 'none',
    textDecoration:'none',
  }
}



const Home = () => {

  const allAppointments = useRecoilValue(appointments)

  const setItems = useSetAppointments();


  //fetch appointments data

  useEffect(() => {
    fetchAppointments(setItems)
  }, [])

  //convert date from db to an actual Date to compare them with the calendar values
  let appointmentsDays = allAppointments.map(appointments => appointments.day)
  appointmentsDays = appointmentsDays.map(date => new Date(date)).sort((a, b) => a - b)
  

  const dateToday = useRecoilValue(localeDate)


  const onClickDayHandler = (e) => {
    console.log(e)
    window.location.href = `/appointments?date=${e}`
  }

  const handleLogout = () => {
    logout((err, success) => {
      if (err) {

        return
      }
      window.location.pathname = "/signin"
    })
  }


  return (
    <ScreenContainer>

      <MenuHeader title="BuMa" icon=''></MenuHeader>
      <img src="/img/logoTransparent.png" style={styles.img} />
      <Menu styles={styles}>
        <Link to='/customers' style={styles.link}>
          <a id="customers" className="menu-item" >Customers</a>
        </Link>
        <Link to='/reports'>
          <a id="reports" className="menu-item">Accounting reports</a>
        </Link>
        <Link to='/profile' style={styles.link}>
          <a id="profile" className="menu-item">Profile</a>
        </Link>
        <Link to='/settings' style={styles.link}>
          <a id="settings" className="menu-item">Settings</a>
        </Link>
        <Link to='/aboutus'>
          <a id="about" className="menu-item">About</a>
        </Link>
        <Link to='/logout' style={styles.link}>
          <a id="logout" onClick={handleLogout} className="menu-item">Logout</a>
        </Link>
      </Menu>
      <div className="Calendar-container">
        <Calendar
          onClickDay={(e) => onClickDayHandler(e)}
          value={dateToday}
          tileContent={({ activeStartDate, date, view }) => {
            //compare our date value with calendar values, and show highlighted days that have appointments
            return view === 'month' && appointmentsDays.some(appointments => appointments.getDate() === date.getDate()
              && appointments.getMonth() === date.getMonth() && appointments.getFullYear() === date.getFullYear()) ?
              <div className='Calendar-appointment-mark'></div> : null
          }
          }
        />
      </div>

        <Link to={'/addappointment'}>
          <Button style={styles.addBtn}></Button>
        </Link>

    </ScreenContainer>
  )
}


export default Home
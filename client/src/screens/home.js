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
  date: {
    color: "#E4FDFF",
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '12px',
    top: '12px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '60%'
  },
  bmMenu: {
    background: '#1A4452',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
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
    right: '20px'

  },
  footer: {
    bottom: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  img: {
    position: 'absolute',
    top: '-18px',
    right: '5px',
    width: '100px',
    height: '90px',
    transform: 'rotate(-1deg)'
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
    window.location.href = `/appointments?date=${e}`
  }

  const showSettings = (event) => {
    event.preventDefault();
    return;
  }


  const handleLogout = () => {
    logout((err, success) => {
      if (err) {
        console.log(err)
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
        <Link to='/customers'>
          <a id="customers" className="menu-item">Customers</a>
        </Link>
        <Link to='/appointments'>
          <a id="appointments" className="menu-item">Appointments</a>
        </Link>
        <Link to='/reports'>
          <a id="reports" className="menu-item">Accounting reports</a>
        </Link>
        <Link to='/profile'>
          <a id="profile" className="menu-item">Profile</a>
        </Link>
        <Link to='/settings'>
          <a id="settings" className="menu-item">Settings</a>
        </Link>
        <Link to='/aboutus'>
          <a id="about" className="menu-item">About</a>
        </Link>
        <Link to='/logout'>
          <a id="logout" onClick={handleLogout} className="menu-item">Logout</a>
        </Link>
      </Menu>
      <div className="Calendar-container">
        <Calendar
          onClickDay={(e) => onClickDayHandler(e.toLocaleDateString())}
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
      <div style={styles.footer}>
        <Link to={'/addappointment'}>
          <Button style={styles.addBtn}></Button>
        </Link>
        <div style={styles.date}>
          {dateToday ? dateToday : new Date().toLocaleDateString()}
        </div>
      </div>
    </ScreenContainer>
  )
}


export default Home
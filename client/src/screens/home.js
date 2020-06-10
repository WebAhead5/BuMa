import React, { useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ScreenContainer from '../components/Screen';
import { localeDate, useSetDate } from '../store/date'
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
  const setDate = useSetDate()


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

      <MenuHeader title="Home" icon=''></MenuHeader>
      <Menu styles={styles}>
        <a id="customers" className="menu-item" href="/customers">Customers</a>
        <a id="appointments" className="menu-item" href="/appointments">Appointments</a>
        <a id="reports" className="menu-item" href="/reports">Accounting reports</a>
        <a id="profile" className="menu-item" href="/profile">Profile</a>
        <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
        <a id="about" className="menu-item" href="/aboutus">About</a>
        <a id="logout" onClick={handleLogout} className="menu-item" href="/logout">Logout</a>
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
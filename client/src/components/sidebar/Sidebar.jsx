import React from 'react'
import classes from "./sidebar.module.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const navItems = [
  {
    text: "Admin",
    icon: null
  },
  {
    text: "Dashboard",
    icon: null
  },
  {
    text: "Topics",
    icon: null
  }, 
  {
    text: "Pestle",
    icon: null
  },  
  {
    text: "Sectors",
    icon: null
  },
  {
    text: "countries",
    icon: null
  },

];



const Sidebar = () => {

  const ordColor = useSelector(state => state.funReducer.ordColor)
  const ham = useSelector(state => state.funReducer.ham)

  return (
    <aside className={classes.sidebar} style={{borderRight:`1px solid ${ordColor}`,transform:ham ? `translateX(0)` : `translateX(-100%)`}}  >
        <div className={classes.logo} ><Link to="/" style={{backgroundColor:ordColor}} ><svg version="1.1" id="Layer_1"  viewBox="0 0 508 508"  width="30px" height="30px" fill={ordColor}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style={{fill:"#f2f2f2"}} cx="254" cy="254" r="254"></circle> <rect x="343.624" y="163.778" transform="matrix(0.7071 0.7071 -0.7071 0.7071 241.1533 -197.0394)" style={{fill:'#324A5E'}} width="29.6" height="57.599"></rect> <path style={{fill:'#FF7058'}} d="M277.2,143.2h-46.4c-22.4,0-40.8-18.4-40.8-40.8S208.4,62,230.8,62h46.4c22.4,0,40.8,18,40.8,40.4 C318,125.2,299.6,143.2,277.2,143.2z M230.8,77.6c-13.6,0-24.8,11.2-24.8,24.8s11.2,24.8,24.8,24.8h46.4c13.6,0,24.8-11.2,24.8-24.8 s-11.2-24.8-24.8-24.8C277.2,77.6,230.8,77.6,230.8,77.6z"></path> <path style={{fill:'#2C9984'}} d="M273.6,103.6h-39.2c-5.2,0-9.2,4-9.2,9.2v55.6h57.6v-55.6C282.8,108,278.8,103.6,273.6,103.6z"></path> <circle style={{fill:'#4CDBC4'}} cx="254" cy="300.8" r="145.2"></circle> <path style={{fill:'#FFFFFF'}} d="M254,417.2c-64,0-116.4-52.4-116.4-116.4S190,184.4,254,184.4s116.4,52.4,116.4,116.4 S318,417.2,254,417.2z"></path> <path style={{fill:'#324A5E'}} d="M260.4,361.6v18.8h-12.8V362c-12,0-22.8-2.8-33.2-8v-24c3.2,2.8,8.4,5.2,15.2,7.6s12.8,3.6,18,4v-32 c-13.6-5.2-22.8-10.4-28-16.4c-4.8-6-7.6-13.2-7.6-21.6c0-9.2,3.2-16.8,9.6-23.2c6.4-6.4,15.2-10,25.6-11.2v-16.4H260v16 c12.4,0.4,21.6,2.4,27.6,6v23.6c-8-4.8-17.2-8-27.6-9.2v33.2c12.8,4.8,22,10,27.6,15.6c5.6,6,8.4,13.2,8.4,21.6 c0,9.6-3.2,17.6-9.2,23.2C280.4,356.8,271.6,360.4,260.4,361.6z M247.6,285.2v-27.6c-8,1.6-12,5.6-12,12.8 C235.2,276.4,239.2,281.2,247.6,285.2z M260.4,314.8v26.4c8.4-1.2,12.4-5.6,12.4-12.4C272.8,323.2,268.4,318.4,260.4,314.8z"></path> </g></svg>LOGO</Link></div>
        <ul className={classes.navlink} >
          {navItems.map(({text,icon}) =>{
            // if (!icon) {
            //   return (
            //     <li><h2 >{text} </h2></li>
            //   )
            // }

            return (
              <li key={text} style={{borderBottom:`1px solid ${ordColor}`}} ><Link to={`/${text.toLowerCase()}`} >{text} {icon} </Link></li>
            )
          })}

<li style={{borderBottom:`1px solid ${ordColor}`,marginTop:"auto"}} ><Link to={`/setting`} >Settings </Link></li>
        </ul>
    </aside>
  )
}

export default Sidebar
import React from 'react'
import classes from "./theme.module.css"
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Header from "../components/header/Header"
import { useSelector } from 'react-redux'

const Theme = () => {
  const ham = useSelector(state => state.funReducer.ham)
  return (
    <section className={classes.theme} style={{paddingLeft:ham ? '11%' : '1%'}} >
      <Sidebar/>
      <Header/>
    <Outlet/>
    </section>
  )
}

export default Theme
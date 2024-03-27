import React from 'react'
import classes from "./setting.module.css"
import Title from '../../components/title/Title'
import Container from '../../components/container/Container'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadHam, loadOrdColor, ordColor } from '../../redux/actions/funAction'

const Setting = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const data = useSelector(state => state.funReducer)
  const ham = useSelector(state => state.funReducer.ham)
  const logout = async () =>{
    await axios.get("http://localhost:5000/logout").then((resp)=>{
     navigate("/sign")
     {ham ?  dispatch(loadHam()) : <></> }
   }).catch((err)=>{
     console.log(err);
   })
  }

  const colors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e']

  return (
    <>
    <Title title="SETTING" />
    <Container style={{display:'flex',flexDirection:'column',gap:'2%'}} >
    <h2 className={classes.h2} >USERNAME : {data.user}</h2>
    <h2 className={classes.h2} >CHOOSE THEME COLOR : </h2>
    <div className={classes.colorDiv} >{colors.map((item,index)=>{
      return <span key={index} className={classes.color} style={{backgroundColor:`${item}`,border:data.ordColor == item ? `5px solid #707070` : '' }} onClick={() => {dispatch(loadOrdColor(item))}} ></span>
    })}</div>
    <button onClick={logout} style={{backgroundColor:data.ordColor}} className={classes.log} >Logout</button>
    </Container>
    </>
  )
}

export default Setting
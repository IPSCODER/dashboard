import React, { useState } from 'react'
import classes from "./header.module.css"
import { useDispatch, useSelector } from 'react-redux'
import Bg from '../bg/Bg'
import { loadFunMsg } from '../../redux/actions/funAction'
import Input from '../input/Input'
import { Link } from 'react-router-dom'
import { navItems } from '../sidebar/Sidebar'
import ThemeChanger from '../../scene/theme/ThemeChanger'
import Hamburger from '../hamburger/Hamburger'

 const Header = () => {
  const [search,setSearch] = useState('');

  const  dispatch = useDispatch()

  const ordColor = useSelector(state => state.funReducer.ordColor)

  const data = navItems.filter((i)=> i.text.toLowerCase().includes(search.toLowerCase()))

  return (
  <>
    <header  className={classes.header} style={{border:`1px solid ${ordColor}`}} >


      <Input onClick={() =>{ dispatch(loadFunMsg(2))}} type='text' placeholder='Search' value={""} style={{border:`1px solid ${ordColor}`}} readOnly />
        
        <ThemeChanger ordColor={ordColor}/>
      <Hamburger/>
        
    </header>
        <Bg data={2} >
          <div className={classes.searchDiv} >
          <Input  value={search} onChange={(e) => {setSearch(e.target.value)}} style={{border:`1px solid ${ordColor}`}} placeholder="Search" />
          <ul>
            {
              data.map((i,index)=>(
                <li key={index} ><Link to={`/${i.text.toLowerCase()}`} onClick={() => {dispatch(loadFunMsg(null))}} >{i.text}</Link></li>
              ))
            }
            <li ><Link to={`/setting`} onClick={() => {dispatch(loadFunMsg(null))}} >Setting</Link></li>
          </ul>
          </div>
        </Bg>
  </>
  )
}

export default Header
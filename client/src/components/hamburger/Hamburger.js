import React from 'react'
import "./hamburger.css"
import { useDispatch, useSelector } from 'react-redux'
import { loadHam } from '../../redux/actions/funAction'

const Hamburger = () => {

  const dispatch = useDispatch()
  const ham = useSelector(state => state.funReducer.ham)

  return (
    <>
    <div className={'ham'} onClick={() =>{dispatch(loadHam())}} >
    <label className={ham ? 'hamburger change' : 'hamburger'} >
        <span className="line line--top"></span>
        <span className="line line--middle"></span>
        <span className="line line--bottom"></span>
      </label>
</div>
    </>
  )
}

export default Hamburger
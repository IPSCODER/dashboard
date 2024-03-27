import React, { memo} from 'react'
import classes from "./bg.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { loadFunMsg } from '../../redux/actions/funAction'

const Bg = (props) => {

  const dispatch = useDispatch()

  const comfirmBtn = useSelector(state => state.funReducer.comfirmBtn)

 


  return (
    <>
    {comfirmBtn  && comfirmBtn === props.data &&
     <div className={classes.bg}   >
      <div className={classes.a} onClick={() => {dispatch(loadFunMsg(null))}} >

      </div>
    {props.children}
    </div>
}
    </>
  )
}

export default memo(Bg)
import React from 'react'
import classes from "./title.module.css"

const Title = (props) => {
    
  return (
    <>
    <h1 className={classes.title}  >{props?.title}</h1>
    <h6 className={classes.desc} >{props?.desc}</h6>
    </>
  )
}

export default Title
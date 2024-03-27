import React from 'react'
import classes from "./input.module.css"

const Input = (props) => {
  return (
    <>
    <input {...props} className={classes.input} />

    </>
  )
}

export default Input
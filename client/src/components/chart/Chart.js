import React from 'react'
import classes from "./chart.module.css"

const Chart = (props) => {
  return (
    <div className={classes.chart} >
        {props.children}
    </div>
  )
}

export default Chart
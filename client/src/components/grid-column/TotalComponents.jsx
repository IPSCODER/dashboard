import React from 'react'
import classes from "./total.module.css"
import {useSpring,animated} from "react-spring"
import { useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export function Number({n}){
    const {number}  = useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config:{mass:1, tension:20, friction:10}
    })
    return <animated.span >{number.to((n)=> n.toFixed(0))}</animated.span>
}


const TotalComponents = (props) => {

  const ordColor = useSelector(state => state.funReducer.ordColor);
  const isLoading = useSelector(state => state.funReducer.isLoading);
  

  return (
    <>
    {isLoading ?
  <SkeletonTheme highlightColor={ordColor}>
    <div className={props?.className} style={props?.style} >
    <div style={{width:"100%",height:"100%"}} >
               <Skeleton height={"100%"} />
             </div>
    </div>  
  </SkeletonTheme>
:
  <div className={props?.className} style={props?.style} >
  {props.counting ? (
      <>
        <div className={props?.cls.ctitle} >
        <h3>{props.title}</h3> <span>{props.logo}</span>
      </div>
      <h1 className={props?.cls.ccounting} style={{color:ordColor}}  ><Number n={props.counting} /></h1>
      <div className={props?.cls.ctitle} >
        <span className={props?.cls.cpercentage} style={{color:ordColor}} ><Number n={props.logo2} />%</span> <h3>{props.title2}</h3>
      </div> 
      </>
  ) : (
    <>
      {props.children}
      </>
  )}
</div>  
  }
    </>
  )
}

export default TotalComponents
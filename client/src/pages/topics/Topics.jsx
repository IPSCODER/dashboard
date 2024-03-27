import React, { useState } from 'react'
import Title from '../../components/title/Title'
import Container from '../../components/container/Container'
import {useSelector} from "react-redux"
import classes from "./topic.module.css"
import Input from '../../components/input/Input'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';



const Topics = () => {
  const [search,setSearch] = useState('')
  const topics = useSelector(state => state.reducer.topic)
  const isLoading = useSelector(state => state.funReducer.isLoading);
  const ordColor = useSelector(state => state.funReducer.ordColor);
  const index = topics.indexOf('');
  topics.splice(index, 1);
  const data = topics.filter((i)=> i.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
    <Title title="TOPICS" />
      <Input style={{width:'50%',height:'50px'}} placeholder="Search Topic" value={search} onChange={(e) => {setSearch(e.target.value)}} />
    <Container style={{display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'flex-start',backgroundColor:'transparent',height:'100%'}} >
      {isLoading ?
    <>
    <SkeletonTheme highlightColor={ordColor}>
    {new Array(1,2,3,4,5,6,7,8,9,10).map((i)=>(
      <div key={i} className={classes.topic_sm} >
      <div style={{width:"100%",height:"100%"}} >
                 <Skeleton height={"100%"} />
               </div>
               </div>
    ))}
  </SkeletonTheme>
    </>
    :
    <>
    {data.map((i,j) => (  
      <div key={j} className={classes.topic_sm} >
        <h1  >{i}</h1>
      </div>
      ))}
    </>  
    }
    </Container>
    </>
  )
}
  
export default Topics
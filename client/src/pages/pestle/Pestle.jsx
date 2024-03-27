import React from 'react'
import Title from '../../components/title/Title'
import Container from '../../components/container/Container'
import {useSelector} from "react-redux"
import BarChart from '../../components/bar-chart/BarChart'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const Pestle = () => {

  const pestle = useSelector(state => state.reducer.pestle)
  const allData = useSelector(state => state.reducer.data)
  const isLoading = useSelector(state => state.funReducer.isLoading);
  const ordColor = useSelector(state => state.funReducer.ordColor);

  const pest = pestle.map(item => item == '' ? 'unknown' : item);


  const countOccurrences = pestle.map(itemOne => {
    // Count occurrences of itemOne in array two
    const occurrences = allData.reduce((count, objTwo) => {
      if (objTwo.pestle === itemOne) {
        count++;
      }
      return count;
    }, 0);
    
    return occurrences;
  });


  


  return (
    <>
    <Title title="PESTLE" />
    {
      isLoading ?
      <>
      <SkeletonTheme highlightColor={ordColor}>
          <Container>
    <div style={{width:"100%",height:"100%"}} >
               <Skeleton height={"100%"} />
             </div>
          </Container>
  </SkeletonTheme>
      </>
      :

      <>
    <Container>
      {
        countOccurrences.length > 0 && <BarChart data={pest} allData={countOccurrences} />
      }
    </Container>
    </>

    }
    </>
  )
}

export default Pestle
import React from 'react'
import Title from '../../components/title/Title'
import Container from '../../components/container/Container'
import DoughnutChart from '../../components/doghnutChart/DoghnutChart'
import { useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const Sector = () => {

  const sector = useSelector(state => state.reducer.sector)
  const allData = useSelector(state => state.reducer.data)
  const isLoading = useSelector(state => state.funReducer.isLoading);
  const ordColor = useSelector(state => state.funReducer.ordColor);


  
  const countOccurrences = sector.map(itemOne => {
    const occurrences = allData.reduce((count, objTwo) => {
      if (objTwo.sector === itemOne) {
        count++;
      }
      return count;
    }, 0);
    
    return occurrences;
  });
  




  

  return (
    <>
    <Title title="SECTORS" />

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
      {countOccurrences.length > 0 && 
      <DoughnutChart data={sector} allData={countOccurrences} />
      }
    </Container>
    </>

    }
    
    </>
  )
}

export default Sector
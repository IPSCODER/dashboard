import React, { useEffect } from 'react'
import Title from '../../components/title/Title'
import Container from '../../components/container/Container'
import GeoChart from '../../components/geoChart/GeoChart'
import Chart from '../../components/chart/Chart'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const Countires = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    navigate("/countries")
  },[])

  const contriData = useSelector(state => state.reducer.countries)
  const isLoading = useSelector(state => state.funReducer.isLoading);
  const ordColor = useSelector(state => state.funReducer.ordColor);

  return (
    <>
    <Title title="COUNTRIES"/>
      {isLoading ? 
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
    <Chart>
    {contriData.length > 0 && <GeoChart contriData={contriData} /> }
    </Chart>
      </Container>
      </>  
    }
    </>
  )
}

export default Countires
import React from 'react'
import Title from '../../components/title/Title'
import classes from "./home.module.css"
import TotalComponents from '../../components/grid-column/TotalComponents'
import { useSelector } from 'react-redux'
import D3br from '../../components/d3/D3br'
import LineChart from '../../components/line-chart/LineChart'


const Home = () => {

  const data = useSelector(state => state.reducer)

  const cls ={
    ctitle:classes.title,
    ccounting:classes.counting,
    cpercentage:classes.percentage
  }

  return (
    <>
    <Title title="ADMIN PANEL" desc="Welcome to your Admin Panel" />
    <section className={classes.grid_system} >
    <TotalComponents  className={`${classes.grid_column} ${classes.one}`} cls={cls}   title="Total topic" logo="logo" counting={data.topic.length} logo2={(data.topic.length/data.data.length) * 100 } title2="Since Last Month"  />
    <TotalComponents className={`${classes.grid_column} ${classes.two}`} cls={cls}   title="Total sector" logo="logo" counting={data.sector.length} logo2={(data.sector.length/data.data.length) * 100 } title2="Since Last Month"  />
    <TotalComponents className={`${classes.grid_column} ${classes.three}`} cls={cls}   style={{justifyContent:'center'}} >
      {/* <D3/> */}
      <D3br/>
    </TotalComponents>
    <TotalComponents className={`${classes.grid_column} ${classes.four}`} cls={cls}   title="Total countries" logo="logo" counting={data.countries.length} logo2={(data.countries.length/data.data.length) * 100 } title2="Since Last Month"  />
    <TotalComponents className={`${classes.grid_column} ${classes.five}`} cls={cls}   title="Total pestle" logo="logo" counting={data.pestle.length} logo2={(data.pestle.length/data.data.length) * 100 } title2="Since Last Month"  />
      {/*  */}
    <TotalComponents className={`${classes.grid_column} ${classes.six}`}  cls={cls}   > 
      {data.relevance.length > 0 && <LineChart dataOne={data.intensity} dataTwo={data.relevance} dataThree={data.start_year} />}
    </TotalComponents>
    <TotalComponents className={`${classes.grid_column} ${classes.seven}`}  title="Total region" cls={cls}   logo="logo" counting={data.region.length} logo2={(data.region.length/data.data.length) * 100 } title2="Since Last Month"  />
    <TotalComponents className={`${classes.grid_column} ${classes.eight}`} title="Total source" logo="logo" cls={cls}   counting={data.source.length} logo2={(data.source.length/data.data.length) * 100 } title2="Since Last Month"  />
    <TotalComponents className={`${classes.grid_column} ${classes.nine}`}  title="Total start_year" logo="logo" cls={cls}   counting={data.start_year.length} logo2={(data.start_year.length/data.data.length) * 100 } title2="Since Last Month"  />
    <TotalComponents className={`${classes.grid_column} ${classes.ten}`} title="Total end_year" logo="logo" cls={cls}   counting={data.end_year.length} logo2={(data.end_year.length/data.data.length) * 100 } title2="Since Last Month"  />
    </section>
    </>
  )
}

export default Home
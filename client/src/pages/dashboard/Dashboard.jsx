import React, { useState ,useEffect } from 'react'
import Title from '../../components/title/Title'
import classes from "./dashboard.module.css"
import {useSelector} from "react-redux";
import Pagination from '../../components/pagination/Pagination';
import Input from '../../components/input/Input';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const Dashboard = () => {
  const [dashSearch,setDashSearch] = useState({
    title:'',
    pestle:'',
    topic:'',
    country:'',
    region:''
  })
  
  const onChangeHandler = (e) =>{
    const {name,value} = e.target;
    setDashSearch({...dashSearch,[name]:value})
  }



  
  const paginationData = useSelector(state => state.funReducer.paginationData);
  const isLoading = useSelector(state => state.funReducer.isLoading);
  const ordColor = useSelector(state => state.funReducer.ordColor);
  const [filteredProducts, setFilteredProducts] = useState(paginationData);
  const pestl = useSelector(state => state.reducer.pestle);

  const topi = useSelector(state => state.reducer.topic);
  const countr = useSelector(state => state.reducer.countries);
  const regio = useSelector(state => state.reducer.region);




    const applyFilters = (filters) => {
        let filteredResults = [...paginationData];
        if (filters.title) {
            filteredResults = filteredResults.filter(i => i.title.toLowerCase().includes(dashSearch.title.toLowerCase()) );
        }

        if (filters.pestle) {
          filteredResults = filteredResults.filter(i => i.pestle.toLowerCase().includes(dashSearch.pestle.toLowerCase()) );
        }

        if (filters.topic) {
          filteredResults = filteredResults.filter(i => i.topic.toLowerCase().includes(dashSearch.topic.toLowerCase()) );
        }

        if (filters.country !== undefined) {
          filteredResults = filteredResults.filter(i => i.country.toLowerCase().includes(dashSearch.country.toLowerCase()) );
        }
        setFilteredProducts(filteredResults);
    };

    // Example usage of applyFilters
    useEffect(() => {
        applyFilters(dashSearch);
    }, [dashSearch,paginationData]);

  

  return (
    <>
    <Title title="DASHBOARD" />
  <div className={classes.table} >
      <ul className={classes.ul} >
      
        <li className={classes.head} >
          <div className={classes.title} >
            <h2>Title</h2>
          </div>
          <div className={classes.pestle} >
            <h2>Pestle</h2>
          </div>
          <div className={classes.topic} >
            <h2>Topic</h2>
            </div>
            <div className={classes.country} >
            <h2>Country</h2>
            </div>
            <div className={classes.region} >
            <h2>Region</h2>
            </div>
            <div className={classes.url} >
            <h2>Url</h2>
            </div>
        </li>
        {
          isLoading ? 

          <>
          {new Array(1,2,3,4,5,6,7,8,9,10).map((i)=>(
 <li key={i} className={classes.head} >
 <SkeletonTheme highlightColor={ordColor}>
 <div className={classes.title} >
<div style={{width:"100%",height:"100%"}} >
      <Skeleton height={"100%"} />
    </div>
 </div>
</SkeletonTheme>
<SkeletonTheme highlightColor={ordColor}>
 <div className={classes.pestle} >
<div style={{width:"100%",height:"100%"}} >
      <Skeleton height={"100%"} />
    </div>
 </div>
</SkeletonTheme>
<SkeletonTheme highlightColor={ordColor}>
 <div className={classes.topic} >
<div style={{width:"100%",height:"100%"}} >
      <Skeleton height={"100%"} />
    </div>
 </div>
</SkeletonTheme>
<SkeletonTheme highlightColor={ordColor}>
 <div className={classes.country} >
<div style={{width:"100%",height:"100%"}} >
      <Skeleton height={"100%"} />
    </div>
 </div>
</SkeletonTheme>
<SkeletonTheme highlightColor={ordColor}>
 <div className={classes.region} >
<div style={{width:"100%",height:"100%"}} >
      <Skeleton height={"100%"} />
    </div>
 </div>
</SkeletonTheme>
<SkeletonTheme highlightColor={ordColor}>
 <div className={classes.url} >
<div style={{width:"100%",height:"100%"}} >
      <Skeleton height={"100%"} />
    </div>
 </div>
</SkeletonTheme>
</li>
          ))}
         
          </>
          :

          <>
        <li className={classes.head} >
          <div className={classes.title} >
          <Input className={classes.input} placeholder="Title Search" onChange={onChangeHandler} value={dashSearch.title} name='title' />
          </div>
          <div className={classes.pestle} >
          <select onChange={onChangeHandler} value={dashSearch.pestle} name='pestle' >
    <option value={''}  >Default</option>
      {pestl.map((i,index) =>(
        <option value={i} key={index} >{i}</option>
      ))}
    </select>
          </div>
          <div className={classes.topic} >
          <select onChange={onChangeHandler} value={dashSearch.topic} name='topic' >
    <option value={''} >Default</option>
      {topi.map((i,index) =>(
        <option value={i} key={index} >{i}</option>
      ))}
    </select>
            </div>
            <div className={classes.country} >
            <select onChange={onChangeHandler} value={dashSearch.country} name='country' >
    <option value={''} >Default</option>
      {countr.map((i,index) =>(
        <option value={i} key={index} >{i}</option>
      ))}
    </select>
            </div>
            <div className={classes.region} >
            <select onChange={onChangeHandler} value={dashSearch.region} name='region' >
    <option value={''} >Default</option>
      {regio.map((i,index) =>(
        <option value={i} key={index} >{i}</option>
      ))}
    </select>
            </div>
            <div className={classes.url} >
            
            </div>
        </li>
        {
          filteredProducts.map((data,idx)=>(
            <li key={idx} className={classes.head} >
          <div className={classes.title} >
            <p>{data.title.substring(0,150)}</p>
          </div>
          <div className={classes.pestle} >
            <p>{data.pestle}</p>
          </div>
          <div className={classes.topic} >
            <p>{data.topic}</p>
            </div>
            <div className={classes.country} >
            <p>{data.country}</p>
            </div>
            <div className={classes.region} >
            <p>{data.region}</p>
            </div>
            <div className={classes.url} >
            <p><a href={data.url} target='_blank' >{data.url.substring(0,40)}...</a></p>
            </div>
        </li>
          ))
        }
        </>
        }
      </ul>
 
<Pagination/>
  </div>
    </>
  )
}

export default Dashboard
import React, { memo, useEffect, useState } from 'react'
import classes from "./pagination.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { loadPaginationData } from '../../redux/actions/funAction'
const Pagination = () => {


  const dispatch = useDispatch()



   const data = useSelector(state => state.reducer.data)

    const [currentPage,setCurrentPage] = useState(1);
    const recordsPerPage = 25 ;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex,lastIndex);
    const npage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)
    
    

    useEffect(()=>{
      dispatch(loadPaginationData(records))
    },[data,currentPage])
  
  
    const prePage = () => {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  
    const changeCPage = (id) => {
      setCurrentPage(id)
    }
  
    const nextPage = () => {
      if (currentPage !== npage) {
        setCurrentPage(currentPage + 1)
      }
    }


  return (
    <>
    <ul className={classes.pagination} >
  <li className='page-item' >
    <button className='page-link' onClick={prePage} >Prev</button>
  </li>
  {
    numbers.slice(currentPage - 1, currentPage + 4).map((n,i) => (
      <li  className={classes[`${currentPage === n ? 'active' : '' }`]} key={i} >
        <button className='page-item' onClick={() => {changeCPage(n)}} >{n}</button>
      </li>
    ))
  }
  <li className='page-item' >
    <button className='page-link' onClick={nextPage} >Next</button>
  </li>
</ul>
    </>
  )
}

export default memo(Pagination)
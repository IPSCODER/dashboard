import './App.css';
import {BrowserRouter,Routes,Route, useNavigate,Navigate} from "react-router-dom"
import Theme from './scene/Theme';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { loadGetData } from './redux/actions/actions';
import Dashboard from './pages/dashboard/Dashboard';
import Countires from './pages/countries/Countires';
import Sector from './pages/sectors/Sector';
import Topics from './pages/topics/Topics';
import Sign from './auth/Sign';
import Pestle from './pages/pestle/Pestle';
import Setting from './pages/settings/Setting';
import NotFound from './pages/not-dound/NotFound';
import axios from 'axios';
import { loadUser } from './redux/actions/funAction';
import 'react-loading-skeleton/dist/skeleton.css'

// const Home = lazy(() => import('./pages/home/Home.jsx'))

function App() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

   const userLog = async () =>{
     console.log("one");
     await axios.get("https://dbackend-cyan.vercel.app").then((resp)=>{
       console.log("two",resp);
     if (resp.data.status === true) {
       console.log("three");
      //  setLogin(true)
      dispatch(loadUser(resp.data.email))
      navigate("/")
      dispatch(loadGetData())
     }else{ 
       console.log("four");
    //  setLogin(false)
     navigate('/sign')
     }
   }).catch((err)=>{
     console.log(err);
   })
  }

  useEffect(()=>{
    userLog()
  },[])
  return (
<>
<Routes>

  <Route path='/' element={<Theme/>} > 
<Route path='/' element={
<Home/>
} />
<Route path='/dashboard' element={<Dashboard/>} />
<Route path='/countries' element={<Countires/>} />
<Route path='/sectors' element={<Sector/>} />
<Route path='/topics' element={<Topics/>} />
<Route path='/setting' element={<Setting/>} />
<Route path='/pestle' element={<Pestle/>} />
<Route path="/admin" element={<Navigate to={"/"} />}  />
</Route> 
<Route path='/sign' element={<Sign/>} />
<Route path='*' element={<NotFound/>} />
</Routes>
</>
  );
}

export default App;

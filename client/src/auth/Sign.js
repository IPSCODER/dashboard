import React, { useEffect, useState } from 'react'
import classes from "./sign.module.css"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Input from '../components/input/Input'
import { loadGetData } from '../redux/actions/actions'
import { loadUser } from '../redux/actions/funAction'
import PassInput from '../components/input/PassInput'


const Sign = () => {
	const ordColor = useSelector(state => state.funReducer.ordColor)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [sign,setSign] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null);
	const [userData,setUserData] = useState({
		username:'',
		email:'',
		password:'',
	})

	// Regex patterns for validation
    const usernameRegex = /^[a-zA-Z0-9_]{5,}$/; // Alphanumeric and underscore, at least 5 characters
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // At least 8 characters, one uppercase, one lowercase, one number

	const {username,email,password}= userData;
	const changeHandler = (e) =>{
		const {name,value} = e.target;
		setUserData({...userData,[name]:value})
		setErrorMessage(null);
	}

	useEffect(()=>{
		var x = setTimeout(function() {
			setErrorMessage(null)	
		}, 5000);

		return () =>{
			clearTimeout(x)
		}

	},[errorMessage])

	const submitHandler = async (e) =>{
		e.preventDefault();

		if (!sign) {
			if (!emailRegex.test(email)) {
				setErrorMessage('Invalid email(Basic email pattern)');
				return;
			  }else  if (!passwordRegex.test(password)) {
				setErrorMessage('Invalid password(At least 8 characters, one uppercase, one lowercase, one number)');
				return;
			  }else{
				await axios.post('https://dbackend-cyan.vercel.app/user/signin',{email,password}).then((resp)=>{
				if (resp.data.result == true) {
					navigate("/")
					dispatch(loadUser(email))
					dispatch(loadGetData())
					setErrorMessage(null);
				}else{
					navigate("/sign")
					setErrorMessage(resp.data);
				}
			}).catch((err)=>{
				console.log(err);
			})
			
			  }
			
		}else if(sign){
			if (!usernameRegex.test(username)) {
				setErrorMessage('Invalid username(Alphanumeric and underscore, at least 5 characters)');
				return;
			  }else  if (!emailRegex.test(email)) {
				setErrorMessage('Invalid email(Basic email pattern)');
				return;
			  }else  if (!passwordRegex.test(password)) {
				setErrorMessage('Invalid password(At least 8 characters, one uppercase, one lowercase, one number)');
				return;
			  }else{
				await axios.post('https://dbackend-cyan.vercel.app/user/signup',{username,email,password}).then((resp)=>{
				if (resp.data.result == true) {
					navigate("/")
					dispatch(loadGetData())
					dispatch(loadUser(email))
					setErrorMessage(null);
					
				}else{		
					navigate("/sign")
				}
			}).catch((err)=>{
				console.log(err);
			})
			  }	
			
		}
		setUserData({
			username:'',
			email:'',
			password:''
		})
		
	}


  return (
    <div className={classes.sign}>
<div className={classes.main}>  	
			<div className={classes.in} style={{background: `linear-gradient(to bottom, ${ordColor} 0%,#111111 80%)`}} >
				<h2  >{sign ? "Sign Up" : "Sign In" }</h2>
				<form className={classes.form} onSubmit={submitHandler} >
				{sign && <Input placeholder="Enter Username" type="text" name="username" value={username} onChange={changeHandler} />}
					<Input placeholder="Enter Email" type="text" name="email" value={email} onChange={changeHandler} />
					{/* <Input placeholder='Enter Password' type="password" name="password" value={password} onChange={changeHandler} /> */}
					<PassInput stylep={{width:'90%'}} placeholder='Enter Password' type="password" name="password" value={password} onChange={changeHandler} />
					<button className={classes.button} >{sign ? "Sign Up" : "Sign In" }</button>
					{errorMessage && <p className={classes.validtext} >{errorMessage}</p>}
				</form>
				<h6>{sign ? "Already have an" : "Don't have an account ?"}<span style={{color:ordColor}} onClick={() => {setSign(prev => !prev);setErrorMessage(null);}} >{sign ? "SignIn" : "SignUp"}</span></h6>
			</div>
	</div>
	<h2 className={classes.demo} >For Demo Use Email: <span >demo@gmail.com</span> and Password: <span>Abc@1234</span></h2>
    </div>
  )
}

export default Sign

import React, {useEffect, useState} from 'react'
// import {useAuth} from '../Context/UserAuthContext'

import './Css/LoginSignup.css'

const LoginSignup = () => {
  // const {error, SignUp, currentuser} = useAuth()
  // const {err, setError} = useState('')
  // const {backError, setBackError} = useState('')
  // const {user, setUser} = useState({
  //   name: '',
  //   email: '',
  //   password: ''
  // })
  // useEffect(() => {
  //   console.log('I am in')
  //   if (error) {
  //     setInterval(()=>{
  //       setBackError('')
  //     }, 5000)
  //     setBackError(error)
  //   }
  // }, {error, currentuser}) 

  // const UserHandeler = (e) => {
  //   const {name, value} = e.target;
  //   setUser((pre) => {
  //     return {
  //       ...pre,
  //       [name]: value 
  //     }
  //   })
  // }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Adress'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
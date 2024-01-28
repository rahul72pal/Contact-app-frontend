import './App.css'
import Contact from './components/Contacts'
import {Routes ,Route } from 'react-router-dom'
import AddContact from './components/AddContact'
import LoginPage from './components/LoginPage'
import SingUp from './components/SingUp'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function App() {

  const [user, setUser] = useState(null);
  // const getUser = async ()=> {
  //   try {
  //     const url = `${import.meta.env.VITE_BACKEND_URL}/auth/login/success`;
  //     const response = await axios.get('http://localhost:3000/login/sucess',{withCredentials: true});
      
  //     // setUser(data.user._json);
  //     console.log("User Response =",response.data.data);
  //     setUser(response.data.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(()=>{
  //   getUser();
  // },[]);

  
  return (
    <div className='maindiv w-full'>
      {/* <p className='bg-red-300'>Hello worl</p> */}
      <Routes>
        <Route path='/' element={ <Contact />}></Route>
        <Route path='/add' element={ <AddContact/>}></Route>
        <Route path='/singup' element={ <SingUp/>}></Route>
        <Route path='/login' element={ <LoginPage/>}></Route>
      </Routes>
    </div>
  )
}

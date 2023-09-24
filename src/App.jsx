import './App.css'
import Contact from './components/Contacts'
import {Routes ,Route } from 'react-router-dom'
import AddContact from './components/AddContact'

export default function App() {

  
  return (
    <div className='maindiv'>
      <Routes>
        <Route path='/' element={ <Contact/>}></Route>
        <Route path='/add' element={ <AddContact/>}></Route>
      </Routes>
    </div>
  )
}

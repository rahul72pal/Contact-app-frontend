import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import createNewContact from './createnewContact'
import {useMutation, useQueryClient} from 'react-query'
import "./components.css"
import {createContextapi} from './Context'
import {useContext} from 'react'
import updatecontact from './updatecontact'

export default function AddContact(){
  const navigate = useNavigate();
  const [contact , setContact] = useState({
    birth:"",email:"",fullname:"",file:"",phonenumber:""
  })

  const{update , setUpdate} = useContext(createContextapi);
  console.log("update",update);
  
  //app new conatct
  const {mutate:updateconatcts, isLoading:updateloading , isError:updateError} =useMutation(updatecontact,{
    onSuccess: ()=> queryclient.invalidateQueries("contact")
  })
  
  //Update  conatct
  const queryclient = useQueryClient();
  const {mutate, isLoading , isError} =useMutation(createNewContact,{
    onSuccess: ()=> queryclient.invalidateQueries("contact")
  })

  useEffect(()=>{
    if(update){
      setContact({
        ...contact,
        birth:update.birth.split("T")[0],
        email:update.email,
        fullname:update.fullname,
        file: update.file,
        phonenumber: update.phonenumber,
        id: update._id
      })
    }
  },[])

  
  
  const handlesubmit = (e) => {
    e.preventDefault();
    if(update){
     // updatecontact(contact);
      updateconatcts(contact);
      navigate('/');
      setUpdate(null);
    }
    else{
    mutate(contact);
    console.log(contact);
    navigate('/');
    }
    setContact({birth:"",email:"",fullname:"",file:"",phonenumber:""})
  }
  return (
    <section className='addcontact'>
      <div className='Addcontact'>
        <button
        className='Addcontactbtn'
        onClick={()=> navigate(-1)}
        >Go to Back</button>
      </div>
      <div className='formdiv'>
        <form className='form'
          onSubmit={handlesubmit}
          >
          <h1>{update? "Update Contact": "Add contact"}</h1>
          <input value={contact.fullname}
            onChange={(e)=>
              setContact({...contact , fullname: e.target.value})
              }
            type="text"placeholder="Full Name..." ></input>
          <input value={contact.email}
            onChange={(e)=>
              setContact({...contact , email: e.target.value})
              }
            type="email"placeholder="Email..." ></input>
         <input value={contact.phonenumber}
           onChange={(e)=>
              setContact({...contact , phonenumber: e.target.value})
              }
           type="text"placeholder="Phone Number..." ></input>
          <input value={contact.birth} 
            onChange={(e)=>
              setContact({...contact , birth: e.target.value})
              }
            type="Date" ></input>
          <input 
            onChange={(e)=>
              setContact({...contact , file: e.target.files[0]})
              }
            type="file"></input>
          <button >{update? "Update ": "Submit"}</button>
        </form>
      </div>
    </section>
  )
}
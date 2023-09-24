import deleteContact from './deletecontact'
import {useMutation, useQueryClient} from 'react-query'
import "./components.css"
import {MdDelete} from 'react-icons/md'
import {BiEditAlt} from 'react-icons/bi'
import ContactContextShare from './Context'
import {createContextapi} from './Context'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'


export default function Card({contact}){
  const navigate = useNavigate();

  const {birth,email,fullname,_id,image,phonenumber} = contact

  const{update , setUpdate} = useContext(createContextapi);
  console.log("update",update);

  const queryclient = useQueryClient();
  const {mutate, isLoading , isError} =useMutation(["contact",_id],deleteContact,{
    onSuccess: ()=> queryclient.invalidateQueries("contact")
  })

  const updatehandle = ()=>{
    setUpdate(contact);
    navigate("/add");
  }
  
  return(
    <div className='card'>
     <img src={image} className='cardimg' />
      <div className='cardcontent'>
        <p className='fullname'>FullName: {fullname}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phonenumber}</p>
        <p>Date of Birth: {birth.split("T")[0]}</p>
        {/* <p>Date of Birth: {_id}</p> */}
        <div className='cardbtn'>
          <button
            onClick={()=>mutate(_id)}
            ><MdDelete/></button>
          <button
            onClick={()=>updatehandle()}
            ><BiEditAlt/></button>
        </div>
      </div>
    </div>
  )
}
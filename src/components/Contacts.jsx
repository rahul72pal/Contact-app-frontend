import Card from './Card'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import getallData from './FetchContact'
// import updatecontact from './updatecontact';
import "./components.css"

export default function Contacts({user}) {

  const navigate = useNavigate();


  const { data, isLoading1: isLoading, isError } = useQuery("contact", getallData);
  // const { isLoading2: isLoading } = useQuery("update",updatecontact);
  console.log("1", data);
  console.log("2", isLoading);
  console.log("3", isError);

  function gotoaddpage() {
    console.log("gotoaddpage");
    navigate('/add')
  }

  const logoutGoogle = () => {
    window.open("http://localhost:3000/logout", "_self")
  }

  return (
    <div className='contacts relative'>
      <div className='flex w-full text-center gap-3 justify-center mt-6'>
        {/* <img src={user?.image} className='rounded-full' alt="" /> */}
        <h1 className='heading'>Contact Application</h1>
      </div>
      {/* {user && <button onClick={logoutGoogle}>logout</button>} */}

      <div className='Addcontact'>
        <button className='Addcontactbtn' onClick={() => gotoaddpage()}>Add Contact</button>
      </div>
      <div className='cards'>
        {/* {isLoading && <p>Laoding...</p>} */}
        {/* {isError && <p>SomeThing Went wrong</p>} */}
        {data && data.length === 0 ? (
          <p className='empty'>No Contact exist</p>
        ) : (
          data?.map((contact, id) => (
            <Card contact={contact} key={id} />
          ))
        )}
      </div>
      {isLoading && <div className='text-[95px] w-full h-full flex justify-center items-center  text-gray-600 opacity-70 absolute'>
        Loading...
      </div>}
    </div>
  )
}
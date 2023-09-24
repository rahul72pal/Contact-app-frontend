import Card from './Card'
import {useNavigate} from 'react-router-dom'
import {useQuery} from 'react-query';
import getallData from './FetchContact'
import "./components.css"

export default function Contacts(){

  const navigate = useNavigate();
//   const dummyData = [
//   {
//     id: 1,
//     fullname: 'John Doe',
//     email: 'john@example.com',
//     phonenumber: '123-456-7890',
//     image: 'https://example.com/john.jpg',
//     birth: '1990-01-15',
//   },
//   {
//     id: 2,
//     fullname: 'Jane Smith',
//     email: 'jane@example.com',
//     phonenumber: '987-654-3210',
//     image: 'https://example.com/jane.jpg',
//     birth: '1985-04-22',
//   },
//   {
//     id: 3,
//     fullname: 'Alice Johnson',
//     email: 'alice@example.com',
//     phonenumber: '555-123-4567',
//     image: 'https://example.com/alice.jpg',
//     birth: '1995-07-10',
//   },
//   {
//     id: 4,
//     fullname: 'Bob Brown',
//     email: 'bob@example.com',
//     phonenumber: '333-888-9999',
//     image: 'https://example.com/bob.jpg',
//     birth: '1988-12-05',
//   },
//   {
//     id: 5,
//     fullname: 'Ella Davis',
//     email: 'ella@example.com',
//     phonenumber: '777-555-1234',
//     image: 'https://example.com/ella.jpg',
//     birth: '1992-03-18',
//   },
//   {
//     id: 6,
//     fullname: 'David Wilson',
//     email: 'david@example.com',
//     phonenumber: '111-222-3333',
//     image: 'https://example.com/david.jpg',
//     birth: '1982-09-25',
//   },
//   {
//     id: 7,
//     fullname: 'Emily Taylor',
//     email: 'emily@example.com',
//     phonenumber: '666-999-8888',
//     image: 'https://example.com/emily.jpg',
//     birth: '1998-06-12',
//   },
//   {
//     id: 8,
//     fullname: 'Michael Johnson',
//     email: 'michael@example.com',
//     phonenumber: '777-777-7777',
//     image: 'https://example.com/michael.jpg',
//     birth: '1993-11-01',
//   },
//   {
//     id: 9,
//     fullname: 'Olivia Martin',
//     email: 'olivia@example.com',
//     phonenumber: '222-333-4444',
//     image: 'https://example.com/olivia.jpg',
//     birth: '1991-08-29',
//   },
//   {
//     id: 10,
//     fullname: 'Sophia White',
//     email: 'sophia@example.com',
//     phonenumber: '444-555-6666',
//     image: 'https://example.com/sophia.jpg',
//     birth: '1987-02-14',
//   },
//   {
//     id: 11,
//     fullname: 'William Lee',
//     email: 'william@example.com',
//     phonenumber: '555-666-7777',
//     image: 'https://example.com/william.jpg',
//     birth: '1996-04-03',
//   },
//   {
//     id: 12,
//     fullname: 'Ava Harris',
//     email: 'ava@example.com',
//     phonenumber: '888-999-1111',
//     image: 'https://example.com/ava.jpg',
//     birth: '1994-10-08',
//   },
//   {
//     id: 13,
//     fullname: 'James Martinez',
//     email: 'james@example.com',
//     phonenumber: '333-555-9999',
//     image: 'https://example.com/james.jpg',
//     birth: '1989-07-17',
//   },
//   {
//     id: 14,
//     fullname: 'Liam Anderson',
//     email: 'liam@example.com',
//     phonenumber: '222-444-6666',
//     image: 'https://example.com/liam.jpg',
//     birth: '1986-12-22',
//   },
//   {
//     id: 15,
//     fullname: 'Emma Rodriguez',
//     email: 'emma@example.com',
//     phonenumber: '111-888-7777',
//     image: 'https://example.com/emma.jpg',
//     birth: '1997-05-20',
//   },
// ];
//   // console.log(dummyData);

  const {data, isLoading , isError} = useQuery("contact",getallData);
  console.log(data);

  function gotoaddpage(){
    console.log("gotoaddpage");
    navigate('/add')
  }
  
  return(
    <div className='contacts'>
     <h1 className='heading'>Contact Application</h1>

      <div className='Addcontact'>
        <button className='Addcontactbtn'  onClick={()=>gotoaddpage()}>Add Contact</button>
      </div>
      <div className='cards'>
        {isLoading && <p>Laoding...</p>}
        {isError && <p>SomeThing Went wrong</p>}
        {data && data.length === 0 ? (
          <p className='empty'>No Contact exist</p>
        ) : (
          data?.map((contact, id) => (
            <Card contact={contact} key={id} />
          ))
        )}
      </div>
    </div>
  )
}
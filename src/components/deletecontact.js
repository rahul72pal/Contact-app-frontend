import axios from 'axios'
const url = 'http://localhost:3000'

const deleteContact = async (id)=>{
  // console.log("create contact called")
  console.log("delete conatct id = ",id);
  try{
  await axios.delete(`${url}/api/v1/contact/delete/${id}`);
  }catch(er){
    console.log("error in post create");
    console.log(er.response.data);
  }
}

export default deleteContact;
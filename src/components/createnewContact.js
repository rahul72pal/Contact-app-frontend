import axios from 'axios'
const url = 'http://localhost:3000'


const createNewContact = async (data)=>{
  // console.log("create contact called")
  console.log("create conatct = ",data);
  try{
    const res = await axios.post(`${url}/api/v1/contact/create`,data,{
      headers: {
          'Content-Type': 'multipart/form-data',
        },
    });
    console.log("response=",res.data);
    return res.data.conatct;
  }catch(er){
    console.log("error in post create");
    console.log(er.response.data);
  }
}

export default createNewContact;
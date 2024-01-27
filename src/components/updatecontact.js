import axios from 'axios'

const updatecontact = async (data)=>{
  // console.log("create contact called")
  console.log("update conatct = ",data);
  try{
    console.log("axios call update")
    const res = await axios.post(`BACKEN_URL/api/v1/contact/update/${data.id}`,data);
    console.log("response =",res.data);
    return res.data.conatct;
  }catch(er){
    console.log("error in update create");
    console.log(er.response.data);
  }
}

export default updatecontact;
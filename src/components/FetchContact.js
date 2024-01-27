import axios from 'axios'
const BASE_ULR ='https://contactappbackend.rahulpal5.repl.co/api/v1';

//get all data from the api
 const getallData = async ()=>{
  try{
    const res = await axios.get(`BACKEN_URL/api/v1/contact/all`);
    return res.data.conatct;
  }catch(er){
    console.log(er);
    console.log("error in getalldata")
  }
}

export default getallData;


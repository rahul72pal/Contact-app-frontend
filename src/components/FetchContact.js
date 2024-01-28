import axios from 'axios'
// const BASE_ULR ='https://contactappbackend.rahulpal5.repl.co/api/v1';
const url = 'http://localhost:3000'

//get all data from the api
 const getallData = async ()=>{
  try{
    const res = await axios.get(`${url}/api/v1/contact/all`);
    console.log("Result fecth",res);
    return res.data.conatct;
  }catch(er){
    console.log(er);
    console.log("error in getalldata")
  }
}

export default getallData;


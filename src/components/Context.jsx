import {createContext, useContext, useState} from 'react';

export const createContextapi = createContext();
// export const  ContactContextShare = ()=> useContext(createContextapi);

export default function Context({children}){

  const [update , setUpdate]= useState(null);
  
  return (
    <createContextapi.Provider value={{update , setUpdate}} >{children}</createContextapi.Provider>
  )
}




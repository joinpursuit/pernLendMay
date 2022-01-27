import React, { useState, useEffect, createContext } from "react";
  import { auth } from "../Services/Firebase";
// import { useDispatch } from "react-redux";
// import { getAllCarsFN } from "../util/networkRequest";
// import { addCars } from "../Store/Actions/carsActions";const [user, setUser] = useState(null);
export const UserContext = createContext({ user: null });
export const UserProvider = (props) =>{

  const [user, setUser] = useState(null);
  useEffect(()=>{},[])
  return(
    <div></div>
  )
}
  
 

 
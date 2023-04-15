import React, { useEffect, useState } from 'react'

import { Navigate, Outlet, useNavigate } from 'react-router-dom';


const PrivateRoute = () => {
  const [auth, setAuth] = useState({token : localStorage.getItem('TOKEN')}) ;

  if(auth.token !== null){
    return <Outlet/>;
 }else{
   return <Navigate to='/login'/>
 }
 
}

export default PrivateRoute
import React from 'react'
import { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Main } from './Main';
import { useEffect } from 'react';
import  Unauthorized  from './Unauthorized';


export const Content = () => {

  const[logindata,setLogindata] = useState([]);

    const navigate = useNavigate();
    const calllogin = () => {
    var authtoken = localStorage.getItem("authtoken");
    if(authtoken && authtoken.length){
      setLogindata(authtoken);
    }
  }
    useEffect(() => {
      calllogin();
    },[])
    
  return (
    <>
    {
      logindata.length === 0 ?<Unauthorized/>:
      <>
      <Main />
      </>
    }
    </>
  )
}

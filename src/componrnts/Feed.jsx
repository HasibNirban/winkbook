import { Box, MenuItem } from '@mui/material'
import Posts from './Posts'
import { useEffect, useLayoutEffect,useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {styled} from '@mui/material';
import React, { Component } from 'react'

var obj = [];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
const user = localStorage.getItem('user');

const Feed = () => { 

// const fetchUsers = async () => {
// fetch('http://gagandeep.engineer:8080/post/',{
//   method: 'GET',
//   headers: {
//     "Accept": "application/json",
//     "Authorization": "Token " + localStorage.getItem('authtoken')
//   },
// }).then((response) => {
//   if(response.status >= 200 && response.status < 300){
//     response.json().then((data) => {
//     })
//   }
// }) 
// }

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "100px",
  alignItems: "center",
  paddingRight: "420px",
  paddingTop: "50px",
  paddingLeft:"350px",
}));

const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('http://gagandeep.engineer:8080/post/',{
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Authorization": "Token " + localStorage.getItem('authtoken')
    },
  }).then((response) => {
    if(response.status >= 200 && response.status < 300){
      response.json().then((data) => {
        setUsers(data);
      })
    }
  })
}, []);

if (users.length===0) return <UserBox><CircularProgress /></UserBox>;
//console.log(users);
 return (
  <Box flex={4} p={2}>
    {
      users.map((post) => {
        return <Posts ob={post} />
      })
    }
  <Posts/>
</Box>
  );
}

export default Feed;
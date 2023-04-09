import { useEffect, useState } from "react"
import Navbar from "../component/Navbar"
import axios from "axios"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,
  } from '@chakra-ui/react'

const Dashboard=()=>{
    const [users,setUsers]= useState([])

  useEffect(()=>{
    axios.get(`https://game-server-ektz.onrender.com/player`).then((res)=>{
        setUsers(res.data.data)  
    }).catch((e)=>{
        console.log(e);
    })
  },[])

  users.sort((a,b)=>{
    return b.score-a.score
  })


    return (<div style={{height:"100vh",backgroundImage:"url(https://th.bing.com/th/id/R.61185b60970519d6e296752c5bd4aad6?rik=ONJ9BiSI6Pypxg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fPS7HtBx.jpg&ehk=Wp4iIm2urtoPDt6VmUAK%2fVwsQu039qsBU9qRmeZcGe4%3d&risl=&pid=ImgRaw&r=0)",backgroundSize:"100%"}}>
         <Navbar/>

         
         <TableContainer w={"70%"} m={"auto"} >
 
  <Table marginTop={"20px"} variant="unstyled" colorScheme='yellow' bg={"white"} color={"black"} fontWeight={"bold"}>
    <TableCaption>Game Scores Of All Users</TableCaption>
    <Thead bg={"teal"} >
      <Tr>
        <Th>#</Th>
        <Th>Name</Th>
        <Th>Difficulty</Th>
        <Th>Score</Th>
      </Tr>
    </Thead>
    <Tbody>
        {users && users.map((el,i)=>{
           return  <Tr>
                <Td>{i+1}</Td>
                <Td>{el.name}</Td>
                <Td>{el.difficulty}</Td>
                <Td>{el.score}</Td>
            </Tr>
        })}
    </Tbody>
  </Table>
</TableContainer>

        </div>)
}

export default Dashboard
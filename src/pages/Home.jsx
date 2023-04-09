import { Box, Button, Container, Heading, Input, Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../redux/action/player.action";
import axios from "axios";

const initial={
    name:"",
    difficulty:""
}
const Home = () => {
    const [player,setPlayer] = useState(initial)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setPlayer({...player,[e.target.name]:e.target.value})
    }
 

    const handleSubmit= (e)=>{
        e.preventDefault();
        axios.post("https://game-server-ektz.onrender.com/player/add",player).then((res)=>{
         if(res.data.error){
          alert("Something went wrong")
         }else{
          dispatch(addPlayer(res.data.data))
          navigate("/playzone")
         }
        }).catch((e)=>{
          alert("Something went wrong")
          console.log(e);
        })
     }

  return (
    <Box>

        <Container mt={"10%"} p="20px" boxShadow="rgba(3, 102, 214, 0.3) 0px 0px 0px 3px">
            <Heading textAlign={"center"} color="yellow.800" mb={"20px"}>START THE GAME</Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" border={"transparent"} borderBottom="1px solid black" borderRadius={"0"} name="name" value={player.name} onChange={handleChange}/>
        <FormLabel>Level</FormLabel>
        <Select placeholder='Select Level' border={"transparent"} borderBottom="1px solid black" borderRadius={"0"}  name="difficulty" value={player.difficulty} onChange={handleChange}>
        <option value='High'>High</option>
      <option value='Medium'>Medium</option>
       <option value='Low'>Low</option>
       </Select>
      <Button onClick={handleSubmit} mt={"20px"} w={"100%"} bg="yellow.700" color={"white"}>Start New Game</Button>
      </FormControl>
      </Container>
    </Box>
  );
};

export default Home;

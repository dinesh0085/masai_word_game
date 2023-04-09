import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import styles from "./Playzone.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addScore } from "../redux/action/player.action";

const Playzone = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [shift, setShift] = useState(false);
  const [caps, setCaps] = useState(false);
  const curr_player = useSelector((store) => store.player);



  useEffect(() => {
    axios
      .get("https://game-server-ektz.onrender.com/randomword")
      .then((res) => {
        setWord(res.data.data.word);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [curr_player.score]);


  const handleChange = (e) => {
    if (e.target.innerText === "SHIFT") {
      setShift(!shift);
      return;
    }

    if (e.target.innerText === "CAPS") {
      setCaps(!caps);
      return;
    }

    if (e.target.innerText === "DELETE") {
      setText("");
      return;
    }

    if (
      e.target.innerText === "CTRL" ||
      e.target.innerText === "TAB" ||
      e.target.innerText === "window" ||
      e.target.innerText === "OPTION" ||
      e.target.innerText === "ALT" ||
      e.target.innerText === "<=" ||
      e.target.innerText === "=>"
    ) {
      return;
    }

    if (e.target.innerText === "SPACE") {
      setText((text) => text + " ");
      return;
    }

    if (e.target.innerText === "ENTER") {
      return;
    } else if (shift) {
      setText((text) => text + e.target.innerText);
      setShift(!shift);
    } else if (caps) {
      setText((text) => text + e.target.innerText);
    } else {
      setText((text) => text + e.target.innerText.toLowerCase());
    }
  };

  const handleEnter = (e) => {
    e.preventDefault();
    if (text === word) {
        axios.put(`https://game-server-ektz.onrender.com/player/update/${curr_player.id}`).then((res)=>{
            if(res.data.error){
             alert("Something went wrong")
            }else{
             dispatch(addScore(1))
             setText("")
            }
           }).catch((e)=>{
             alert("Something went wrong")
             console.log(e);
           })
    } else {
      alert("Wrong Input");
      setText("")
    }
  };

  if (!curr_player.id) {
    navigate("/");
  }

  return (
    <Box bg="#02bdd5" h={"100vh"} backgroundColor={"gray.300"} >
      <Navbar />
      <Text display={"flex"} justifyContent={"space-evenly"}  bg={"white"} p="20px" w={"auto"} textAlign="center" color={"black"}>
         <Text fontSize={"15px"} p={"10px"} bg={"#3f0e40"} color={"gray"} fontWeight={"extrabold"} w={"30%"}>
            <Text>Name: {curr_player.name}</Text>
            <Text>Difficulty: {curr_player.difficulty}</Text>
         </Text>
         <Text fontSize={"20px"} p={"10px"} bg={"darkblue"} color={"yellow"} fontWeight={"extrabold"} w={"30%"}>{word}</Text>
         <Text fontSize={"20px"} p={"10px"} bg={"darkgreen"} color={"white"} fontWeight={"extrabold"} w={"30%"}>Score: {curr_player.score}</Text>
      </Text>
      <Heading bg={"teal"} textAlign={"center"} fontSize="26px" fontWeight={"semibold"}>
        {text===""?"Your Text":text}
      </Heading>
      <Box className={styles.keyboard} >
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>

        <Box
          color={"white"}
          bg={shift ? "green" : "red"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          borderRadius={".5rem"}
        >
          Shift{" "}
        </Box>
        <Box
          color={"white"}
          bg={caps ? "green" : "red"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          borderRadius={".5rem"}
        >
          Caps{" "}
        </Box>

        <Box onClick={handleChange} className={styles.button_key}>
          -
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          1
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          2
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          3
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          4
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          5
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          6
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          7
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          8
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          9
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          0
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          DELETE
        </Box>

        <Box onClick={handleChange} className={styles.button_key}>
          TAB
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          Q
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          W
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          E
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          R
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          T
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          Y
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          U
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          I
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          O
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          P
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          \
        </Box>

        <Box onClick={handleChange} className={styles.button_key}>
          CAPS
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          A
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          S
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          D
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          F
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          G
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          H
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          J
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          K
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          L
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          ,
        </Box>
        <Box onClick={handleEnter} className={styles.button_key}>
          ENTER
        </Box>

        <Box onClick={handleChange} className={styles.button_key}>
          SHIFT
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          Z
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          X
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          C
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          V
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          B
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          N
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          M
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          {"<"}
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          {">"}
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          .
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          SHIFT
        </Box>

        <Box onClick={handleChange} className={styles.button_key}>
          window
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          CTRL
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          OPTION
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          ALT
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          SPACE
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          SPACE
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          SPACE
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          SPACE
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          ALT
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          OPTION
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          {"<="}
        </Box>
        <Box onClick={handleChange} className={styles.button_key}>
          {"=>"}
        </Box>
      </Box>
    </Box>
  );
};

export default Playzone;

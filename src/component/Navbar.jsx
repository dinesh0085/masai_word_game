import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar=()=>{
    return (
        <Box display={"flex"} justifyContent="space-around" w="100%" h="30px" bg="black" color="white" fontSize={"20px"} fontWeight="extrabold">
            <Link to={"/"}>Main Menu</Link>
            <Link to={"/playzone"}>Playzone</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
        </Box>
    )
}

export default Navbar
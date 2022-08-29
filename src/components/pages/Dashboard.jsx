import { Box } from "@chakra-ui/react";
import Navbar from "../util/Navbar";
import Board from "../Board";
import Question from "../Question"; 
import Answers from "../Answers";

const Dashboard = () => {
  return (
    <Box sx={{
        height: '100vh',
        bgColor: 'blue.800',
        color: '#fff'
    }}>
        <Box sx={{
            maxW: '600px',
            m: '0 auto'
        }}>
            <Navbar />
            <Board />
            <Question />
            <Answers />
    </Box>
    </Box>
  )
}

export default Dashboard
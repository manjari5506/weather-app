import React from "react";
import {Box,Button,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";

 
export const Navbar = ()=>{
    return(
        <Box width={'100%'} height={'130px'}textAlign={"left"} padding={'25px'} fontSize={'50px'} bg={'#d7eafa'} textColor={'#43aefc'} display={'flex'} justifyContent={'space-between'}>
           <Text cursor={'pointer'}> Weather App</Text>
           <Box>
           <Link to="/">
           <Button
                    borderRadius={'15px 15px 15px 15px'}
                    color={'white'}
                    bg={'#43aefc'}
                    margin={'10px'}
                    _hover={{ 'bg': '43aefc' }}
                >
                    Search Weather
            </Button>
            </Link>
            <Link to="/output">
            <Button
                    borderRadius={'15px 15px 15px 15px'}
                    color={'white'}
                    bg={'#43aefc'}
                    _hover={{ 'bg': '43aefc' }}
                >
                    View Result
            </Button>
            </Link>
            </Box>
        </Box>
    )
}
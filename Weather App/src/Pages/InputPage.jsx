import { Button, Center, Flex, Icon, Input, useToast, Box, Text} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherByCity, getWeatherByLocation } from "../redux/actions";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

export const InputPage = () => {

    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChange = () => {
        dispatch(getWeatherByCity(city, toast));
    }

    const handleLocationData = () => {
        dispatch(getWeatherByLocation(toast));
    }

    return (
        <Box width={'30%'} height={'100%'} margin={'auto'} marginTop={'50px'} shadow={'0px 0px 30px 6px #E2E2E2'}>
        <Flex p={'10px'} minH={'300px'} bg={'#d7eafa'} justifyContent={'center'} flexDirection={['column', 'column']} gap={['5px', '50px']} borderRadius={'10px'}>
            <Center px={'10px'}>
                <Input
                    onInput={(e) => { setCity(e.target.value) }}
                    value={city}
                    borderRadius={'15px 0px 0px 15px'}
                    bg={'white'}
                    _focus={{ 'border': 'none' }}
                    placeholder="Enter City Name"
                />
                 <Link to="/output">
                <Button
                    onClick={handleChange}
                    borderRadius={'0px 15px 15px 0px'}
                    color={'white'}
                    bg={'#43aefc'}
                    _hover={{ 'bg': '43aefc' }}
                >
                   Search
                </Button>
                </Link>
            </Center>
            <Text marginTop={'-20px'} marginBottom={'-20px'} color={'grey'}>OR</Text>
            <Link to="/output">
            <Center px={'10px'}>
                <Button
                    bg={'#43aefc'}
                    _hover={{ 'bg': '43aefc' }}
                    color={'white'}
                    w={'100%'}
                    borderRadius={'15px'}
                    leftIcon={<Icon w={'30px'} h={'30px'} as={HiLocationMarker} />}
                    onClick={handleLocationData}
                >
                    Get Device Location
                </Button>
            </Center>
            </Link>
        </Flex >
        </Box>
    );
};
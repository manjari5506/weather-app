import { Box, Button, Flex, Heading, Icon, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { celsius } from "../helpers/helpingFunctions";
import { getItem } from "../helpers/sessionStorage";
import { getWeatherByLocation, syncData } from "../redux/actions";
import { Error } from "../Components/Error";
import { Loading } from "../Components/Loading";
import { BsArrowLeftShort } from "react-icons/bs";
import { NewText } from "../Components/SmallComponents";
import { Link } from "react-router-dom";
import { FaSyncAlt } from "react-icons/fa";
import { BsSun, BsClouds, BsCloudRain, BsCloudSnow, BsFillCloudHaze2Fill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";



export const Output = () => {

    const { isLoading, weatherData: data, isError } = useSelector((state) => state, shallowEqual);
    const [isRotate, setIsRotate] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        let weather = getItem("weather");
        !weather && dispatch(getWeatherByLocation(toast));
    }, []);

    const handleSyncData = () => {
        setIsRotate(true);
        dispatch(syncData(data.name, toast))
    }

    const handleIcon = () => {
        const condition = data.weather[0].main;
        if (condition == "Sunny") {
            return BsSun;
        }
        else if (condition == "Rain" || condition == "Mist") {
            return BsCloudRain;
        }
        else if (condition == "Clouds") {
            return BsClouds;
        }
        else if (condition == "Snow") {
            return BsCloudSnow;
        }
        else return BsFillCloudHaze2Fill;
    }

    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Box width={'30%'} height={'100%'} margin={'auto'} padding={'80px 0px 170px 0px'} >
                <Box bg={'white'} borderRadius={'5px 5px 0px 0px'} borderBottom={'1px'} borderColor={'#D8D8D8'}>
                    <Flex>
                        <Link to="/">
                            <Button
                                leftIcon={<Icon w={'30px'} h={'30px'} as={BsArrowLeftShort} color={'#43aefc'} />}
                                bg={'white'}
                                _hover={{ 'bg': '43aefc' }}
                                paddingLeft={'10px'}
                                paddingTop={'10px'}>
                            </Button>
                        </Link>
                        <Text textAlign={'left'} fontSize={'20px'} fontWeight={'500'} color={'#43aefc'} padding={'10px 0px 15px 0px'}>Weather App</Text>
                    </Flex>
                </Box>
                <Flex p={'10px'} minH={'280px'} bg={'white'} justifyContent={'center'} flexDirection={['column', 'column']} gap={['5px', '50px']} borderRadius={'0px 0px 0px 0px'}>
                    <Box color={'black'} p={'20px'} textAlign={'center'}>
                        <Flex justify={'end'}>
                            <Icon
                                color={'#43aefc'}
                                onClick={handleSyncData}
                                onAnimationEnd={() => { setIsRotate(false) }}
                                className={isRotate ? "iconRotate" : undefined}
                                cursor={'pointer'} w={'23px'} h={'23px'} as={FaSyncAlt}
                            />
                        </Flex>
                        <Icon
                            color={'#43aefc'}
                            cursor={'pointer'} w={'150px'} h={'150px'} as={handleIcon()}
                        />
                        <Heading fontSize={'15px'}>{data.weather[0].main}</Heading>
                        <Heading fontSize={['55px', '60px', '60px', '55px', '60px']}>{Math.round(data.main.temp)}<sup>o</sup>C</Heading>
                        <Flex justifyItems={'center'} paddingLeft={'120px'}>
                            <Icon w={'30px'} h={'30px'} as={HiLocationMarker} bg={'white'} _hover={{ 'bg': 'white' }} border={'0px'} />
                            <Heading fontSize={'30px'} paddingLeft={'10px'} >{data.name}</Heading>
                        </Flex>
                    </Box>
                </Flex>
                <Box bg={'white'} borderRadius={'0px 0px 5px 5px'} borderTop={'1px'} borderColor={'#D8D8D8'}>
                    <Flex width={'100%'} height={'60px'} paddingTop={'15px'} paddingBottom={'-10px'}>
                        <Flex justifyItems={'center'} width={'50%'}  paddingLeft={'40px'}>
                            <Icon w={'30px'} h={'30px'} as={FaTemperatureHigh}  color={'#43aefc'} bg={'white'} _hover={{ 'bg': 'white' }} border={'0px'} />
                            <NewText>{celsius(data.main.feels_like)}<sup>o</sup> C</NewText>
                        </Flex>
                        <Flex justifyItems={'center'} width={'50%'}  paddingLeft={'40px'}>
                            <Icon w={'30px'} h={'30px'} as={WiHumidity}  color={'#43aefc'} bg={'white'} _hover={{ 'bg': 'white' }} border={'0px'} />
                            <NewText>{data.main.humidity}%</NewText>
                        </Flex>
                    </Flex>
                    <Flex width={'100%'} paddingTop={'0px'}paddingBottom={'5px'}>
                        <Flex justifyItems={'center'} width={'50%'}  paddingLeft={'80px'} fontSize={'11px'}>Feels Like</Flex>
                        <Flex justifyItems={'center'} width={'50%'}  paddingLeft={'80px'} fontSize={'11px'}>Humidity</Flex>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};





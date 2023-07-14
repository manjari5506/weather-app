import { Box, Flex, Grid, Heading, Icon, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { celsius } from "../helpers/helpingFunctions";
import { getItem } from "../helpers/sessionStorage";
import { getWeatherByLocation, syncData } from "../redux/actions";
import { Error } from "../Components/Error";
import { Loading } from "../Components/Loading";
import { FaSyncAlt } from "react-icons/fa";
import { Newbox, NewText } from "../Components/SmallComponents";

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

    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Box maxW={'1300px'} m={'20px auto 5px'} p={'20px'} minH={'500px'} marginLeft={'120px'}>
                <Grid gridTemplateColumns={['100%', 'repeat(2, 1fr)', '45% 45% ']} gap={'40px'}>
                    <Newbox>
                        <Box color={'#43aefc'} p={'20px'} textAlign={'center'}>
                            <Flex justify={'end'}>
                                <Icon
                                    onClick={handleSyncData}
                                    onAnimationEnd={() => { setIsRotate(false) }}
                                    className={isRotate ? "iconRotate" : undefined}
                                    cursor={'pointer'} w={'23px'} h={'23px'} as={FaSyncAlt}
                                />
                            </Flex>
                            <Heading>{data.name}</Heading>
                            <Heading fontSize={['100px', '120px', '120px', '100px', '120px']}>{Math.round(data.main.temp)}<sup>o</sup>C</Heading>
                            <Heading>{data.weather[0].main}</Heading>
                        </Box>
                    </Newbox>

                    <Newbox>
                        <Grid templateColumns={'50% 50%'} h={'100%'} p={'8px'}>
                            <Box py={'10px'} pl={'15%'}>
                                {['Felt Temp.', 'Humidity', 'Wind', 'Visibility', 'Max Temp.', 'Min Temp.']?.map((e, i) => (
                                    <Text key={i} color={'#43aefc'} fontWeight={500} mt={'15px'} fontSize={'18px'} >{e}</Text>
                                ))}
                            </Box>
                            <Box borderRadius={'30px'} bg={'#43aefc'} py={'10px'} pl={'15%'}>
                                <NewText>{celsius(data.main.feels_like)}<sup>o</sup> C</NewText>
                                <NewText>{data.main.humidity}%</NewText>
                                <NewText>{(data.wind.speed * 3.6).toFixed(2)} Km/h</NewText>
                                <NewText>{(data.visibility * 0.001).toFixed(2)} Km</NewText>
                                <NewText>{celsius(data.main.temp_max)}<sup>o</sup> C</NewText>
                                <NewText>{celsius(data.main.temp_min)}<sup>o</sup> C</NewText>
                            </Box>
                        </Grid>
                    </Newbox>
                </Grid>
            </Box >
        </>
    );
};







import { Box, Text } from "@chakra-ui/react";

// export const Newbox = ({ children }) => {
//     return (
//         <Box className="zoom" overflow={'hidden'} shadow={'0px 0px 30px 6px #E2E2E2'} borderRadius={'30px'} h={'300px'}>
//             {children}
//         </Box>
//     );
// };

export const NewText = ({ children }) => {
    return (
        <Text color={'black'} fontWeight={500} mt={'-5px'} fontSize={'25px'} paddingLeft={'10px'}>
            {children}
        </Text>
    );
};
import { Container, Image } from "@chakra-ui/react";

export const Error = () => {

    return (
        <Container marginLeft={'550px'} marginTop={'100px'}>
            <Image src='data:image/png;base64,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' />
        </Container>
    );
};
import Link from "next/link";
import { Flex, Box, Stack, Text, Button, useDisclosure } from "@chakra-ui/react";
import { IoLogoTwitter } from "react-icons/io";

import Register from "../components/Register";

const HomePage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex flexDirection={{ base: "column", lg: "row" }}>
                <Box
                    backgroundImage="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
                    height={{ base: "40vh", lg: "100vh" }}
                    width={{ base: "100%", lg: "55%" }}
                />
                <Box height={{ base: "60vh", lg: "100vh" }} width={{ base: "100%", lg: "45%" }}>
                    <Stack
                        alignItems={{ base: "normal", md: "center", lg: "normal" }}
                        height="100%"
                        justifyContent="center"
                        padding={{ base: "30px", lg: "60px" }}
                        spacing={7}
                    >
                        <Stack spacing={7}>
                            <Box color="_white" fontSize="45px" height="45px" width="45px">
                                <IoLogoTwitter />
                            </Box>
                            <Text
                                color="_white"
                                fontSize={{ base: "40px", lg: "60px" }}
                                fontWeight="bold"
                                lineHeight="1.3"
                                maxW="500px"
                            >
                                Lo que está pasando ahora
                            </Text>
                            <Text
                                color="_white"
                                fontSize={{ base: "20px", lg: "30px" }}
                                fontWeight="bold"
                            >
                                Únete a Twitter hoy mismo.
                            </Text>
                        </Stack>
                        <Stack direction={{ base: "column", md: "row", lg: "column" }} spacing={4}>
                            <Button
                                _hover={{ bg: "rgb(26, 145, 218)" }}
                                bg="_blue"
                                borderRadius={9999}
                                color="_white"
                                fontSize="15px"
                                maxWidth="380px"
                                minW="250px"
                                paddingY={6}
                                onClick={onOpen}
                            >
                                Regístrate
                            </Button>
                            <Link href="/login">
                                <Button
                                    _hover={{ bg: "rgb(26, 145, 218)" }}
                                    borderColor="_blue"
                                    borderRadius={9999}
                                    color="_blue"
                                    fontSize="15px"
                                    maxWidth="380px"
                                    minW="250px"
                                    paddingY={6}
                                    variant="outline"
                                >
                                    Iniciar sesión
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Box>
            </Flex>
            <Register isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default HomePage;

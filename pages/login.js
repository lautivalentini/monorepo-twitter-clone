import { useState, useContext } from "react";
import { Button, Box, Input, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { IoLogoTwitter } from "react-icons/io";
import { useRouter } from "next/router";
import axios from "axios";

import Register from "../components/Register";
import AuthContext from "../context/AuthContext";
import validatePhone from "../utils/validatePhone";
import validatePassword from "../utils/validatePassword";

const Login = () => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { addUserdata } = useContext(AuthContext);
    const [showText, setShowText] = useState({
        user: false,
        password: false,
    });
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [fields, setFields] = useState({ phone: false, password: false });

    async function logginUser() {
        try {
            const logginUser = await axios.post(`api/user/auth/login`, {
                phone,
                password,
            });

            addUserdata({
                ...logginUser.data.user,
                token: logginUser.data.token,
            });
            sessionStorage.setItem("token", logginUser.data.token);
            router.push("/home");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Box margin="auto" maxW="350px" padding={{ base: "10px", md: "0" }} width="95%">
                <Stack direction="column" marginTop={4} spacing={6}>
                    <Text color="_white" fontSize="40px">
                        <IoLogoTwitter />
                    </Text>
                    <Text
                        color="_white"
                        fontSize={{ base: "29px", md: "31px" }}
                        fontWeight="bold"
                        lineHeight="9"
                    >
                        Iniciar sesión en Twitter
                    </Text>
                    <Stack spacing={6}>
                        <Box position="relative">
                            <Input
                                borderColor="_gray"
                                color="_white"
                                padding={showText.user ? "40px 0 20px 10px" : "28px 10px"}
                                placeholder={!showText.user ? "Télefono" : null}
                                sx={{ "::placeholder": { color: "#6e767d" } }}
                                type="tel"
                                onBlur={(e) => {
                                    if (e.target.value === "") {
                                        setShowText({ ...showText, user: false });
                                    }
                                }}
                                onChange={(e) => {
                                    setPhone(e.target.value.replace(/ /g, ""));
                                    if (validatePhone(e.target.value.replace(/ /g, ""))) {
                                        setFields({ ...fields, phone: true });
                                    } else {
                                        setFields({ ...fields, phone: false });
                                    }
                                }}
                                onFocus={() => setShowText({ ...showText, user: true })}
                            />
                            {showText.user && (
                                <Text
                                    color="_blue"
                                    fontSize="12px"
                                    left="10px"
                                    position="absolute"
                                    top="10px"
                                >
                                    Télefono
                                </Text>
                            )}
                        </Box>
                        <Box position="relative">
                            <Input
                                borderColor="_gray"
                                color="_white"
                                padding={showText.password ? "40px 0 20px 10px" : "28px 10px"}
                                placeholder={!showText.password ? "Contraseña" : null}
                                sx={{ "::placeholder": { color: "#6e767d" } }}
                                type="password"
                                onBlur={(e) => {
                                    if (e.target.value === "") {
                                        setShowText({ ...showText, password: false });
                                    }
                                }}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (validatePassword(e.target.value)) {
                                        setFields({ ...fields, password: true });
                                    } else {
                                        setFields({ ...fields, password: false });
                                    }
                                }}
                                onFocus={() => setShowText({ ...showText, password: true })}
                            />
                            {showText.password && (
                                <Text
                                    color="_blue"
                                    fontSize="12px"
                                    left="10px"
                                    position="absolute"
                                    top="10px"
                                >
                                    Contraseña
                                </Text>
                            )}
                        </Box>
                    </Stack>
                    <Button
                        _hover={{ bg: "rgb(26, 145, 218)" }}
                        bg="_blue"
                        borderRadius={9999}
                        color="_white"
                        disabled={fields.phone && fields.password ? false : true}
                        fontSize="14px"
                        fontWeight="bold"
                        paddingY={6}
                        onClick={logginUser}
                    >
                        Iniciar sesión
                    </Button>
                    <Stack
                        color="_blue"
                        direction={{ base: "column", md: "row" }}
                        fontSize="14px"
                        justifyContent="center"
                        spacing={{ base: 0, md: 1 }}
                        textAlign="center"
                    >
                        <Text _hover={{ textDecoration: "underline" }} cursor="pointer">
                            ¿Olvidaste tu contraseña?
                        </Text>
                        <Text>·</Text>
                        <Text
                            _hover={{ textDecoration: "underline" }}
                            cursor="pointer"
                            onClick={onOpen}
                        >
                            Regístrate en Twitter
                        </Text>
                    </Stack>
                </Stack>
            </Box>
            <Register isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Login;

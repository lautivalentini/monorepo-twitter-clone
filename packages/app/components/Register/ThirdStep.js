import { Text, Stack, Input, Box, Button } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import AuthContext from "../../context/AuthContext";
import generateUsername from "../../utils/generateUsername";

const ThirdStep = ({ updateStep }) => {
    const { registerData, addUserdata } = useContext(AuthContext);
    const router = useRouter();

    const [showText, setShowText] = useState({
        name: false,
        phone: false,
        date: false,
    });

    async function createUser() {
        const username = await generateUsername(registerData.name);
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        try {
            await axios.post(`${API_URL}/api/user/create`, {
                name: registerData.name,
                phone: registerData.phone,
                date: `${registerData.day}/${registerData.month}/${registerData.year}`,
                password: registerData.password,
                username,
            });
            const logginUser = await axios.post(`${API_URL}/api/user/auth/login`, {
                phone: registerData.phone,
                password: registerData.password,
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
        <Stack spacing={12}>
            <Stack spacing={6}>
                <Text color="_white" fontSize="23px" fontWeight="bold">
                    Crea tu cuenta
                </Text>
                <Box position="relative" width="100%">
                    <Input
                        borderColor="_gray"
                        color="_white"
                        padding="40px 0 20px 10px"
                        value={registerData.name}
                        onBlur={() => setShowText({ ...showText, name: false })}
                        onFocus={() => {
                            setShowText({ ...showText, name: true });
                            setTimeout(() => updateStep(1), 500);
                        }}
                    />
                    <Text
                        color={showText.name ? "_blue" : "_textInput"}
                        fontSize="12px"
                        left="10px"
                        position="absolute"
                        top="10px"
                    >
                        Nombre
                    </Text>
                </Box>
                <Box position="relative" width="100%">
                    <Input
                        borderColor="_gray"
                        color="_white"
                        padding="40px 0 20px 10px"
                        value={registerData.phone}
                        onBlur={() => setShowText({ ...showText, phone: false })}
                        onFocus={() => {
                            setShowText({ ...showText, phone: true });
                            setTimeout(() => updateStep(1), 500);
                        }}
                    />
                    <Text
                        color={showText.phone ? "_blue" : "_textInput"}
                        fontSize="12px"
                        left="10px"
                        position="absolute"
                        top="10px"
                    >
                        Télefono, correo o usuario
                    </Text>
                </Box>
                <Box position="relative" width="100%">
                    <Input
                        borderColor="_gray"
                        color="_white"
                        padding="40px 0 20px 10px"
                        value={
                            registerData.day + "/" + registerData.month + "/" + registerData.year
                        }
                        onBlur={() => setShowText({ ...showText, date: false })}
                        onFocus={() => {
                            setShowText({ ...showText, date: true });
                            setTimeout(() => updateStep(1), 500);
                        }}
                    />
                    <Text
                        color={showText.date ? "_blue" : "_textInput"}
                        fontSize="12px"
                        left="10px"
                        position="absolute"
                        top="10px"
                    >
                        Fecha de nacimiento
                    </Text>
                </Box>
            </Stack>
            <Stack spacing={4}>
                <Text color="_textInput" fontSize="15px" textAlign="justify">
                    Si te registras, significa que aceptas los Términos del servicio y la Política
                    de privacidad, incluido el Uso de cookies. Otros usuarios podrán encontrarte por
                    tu correo electrónico o tu número de teléfono si los proporcionas · Opciones de
                    privacidad
                </Text>
                <Button
                    _hover={{ bg: "rgb(26, 145, 218)" }}
                    bg="_blue"
                    borderRadius={9999}
                    color="white"
                    fontSize="15px"
                    paddingY={6}
                    width="100%"
                    onClick={createUser}
                >
                    Registrate
                </Button>
            </Stack>
        </Stack>
    );
};

export default ThirdStep;

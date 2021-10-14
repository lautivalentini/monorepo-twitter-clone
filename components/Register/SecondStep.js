import { Stack, Text, Checkbox } from "@chakra-ui/react";

const SecondStep = () => {
    return (
        <>
            <Stack spacing={7}>
                <Text color="_white" fontSize="23px" fontWeight="bold">
                    Personaliza tu experiencia
                </Text>
                <Stack spacing={3}>
                    <Text color="_white" fontSize="18px" fontWeight="bold">
                        Registrar dónde ves contenido de Twitter en la web
                    </Text>
                    <Stack direction="row" spacing={3}>
                        <Text color="_white" fontSize="15px" textAlign="justify">
                            Twitter utiliza estos datos para personalizar tu experiencia. Este
                            historial de navegación web nunca se almacenará con tu nombre, correo
                            electrónico ni número de teléfono.
                        </Text>
                        <Checkbox defaultIsChecked padding="10px" size="lg" />
                    </Stack>
                </Stack>
                <Text color="_textInput" fontSize="15px">
                    Para obtener más información sobre esta configuración, visita el{" "}
                    <Text
                        _hover={{ textDecoration: "underline" }}
                        color="_blue"
                        cursor="pointer"
                        display="inline-block"
                    >
                        Centro de ayuda
                    </Text>
                    .
                </Text>
            </Stack>
        </>
    );
};

export default SecondStep;

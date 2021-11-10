import { Button, Box, Text } from "@chakra-ui/react";
import { IoLogoTwitter, IoMdClose } from "react-icons/io";
import { useContext } from "react";

import AuthContext from "../../context/AuthContext";

const HeaderModal = ({ updateStep, steps }) => {
    const { registerData, validationFields } = useContext(AuthContext);

    return (
        <>
            {steps > 1 && (
                <Box
                    color="_blue"
                    cursor="pointer"
                    fontSize="22.5px"
                    height="22.5px"
                    left="10px"
                    position="absolute"
                    top="15px"
                    width="22.5px"
                    onClick={() => updateStep("decrement")}
                >
                    <IoMdClose />
                </Box>
            )}
            {steps > 2 ? (
                <Text color="_white" fontSize="20px" ml={10}>
                    Paso {steps} de 5
                </Text>
            ) : (
                <>
                    <Box color="_white" fontSize="30px" height="30px" margin="auto" width="30px">
                        <IoLogoTwitter />
                    </Box>
                    <Button
                        _hover={{ bg: "rgb(26, 145, 218)" }}
                        bg="_blue"
                        borderRadius={9999}
                        color="white"
                        disabled={
                            registerData.phone === "" ||
                            registerData.name === "" ||
                            registerData.month === "" ||
                            registerData.day === "" ||
                            registerData.year === "" ||
                            !validationFields.phone ||
                            !validationFields.password
                                ? true
                                : false
                        }
                        fontSize="15px"
                        position="absolute"
                        right="10px"
                        size="sm"
                        top="10px"
                        onClick={() => updateStep("increment")}
                    >
                        Siguiente
                    </Button>
                </>
            )}
        </>
    );
};

export default HeaderModal;

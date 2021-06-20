import {
  Button,
  Box,
  Text
} from "@chakra-ui/react"
import { IoLogoTwitter, IoMdClose } from 'react-icons/io'
import { useContext } from "react"

import AuthContext from "../../context/AuthContext";

const HeaderModal = ({ updateStep, steps }) => {
  const { registerData, validationFields } = useContext(AuthContext);
  return (
    <>
      {steps > 1 && (
        <Box
          width="22.5px"
          height="22.5px"
          fontSize="22.5px"
          color="_blue"
          position="absolute"
          top="15px"
          left="10px"
          cursor="pointer"
          onClick={() => updateStep("decrement")}
        >
          <IoMdClose />
        </Box>
      )}
      {steps > 2 ? (
        <Text ml={10} fontSize="20px" color="_white">Paso {steps} de 5</Text>
      ) : (
        <>
          <Box
            width="30px"
            height="30px"
            fontSize="30px"
            margin="auto"
            color="_white"
          >
            <IoLogoTwitter />
          </Box>
          <Button
            size="sm"
            bg="_blue"
            color="white"
            position="absolute"
            top="10px"
            right="10px"
            fontSize="15px"
            borderRadius={9999}
            disabled={
              registerData.phone === '' ||
                registerData.name === '' ||
                registerData.month === '' ||
                registerData.day === '' ||
                registerData.year === '' ||
                !validationFields.phone ||
                !validationFields.password
                ? true : false
            }
            _hover={{ bg: "#1DA1F2", opacity: "0.9" }}
            onClick={() => updateStep("increment")}
          >
            Siguiente
          </Button>
        </>
      )}
    </>
  )

}

export default HeaderModal
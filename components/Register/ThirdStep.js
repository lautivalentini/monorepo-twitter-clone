import {
  Text,
  Stack,
  Input,
  Box,
  Button
} from "@chakra-ui/react"
import { useState, useContext } from 'react'

import RegisterContext from "../../context/RegisterContext";

const ThirdStep = ({ updateStep }) => {
  const { registerData } = useContext(RegisterContext);
  const [showText, setShowText] = useState({
    name: false,
    phone: false,
    date: false,
  })
  return (
    <Stack spacing={12}>
      <Stack spacing={6}>
        <Text fontWeight="bold" fontSize="23px" color="_white">Crea tu cuenta</Text>
        <Box position="relative" width="100%">
          <Input 
            color="_white" 
            borderColor="_gray" 
            padding="40px 0 20px 10px"
            value={registerData.name}
            onFocus={() => {
              setShowText({...showText, name: true})
              setTimeout(() => updateStep(1), 500)
            }}
            onBlur={() => setShowText({...showText, name: false})}
          />
          <Text fontSize="12px" color={showText.name ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Nombre</Text>
        </Box>
        <Box position="relative" width="100%">
          <Input 
            color="_white" 
            borderColor="_gray" 
            padding="40px 0 20px 10px"
            value={registerData.phone}
            onFocus={() => {
              setShowText({...showText, phone: true})
              setTimeout(() => updateStep(1), 500)
            }}
            onBlur={() => setShowText({...showText, phone: false})}
          />
          <Text fontSize="12px" color={showText.phone ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Télefono, correo o usuario</Text>
        </Box>
        <Box position="relative" width="100%">
          <Input 
            color="_white" 
            borderColor="_gray" 
            padding="40px 0 20px 10px"
            value={registerData.day + '' + registerData.month + '' + registerData.year}
            onFocus={() => {
              setShowText({...showText, date: true})
              setTimeout(() => updateStep(1), 500)
            }}
            onBlur={() => setShowText({...showText, date: false})}
          />
          <Text fontSize="12px" color={showText.date ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Fecha de nacimiento</Text>
        </Box>
      </Stack>
      <Stack spacing={4}>
        <Text textAlign="justify" fontSize="15px" color="_textInput">Si te registras, significa que aceptas los Términos del servicio y la Política de privacidad, incluido el Uso de cookies. Otros usuarios podrán encontrarte por tu correo electrónico o tu número de teléfono si los proporcionas · Opciones de privacidad</Text>
        <Button fontSize="15px" color="white" paddingY={6} width="100%" borderRadius={9999} bg="_blue" _hover={{bg: "#1DA1F2", opacity: "0.9"}}>Registrate</Button>
      </Stack>
    </Stack>
  )

}

export default ThirdStep
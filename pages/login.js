import { useState } from "react"
import { Button, Box, Input, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { IoLogoTwitter } from 'react-icons/io'
import Register from "../components/Register"

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showText, setShowText] = useState({
    user: false,
    password: false,
  })
  return (
    <>
    <Box margin="auto" width="95%" maxW="350px" padding={{base: "10px", md: "0"}}>
      <Stack marginTop={4} direction="column" spacing={6}>
      <Text color="_white" fontSize="40px">
      <IoLogoTwitter />
      </Text>
      <Text lineHeight="9" fontSize={{base: "29px", md: "31px"}} fontWeight="bold" color="_white">Iniciar sesión en Twitter</Text>
      <Stack spacing={6}>
        <Box position="relative">
          <Input 
            color="_white" 
            borderColor="_gray" 
            padding={showText.user ? "40px 0 20px 10px" : "28px 10px"}
            placeholder={!showText.user ? "Télefono, correo o usuario" : null} 
            sx={{ "::placeholder": { color: "#6e767d" }  }}
            onFocus={() => setShowText({...showText, user: true})}
            onBlur={(e) => {
              if (e.target.value === '') {
                setShowText({...showText, user: false})
              }
            }}
          />
          {showText.user && <Text fontSize="12px" color="_blue" position="absolute" top="10px" left="10px">Télefono, correo o usuario</Text>}
        </Box>
        <Box position="relative">
          <Input 
            color="_white" 
            borderColor="_gray" 
            padding={showText.password ? "40px 0 20px 10px" : "28px 10px"}
            placeholder={!showText.password ? "Contraseña" : null} 
            sx={{ "::placeholder": { color: "#6e767d" }  }}
            onFocus={() => setShowText({...showText, password: true})}
            onBlur={(e) => {
              if (e.target.value === '') {
                setShowText({...showText, password: false})
              }
            }}
          />
          {showText.password && <Text fontSize="12px" color="_blue" position="absolute" top="10px" left="10px">Contraseña</Text>}
        </Box>
      </Stack>
      <Button _hover={{bg: "#1DA1F2", opacity: "0.9"}} fontWeight="bold" fontSize="14px" borderRadius={9999} paddingY={6} bg="_blue" color="_white">Iniciar sesión</Button>
      <Stack direction={{base: "column", md: "row"}} justifyContent="center" textAlign="center" fontSize="14px" color="_blue" spacing={{base: 0, md: 1}}>
        <Text cursor="pointer" _hover={{textDecoration: "underline"}}>¿Olvidaste tu contraseña?</Text>
        <Text>·</Text>
        <Text cursor="pointer" _hover={{textDecoration: "underline"}} onClick={onOpen}>Regístrate en Twitter</Text>
      </Stack>
      </Stack>
    </Box>
    <Register isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Login
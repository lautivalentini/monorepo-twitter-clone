import { Button, Box, Input, Stack, Text } from "@chakra-ui/react"
import { IoLogoTwitter } from 'react-icons/io'

const Login = () => {
  return (
    <Box margin="auto" width="95%" maxW="350px" padding={{base: "10px", md: "0"}}>
      <Stack marginTop={4} direction="column" spacing={6}>
      <Text color="_white" fontSize="40px">
      <IoLogoTwitter />
      </Text>
      <Text lineHeight="9" fontSize={{base: "29px", md: "31px"}} fontWeight="bold" color="_white">Iniciar sesión en Twitter</Text>
      <Stack spacing={6}>
        <Input color="_white" borderColor="_gray" paddingY={7} placeholder="Télefono, correo o usuario"/>
        <Input color="_white" borderColor="_gray" paddingY={7} placeholder="Contraseña"/>
      </Stack>
      <Button _hover={{bg: "#1DA1F2", opacity: "0.9"}} fontWeight="bold" fontSize="14px" borderRadius={9999} paddingY={6} bg="_blue" color="_white">Iniciar sesión</Button>
      <Stack direction={{base: "column", md: "row"}} justifyContent="center" textAlign="center" fontSize="14px" color="_blue" spacing={{base: 0, md: 1}}>
        <Text cursor="pointer" _hover={{textDecoration: "underline"}}>¿Olvidaste tu contraseña?</Text>
        <Text>·</Text>
        <Text cursor="pointer" _hover={{textDecoration: "underline"}}>Regístrate en Twitter</Text>
      </Stack>
      </Stack>
    </Box>
  )
}

export default Login
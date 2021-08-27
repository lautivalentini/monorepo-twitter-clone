import {
  Text,
  Stack,
  Input,
  Box,
  Button
} from "@chakra-ui/react"
import { useState, useContext } from 'react'
import { useRouter } from "next/router";

import AuthContext from "../../context/AuthContext";

import axios from 'axios'

import generateUsername from '../../utils/generateUsername'

const ThirdStep = ({ updateStep }) => {
  const { registerData, addUserdata } = useContext(AuthContext);
  const router = useRouter()

  const [showText, setShowText] = useState({
    name: false,
    phone: false,
    date: false,
  })

  async function createUser() {
    const username = await generateUsername(registerData.name)
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/create`, {
        name: registerData.name,
        phone: registerData.phone,
        date: `${registerData.day}/${registerData.month}/${registerData.year}`,
        password: registerData.password,
        username,
      })
      const logginUser = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/auth/login`, {
        phone: registerData.phone,
        password: registerData.password,
      })
      addUserdata({
        ...logginUser.data.user,
        token: logginUser.data.token
      })
      sessionStorage.setItem('token', logginUser.data.token)
      router.push('/home')
    } catch (err) {
      console.log(err)
    }
  }

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
              setShowText({ ...showText, name: true })
              setTimeout(() => updateStep(1), 500)
            }}
            onBlur={() => setShowText({ ...showText, name: false })}
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
              setShowText({ ...showText, phone: true })
              setTimeout(() => updateStep(1), 500)
            }}
            onBlur={() => setShowText({ ...showText, phone: false })}
          />
          <Text fontSize="12px" color={showText.phone ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Télefono, correo o usuario</Text>
        </Box>
        <Box position="relative" width="100%">
          <Input
            color="_white"
            borderColor="_gray"
            padding="40px 0 20px 10px"
            value={registerData.day + '/' + registerData.month + '/' + registerData.year}
            onFocus={() => {
              setShowText({ ...showText, date: true })
              setTimeout(() => updateStep(1), 500)
            }}
            onBlur={() => setShowText({ ...showText, date: false })}
          />
          <Text fontSize="12px" color={showText.date ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Fecha de nacimiento</Text>
        </Box>
      </Stack>
      <Stack spacing={4}>
        <Text textAlign="justify" fontSize="15px" color="_textInput">Si te registras, significa que aceptas los Términos del servicio y la Política de privacidad, incluido el Uso de cookies. Otros usuarios podrán encontrarte por tu correo electrónico o tu número de teléfono si los proporcionas · Opciones de privacidad</Text>
        <Button
          fontSize="15px"
          color="white"
          paddingY={6}
          width="100%"
          borderRadius={9999}
          bg="_blue"
          _hover={{ bg: 'rgb(26, 145, 218)' }}
          onClick={createUser}
        >
          Registrate
        </Button>
      </Stack>
    </Stack>
  )

}

export default ThirdStep
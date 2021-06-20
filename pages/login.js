import { useState, useContext } from "react"
import { Button, Box, Input, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { IoLogoTwitter } from 'react-icons/io'
import { useRouter } from "next/router";

import Register from "../components/Register"

import AuthContext from "../context/AuthContext"

import validatePhone from '../utils/validatePhone'
import validatePassword from '../utils/validatePassword'

import axios from 'axios'

const Login = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { addUserdata } = useContext(AuthContext)
  const [showText, setShowText] = useState({
    user: false,
    password: false,
  })
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [fields, setFields] = useState({ phone: false, password: false })

  async function logginUser() {
    try {
      const logginUser = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/auth/login`, {
        phone,
        password,
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
    <>
      <Box margin="auto" width="95%" maxW="350px" padding={{ base: "10px", md: "0" }}>
        <Stack marginTop={4} direction="column" spacing={6}>
          <Text color="_white" fontSize="40px">
            <IoLogoTwitter />
          </Text>
          <Text lineHeight="9" fontSize={{ base: "29px", md: "31px" }} fontWeight="bold" color="_white">Iniciar sesión en Twitter</Text>
          <Stack spacing={6}>
            <Box position="relative">
              <Input
                type="tel"
                color="_white"
                borderColor="_gray"
                padding={showText.user ? "40px 0 20px 10px" : "28px 10px"}
                placeholder={!showText.user ? "Télefono" : null}
                sx={{ "::placeholder": { color: "#6e767d" } }}
                onFocus={() => setShowText({ ...showText, user: true })}
                onBlur={(e) => {
                  if (e.target.value === '') {
                    setShowText({ ...showText, user: false })
                  }
                }}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/ /g, ""))
                  if (validatePhone(e.target.value.replace(/ /g, ""))) {
                    setFields({ ...fields, phone: true })
                  } else {
                    setFields({ ...fields, phone: false })
                  }
                }}
              />
              {showText.user && <Text fontSize="12px" color="_blue" position="absolute" top="10px" left="10px">Télefono</Text>}
            </Box>
            <Box position="relative">
              <Input
                type="password"
                color="_white"
                borderColor="_gray"
                padding={showText.password ? "40px 0 20px 10px" : "28px 10px"}
                placeholder={!showText.password ? "Contraseña" : null}
                sx={{ "::placeholder": { color: "#6e767d" } }}
                onFocus={() => setShowText({ ...showText, password: true })}
                onBlur={(e) => {
                  if (e.target.value === '') {
                    setShowText({ ...showText, password: false })
                  }
                }}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (validatePassword(e.target.value)) {
                    setFields({ ...fields, password: true })
                  } else {
                    setFields({ ...fields, password: false })
                  }
                }}
              />
              {showText.password && <Text fontSize="12px" color="_blue" position="absolute" top="10px" left="10px">Contraseña</Text>}
            </Box>
          </Stack>
          <Button
            _hover={{ bg: "#1DA1F2", opacity: "0.9" }}
            fontWeight="bold"
            fontSize="14px"
            borderRadius={9999}
            paddingY={6}
            bg="_blue"
            color="_white"
            onClick={logginUser}
            disabled={fields.phone && fields.password ? false : true}
          >
            Iniciar sesión
          </Button>
          <Stack direction={{ base: "column", md: "row" }} justifyContent="center" textAlign="center" fontSize="14px" color="_blue" spacing={{ base: 0, md: 1 }}>
            <Text cursor="pointer" _hover={{ textDecoration: "underline" }}>¿Olvidaste tu contraseña?</Text>
            <Text>·</Text>
            <Text cursor="pointer" _hover={{ textDecoration: "underline" }} onClick={onOpen}>Regístrate en Twitter</Text>
          </Stack>
        </Stack>
      </Box>
      <Register isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Login
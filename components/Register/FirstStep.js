import {
  Text,
  Box,
  Stack,
  Input,
  Select,
  UnorderedList,
  ListItem,
  Tooltip
} from "@chakra-ui/react"
import { useState, useContext } from "react"

import AuthContext from "../../context/AuthContext";

import months from '../../utils/months'
import days from '../../utils/days'
import getYears from '../../utils/getYears'
import validatePhone from '../../utils/validatePhone'
import validatePassword from '../../utils/validatePassword'

const FirstStep = () => {
  const date = new Date()
  const fullYear = date.getFullYear()

  const { addRegisterData, registerData, validateFields } = useContext(AuthContext);
  const [showText, setShowText] = useState({
    name: false,
    phone: false,
    password: false,
    month: false,
    day: false,
    year: false,
  })

  const filteredDays = days.filter(day => {
    if (registerData.month !== '') {
      const monthSelected = months.find(month => month.number.toString() === registerData.month)
      return day <= monthSelected.days
    } else {
      return day
    }
  })

  return (
    <Stack spacing={7}>
      <Text color="white" fontWeight="bold" fontSize="23px">Crea tu cuenta</Text>
      <Box position="relative" width="100%">
        <Input
          type="text"
          color="_white"
          borderColor="_gray" padding={showText.name || registerData.name !== '' ? "40px 0 20px 10px" : "28px 10px"}
          placeholder={!showText.name ? "Nombre" : null}
          width="100%"
          maxWidth="550px"
          sx={{ "::placeholder": { color: "#6e767d" } }}
          onFocus={() => setShowText({ ...showText, name: true })}
          onBlur={(e) => {
            if (e.target.value === '') {
              setShowText({ ...showText, name: false })
            }
          }}
          onChange={(e) => addRegisterData("name", e.target.value)}
          value={registerData.name}
        />
        {showText.name || registerData.name !== '' ? <Text fontSize="12px" color="_blue" position="absolute" top="10px" left="10px">Nombre</Text> : null}
      </Box>
      <Box position="relative" width="100%">
        <Tooltip placement="bottom" hasArrow label={
          <Text fontSize="12px" color="_textInput" p={2}>
            Complete the phone number in the following format: +54 155936573
          </Text>
        }>
          <Input
            type="tel"
            color="_white"
            borderColor="_gray"
            padding={showText.phone || registerData.phone !== '' ? "40px 0 20px 10px" : "28px 10px"}
            placeholder={!showText.phone ? "Teléfono" : null}
            width="100%"
            maxWidth="550px"
            sx={{ "::placeholder": { color: "#6e767d" } }}
            onFocus={() => setShowText({ ...showText, phone: true })}
            onBlur={(e) => {
              if (e.target.value === '') {
                setShowText({ ...showText, phone: false })
              }
            }}
            onChange={(e) => {
              addRegisterData("phone", e.target.value.replace(/ /g, ""))
              if (validatePhone(e.target.value.replace(/ /g, ""))) {
                validateFields("phone")
              }
            }}
            value={registerData.phone}
          />
        </Tooltip>
        {showText.phone || registerData.phone !== '' ? <Text fontSize="12px" color="_blue" position="absolute" top="10px" left="10px">Télefono</Text> : null}
      </Box>
      <Box position="relative" width="100%">
        <Tooltip placement="bottom" hasArrow label={
          <UnorderedList fontSize="12px" color="_textInput" p={2}>
            <ListItem>At least one upper case</ListItem>
            <ListItem>At least one lower case</ListItem>
            <ListItem>At least one special character</ListItem>
            <ListItem>Minimum eight in length</ListItem>
          </UnorderedList>
        }>
          <Input
            type="password"
            color="_white"
            borderColor="_gray"
            padding={showText.password || registerData.password !== '' ? "40px 0 20px 10px" : "28px 10px"}
            placeholder={!showText.password ? "Contraseña" : null}
            width="100%"
            maxWidth="550px"
            sx={{ "::placeholder": { color: "#6e767d" } }}
            onFocus={() => setShowText({ ...showText, password: true })}
            onBlur={(e) => {
              if (e.target.value === '') {
                setShowText({ ...showText, password: false })
              }
            }}
            onChange={(e) => {
              addRegisterData("password", e.target.value)
              if (validatePassword(e.target.value)) {
                validateFields("password")
              }
            }}
            value={registerData.password}
          />
        </Tooltip>
        {showText.password || registerData.password !== '' ? <Text fontSize="12px" color="_blue" position="absolute" top="10px" left="10px">Contraseña</Text> : null}
      </Box>
      <Stack spacing={3}>
        <Stack spacing={0} fontSize="15px">
          <Text color="white" fontWeight="bold">Fecha de nacimiento</Text>
          <Text color="_textInput" textAlign="justify">
            Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.
          </Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
          <Box width={{ base: '100%', md: '50%' }} position="relative" >
            <Select
              color="white"
              fontSize="14px"
              borderColor="_gray"
              width="100%"
              height="55px"
              onFocus={() => setShowText({ ...showText, month: true })}
              onBlur={() => setShowText({ ...showText, month: false })}
              style={{ paddingTop: '20px', paddingLeft: '10px' }}
              onChange={(e) => addRegisterData("month", e.target.value)}
              value={registerData.month}
            >
              <option value="" style={{ backgroundColor: 'black' }}></option>
              {months.map(month => <option key={month.number} value={month.number} style={{ backgroundColor: 'black' }} >{month.name}</option>)}
            </Select>
            <Text fontSize="12px" color={showText.month ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Mes</Text>
          </Box>
          <Box width={{ base: '100%', md: '25%' }} position="relative" >
            <Select
              color="white"
              fontSize="14px"
              borderColor="_gray"
              width="100%"
              height="55px"
              onFocus={() => setShowText({ ...showText, day: true })}
              onBlur={() => setShowText({ ...showText, day: false })}
              style={{ paddingTop: '20px', paddingLeft: '10px' }}
              onChange={(e) => addRegisterData("day", e.target.value)}
              value={registerData.day}
            >
              <option value="" style={{ backgroundColor: 'black' }}></option>
              {filteredDays.map(day => <option key={day} value={day} style={{ backgroundColor: 'black' }}>{day}</option>)}
            </Select>
            <Text fontSize="12px" color={showText.day ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Día</Text>
          </Box>
          <Box width={{ base: '100%', md: '25%' }} position="relative" >
            <Select
              color="white"
              fontSize="14px"
              borderColor="_gray"
              width="100%"
              height="55px"
              onFocus={() => setShowText({ ...showText, year: true })}
              onBlur={() => setShowText({ ...showText, year: false })}
              style={{ paddingTop: '20px', paddingLeft: '10px' }}
              onChange={(e) => addRegisterData("year", e.target.value)}
              value={registerData.year}
            >
              <option value="" style={{ backgroundColor: 'black' }}></option>
              {getYears(fullYear).reverse().map(year => <option key={year} value={year} style={{ backgroundColor: 'black' }}>{year}</option>)}
            </Select>
            <Text fontSize="12px" color={showText.year ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Año</Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default FirstStep
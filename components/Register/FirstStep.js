import {
  Text,
  Box,
  Stack,
  Input,
  Select
} from "@chakra-ui/react"
import { useState, useContext } from "react"

import RegisterContext from "../../context/RegisterContext";

const FirstStep = () => {
  const { addRegisterData, registerData } = useContext(RegisterContext);
  const [showText, setShowText] = useState({
    name: false,
    phone: false,
    month: false,
    day: false,
    year: false,
  })

  return (
    <Stack spacing={7}>
    <Text color="white" fontWeight="bold" fontSize="23px">Crea tu cuenta</Text>
      <Box position="relative" width="100%">
        <Input 
          color="_white" 
          borderColor="_gray" padding={showText.name || registerData.name !== '' ? "40px 0 20px 10px" : "28px 10px"} 
          placeholder={!showText.name ? "Nombre" : null} 
          width="100%" 
          maxWidth="550px" 
          sx={{ "::placeholder": { color: "#6e767d" }  }}
          onFocus={() => setShowText({...showText, name: true})}
          onBlur={(e) => {
            if (e.target.value === '') {
              setShowText({...showText, name: false})
            }
          }}
          onChange={(e) => addRegisterData("name", e.target.value)}
          value={registerData.name}
        />
        {showText.name || registerData.name !== '' ? <Text fontSize="12px" color="_blue" position="absolute" top="10px" left="10px">Nombre</Text> : null}
      </Box>
      <Box position="relative" width="100%">
        <Input 
          color="_white" 
          borderColor="_gray" 
          padding={showText.phone || registerData.phone !== '' ? "40px 0 20px 10px" : "28px 10px"} 
          placeholder={!showText.phone ? "Teléfono" : null} 
          width="100%" 
          maxWidth="550px" 
          sx={{ "::placeholder": { color: "#6e767d" }  }}
          onFocus={() => setShowText({...showText, phone: true})}
          onBlur={(e) => {
            if (e.target.value === '') {
              setShowText({...showText, phone: false})
            }
          }}
          onChange={(e) => addRegisterData("phone", e.target.value)}
          value={registerData.phone}
        />
          {showText.phone || registerData.phone !== '' ? <Text fontSize="12px" color="_blue" position="absolute" top="10px" left="10px">Télefono</Text> : null}
      </Box>
   <Stack spacing={3}>
   <Stack spacing={0} fontSize="15px">
      <Text color="white" fontWeight="bold">Fecha de nacimiento</Text>
      <Text color="_textInput" textAlign="justify">
      Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.
      </Text>
    </Stack>
    <Stack direction={{base: 'column', md: 'row'}} spacing={3}>
      <Box width={{base: '100%', md: '50%'}} position="relative" >
        <Select 
          color="white"
          fontSize="14px" 
          borderColor="_gray" 
          width="100%" 
          height="55px"
          onFocus={() => setShowText({...showText, month: true})}
          onBlur={() => setShowText({...showText, month: false})}
          style={{ paddingTop: '20px', paddingLeft: '10px' }}
          onChange={(e) => addRegisterData("month", e.target.value)}
          value={registerData.month}
        >
          <option value=""></option>
          <option paddingTop="20px" value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Text fontSize="12px" color={showText.month ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Mes</Text>
      </Box>
      <Box width={{base: '100%', md: '25%'}} position="relative" >
        <Select 
          color="white"
          fontSize="14px" 
          borderColor="_gray" 
          width="100%" 
          height="55px"
          onFocus={() => setShowText({...showText, day: true})}
          onBlur={() => setShowText({...showText, day: false})}
          style={{ paddingTop: '20px', paddingLeft: '10px' }}
          onChange={(e) => addRegisterData("day", e.target.value)}
          value={registerData.day}
        >
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Text fontSize="12px" color={showText.day ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Día</Text>
      </Box>
      <Box width={{base: '100%', md: '25%'}} position="relative" >
        <Select 
          color="white"
          fontSize="14px" 
          borderColor="_gray" 
          width="100%" 
          height="55px"
          onFocus={() => setShowText({...showText, year: true})}
          onBlur={() => setShowText({...showText, year: false})}
          style={{ paddingTop: '20px', paddingLeft: '10px' }}
          onChange={(e) => addRegisterData("year", e.target.value)}
          value={registerData.year}
        >
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Text fontSize="12px" color={showText.year ? '_blue' : '_textInput'} position="absolute" top="10px" left="10px">Año</Text>
      </Box>
    </Stack>
   </Stack>
  </Stack>
  )
}

export default FirstStep
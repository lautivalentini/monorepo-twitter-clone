import { Stack, Text, Checkbox } from "@chakra-ui/react"

const SecondStep = () => {
  return (
    <>
    <Stack spacing={7}>
      <Text color="_white" fontWeight="bold" fontSize="23px">Personaliza tu experiencia</Text>
      <Stack spacing={3}>
        <Text fontSize="18px" fontWeight="bold" color="_white">Registrar dónde ves contenido de Twitter en la web</Text>
        <Stack direction="row" spacing={3}>
        <Text fontSize="15px" color="_white" textAlign="justify">
              Twitter utiliza estos datos para personalizar tu 
              experiencia. Este historial de navegación web nunca se
              almacenará con tu nombre, correo electrónico ni número de teléfono.
        </Text>
        <Checkbox padding="10px" size="lg" defaultIsChecked />
        </Stack>
      </Stack>
      <Text fontSize="15px" color="_textInput">Para obtener más información sobre esta configuración, visita el <Text color="_blue" display="inline-block" cursor="pointer" _hover={{textDecoration: 'underline'}}>Centro de ayuda</Text>.</Text>
    </Stack>
    </>
  )
}

export default SecondStep
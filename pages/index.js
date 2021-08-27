import Link from 'next/link'

import { Flex, Box, Stack, Text, Button, useDisclosure } from '@chakra-ui/react'
import { IoLogoTwitter } from 'react-icons/io'

import Register from '../components/Register'

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
    <Flex flexDirection={{base: 'column', lg: 'row'}}>
      <Box width={{base: '100%', lg: '55%'}} height={{base: '40vh', lg: '100vh'}} backgroundImage="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"></Box>
      <Box width={{base: '100%', lg: '45%'}} height={{base: '60vh', lg: '100vh'}}>
        <Stack alignItems={{base: 'normal', md: 'center', lg: 'normal'}} padding={{base: '30px', lg: '60px'}} height="100%" spacing={7} justifyContent="center">
          <Stack spacing={7}>
          <Box width="45px" height="45px" fontSize="45px" color="_white">
            <IoLogoTwitter />
          </Box>
          <Text lineHeight="1.3" maxW="500px" fontWeight="bold" fontSize={{base: '40px', lg: '60px'}} color="_white" >Lo que está pasando ahora</Text>
          <Text fontWeight="bold" fontSize={{base: '20px', lg: '30px'}} color="_white" >Únete a Twitter hoy mismo.</Text>
          </Stack>
          <Stack spacing={4} direction={{base: 'column', md: 'row', lg: 'column'}}>
            <Button 
              color="_white" 
              minW="250px"
              maxWidth="380px" 
              fontSize="15px" 
              bg="_blue" 
              borderRadius={9999} 
              paddingY={6}
              _hover={{ bg: 'rgb(26, 145, 218)' }}
              onClick={onOpen}
            >
              Regístrate
            </Button>
            <Link href="/login">
              <Button 
                color="_blue" 
                minW="250px"
                maxWidth="380px" 
                variant="outline" 
                borderColor="_blue" 
                fontSize="15px" 
                borderRadius={9999} 
                paddingY={6}
                _hover={{ bg: 'rgb(26, 145, 218)' }}
              >
                Iniciar sesión
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Flex>
    <Register isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default HomePage
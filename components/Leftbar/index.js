import { Box, Stack, Text, Link as ChakraLink, Icon, Button } from '@chakra-ui/react'
import { BiHomeCircle, BiBookmark, BiDotsHorizontalRounded } from 'react-icons/bi'
import { IoLogoTwitter } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'
import { RiFileList2Line } from 'react-icons/ri'
import { BsBell, BsPerson, BsHash } from 'react-icons/bs'
import Link from 'next/link'

const icons = [
  {
    title: "Inicio",
    icon: BiHomeCircle,
    route: "/home",
  },
  {
    title: "Explorar",
    icon: BsHash,
    route: "/explore",
  },
  {
    title: "Notificaciones",
    icon: BsBell,
    route: "/notifications",
  },
  {
    title: "Mensajes",
    icon: HiOutlineMail,
    route: "/messages",
  },
  {
    title: "Guardados",
    icon: BiBookmark,
    route: "/bookmark",
  },
  {
    title: "Listas",
    icon: RiFileList2Line,
    route: "/lists",
  },
  {
    title: "Pefil",
    icon: BsPerson,
    route: "/profile",
  },
  {
    title: "Más opciones",
    icon: BiDotsHorizontalRounded,
    route: "/options",
  },
]

const Leftbar = () => {
  return (
    <Box width="20%" paddingY={3}>
      <Stack spacing={7}>
        <ChakraLink as={Link} href="/home">
          <Icon cursor="pointer" color="_white" width={8} height={8} as={IoLogoTwitter} />
        </ChakraLink>
        {icons.map(icon => (
          <ChakraLink key={icon.title} as={Link} href={icon.route}>
            <Stack
              color="_white"
              fontWeight="bold"
              fontSize="18px"
              direction="row"
              alignItems="center"
              spacing={4}
              _hover={{ color: "#1DA1F2" }}
              cursor="pointer"
            >
              <Icon width={7} height={7} as={icon.icon} />
              <Text>{icon.title}</Text>
            </Stack>
          </ChakraLink>
        ))}
        <Button
          color="_white"
          bg="_blue"
          paddingY="22px"
          borderRadius={9999}
          fontSize="12px"
          width="90%"
          fontWeight="bold"
          margin="auto"
          _hover={{bg: 'rgb(26, 145, 218)'}}
        >
          Tweet
        </Button>
      </Stack>
    </Box>
  )
}

export default Leftbar
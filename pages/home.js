import { useContext } from 'react'
import { Text, Flex } from '@chakra-ui/react'

import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import MenuCenter from '../components/MenuCenter'

import AuthContext from '../context/AuthContext'

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <Flex justifyContent="center" width="100%" maxW="1200px" margin="auto">
      <Leftbar></Leftbar>
      <MenuCenter></MenuCenter>
      <Rightbar></Rightbar>
    </Flex>
  )
}

export default Home
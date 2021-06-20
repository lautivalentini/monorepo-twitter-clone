import { useContext } from 'react'
import { Text } from '@chakra-ui/react'

import AuthContext from '../context/AuthContext'

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Text color="_white" fontWeight="bold" fontSize="18px">{user.name}</Text>
      <Text color="_white" fontWeight="bold" fontSize="18px">@{user.username}</Text>
      <Text color="_white" fontWeight="bold" fontSize="18px">{user.date}</Text>
      <Text color="_white" fontWeight="bold" fontSize="18px">{user.phone}</Text>
    </>
  )
}

export default Home
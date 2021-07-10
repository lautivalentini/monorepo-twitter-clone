import { Box, Button, Stack, Text, Image } from '@chakra-ui/react'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from "../../context/AuthContext";

const Rightbar = () => {
  const { user } = useContext(AuthContext);
  const [usersToFollow, setUsersToFollow] = useState([])  

  async function getUsers() {
    try {
      if (user.username !== '') {
        const { data: { users } } = await axios.get(`api/user/get?username=${user.username}`)
        if (users.length > 2) {
          users
            .sort(() => Math.random() - 0.5 )
            .splice(0, 3)
          setUsersToFollow(users)
        } else {
          setUsersToFollow(users)
        }
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [user.username])
  
  return (
    <Box width="35%" paddingY={3}>
      <Box width="90%" margin="auto" borderRadius={20} bg="_background" overflow="hidden">
        <Text 
          fontWeight="bold" 
          fontSize="18px" 
          color="_white" 
          paddingLeft={4} 
          paddingY={3}
          borderBottomWidth="1px"
          borderBottomColor="_gray"
        >
          A quién seguir
        </Text>
      <Stack spacing={0}>
        {usersToFollow.map(user => (
          <Stack 
            direction="row" 
            alignItems="center" 
            justifyContent="space-between" 
            paddingY={4}
            paddingX={4}
            borderBottomColor="_borderColor"
            borderBottomWidth="1px"
          >
          <Stack direction="row" alignItems="center">
            <Image src="https://pbs.twimg.com/profile_images/1408592011628793863/VEj92Xaj_400x400.jpg" borderRadius={9999} width={12} height={12} />
            <Stack fontSize="15px" spacing={0}>
              <Text fontWeight="bold" color="_white">{user.name}</Text>
              <Text color="_textInput">@{user.username}</Text>
            </Stack>
          </Stack>
          <Button 
            size="sm" 
            borderRadius={9999} 
            bg="transparent"
            borderWidth="1px" 
            borderColor="_blue" 
            color="_blue" 
            fontSize="15px" 
            _hover={{bg: 'rgba(29, 161, 242, 0.1)'}}
          >
            Seguir
          </Button>
        </Stack>
        ))}
      </Stack>
      <Text fontSize="15px" color="_blue" paddingLeft={4} paddingY={4} cursor="pointer" _hover={{bg: 'rgba(255, 255, 255, 0.03)'}}>Mostrar más</Text>
      </Box>
    </Box>
  )
}

export default Rightbar
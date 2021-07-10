import { useState, useContext } from 'react'
import AuthContext from "../../context/AuthContext";

import axios from 'axios'

import { Box, Stack, Text, Image, Textarea, Button } from '@chakra-ui/react'

import { RiMagicLine } from "react-icons/ri";
import { BiWorld } from 'react-icons/bi'

const TweetBox = () => {
  const { user, addUserdata } = useContext(AuthContext);
  const [tweet, setTweet] = useState('')

  async function onSendTweet() {
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/share/tweet?username=${user.username}`, { tweet })
      addUserdata(data.user)
      setTweet('')
    } catch (err) {
      console.log(err)
    } 
  }
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" p={3}>
        <Text fontSize="20px" fontWeight="bold" color="_white">Inicio</Text>
        <Box fontSize="22px" color="_blue"><RiMagicLine /></Box>
      </Stack>
    <Box borderTopWidth="1px" borderColor="_borderColor" borderBottomWidth="1px" paddingBottom="50px">
      <Stack position="relative" direction="row" alignItems="start" p={3}>
      <Image mr={3} src="https://pbs.twimg.com/profile_images/1408592011628793863/VEj92Xaj_400x400.jpg" borderRadius={9999} width={12} height={12} />
        <Textarea 
          placeholder="¿Qué está pasando?"
          borderTop="none"
          borderLeft="none"
          borderRight="none" 
          borderBottomWidth="1px"
          borderBottomColor="_borderColor"
          fontSize="18px"
          color="_white"
          paddingX={0}
          sx={{ "::placeholder": { color: "#6e767d" } }}
          borderRadius={0}
          _focus={{outline: 'none'}}
          _hover={{borderColor: '#2c2f31'}}
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
        <Stack 
          fontSize="14px" 
          color="_blue" 
          direction="row" 
          alignItems="center" 
          position="absolute" 
          bottom="30px" 
          left="80px"
        >
          <BiWorld />
          <Text fontWeight="bold">Todos pueden responder</Text>
        </Stack>
      </Stack>
      <Button
        color="_white"
        bg="_blue"
        borderRadius={9999}
        fontSize="12px"
        fontWeight="bold"
        float="right"
        mr={3}
        _hover={{bg: 'rgb(26, 145, 218)'}}
        onClick={onSendTweet}
      >
        Twittear
      </Button>
    </Box>
  </>
  )
}

export default TweetBox
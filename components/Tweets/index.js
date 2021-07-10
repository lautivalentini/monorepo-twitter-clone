import { useState, useContext } from 'react'
import AuthContext from "../../context/AuthContext";

import { Stack, Box, Text, Image } from "@chakra-ui/react"

const Tweets = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
    {(user.tweets || []).reverse().map(item => (
      <Stack key={item.id} direction="row" alignItems="flex-start" p={4} borderBottomColor="_gray" borderBottomWidth="1px">
        <Image 
          src="https://pbs.twimg.com/profile_images/1408592011628793863/VEj92Xaj_400x400.jpg" 
          borderRadius={9999}
          width={12}
          heigth={12}
        />
        <Stack spacing={0}>
          <Stack direction="row" alignItems="flex-start">
            <Text fontSize="15px" fontWeight="bold" color="_white">{user.name}</Text>
            <Text fontSize="15px" color="_textInput">@{user.username}</Text>
          </Stack>
          <Text fontSize="15px" color="_white">{item.tweet}</Text>
        </Stack>
      </Stack>
    ))}
    </>
    
  )
}

export default Tweets
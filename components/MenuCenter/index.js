import { Box } from '@chakra-ui/react'

import { useContext } from 'react'
import AuthContext from "../../context/AuthContext";

import Tweets from '../Tweets';
import TweetBox from './TweetBox';

const MenuCenter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Box 
      border="1px solid" 
      borderColor="_borderColor" 
      borderTop="none"
      borderBottomWidth="1px"
      borderBottom={(user.tweets || []).length > 0 && "none"} 
      width="45%"
      height="100%"
    >
      <TweetBox />
      <Tweets />
    </Box>
  )
}

export default MenuCenter
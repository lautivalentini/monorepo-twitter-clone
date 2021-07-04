import { Box } from '@chakra-ui/react'

import Tweets from '../Tweets';
import TweetBox from './TweetBox';

const MenuCenter = () => {
  return (
    <Box border="1px solid" borderColor="_borderColor" borderTop="none" borderBottom="none" width="50%">
      <TweetBox />
      <Tweets />
    </Box>
  )
}

export default MenuCenter
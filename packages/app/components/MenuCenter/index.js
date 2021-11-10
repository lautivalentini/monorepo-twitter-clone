import { Box } from "@chakra-ui/react";
import { useContext } from "react";

import AuthContext from "../../context/AuthContext";
import Tweets from "../Tweets";

import TweetBox from "./TweetBox";

const MenuCenter = () => {
    const { user } = useContext(AuthContext);

    return (
        <Box
            border="1px solid"
            borderBottom={(user.tweets || []).length > 0 && "none"}
            borderBottomWidth="1px"
            borderColor="_borderColor"
            borderTop="none"
            height="100%"
            width="45%"
        >
            <TweetBox />
            <Tweets />
        </Box>
    );
};

export default MenuCenter;

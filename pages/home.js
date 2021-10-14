import { Flex } from "@chakra-ui/react";

import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";
import MenuCenter from "../components/MenuCenter";

const Home = () => {
    return (
        <Flex justifyContent="center" margin="auto" maxW="1200px" width="100%">
            <Leftbar />
            <MenuCenter />
            <Rightbar />
        </Flex>
    );
};

export default Home;

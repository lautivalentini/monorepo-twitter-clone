import { useState, useContext } from "react";
import axios from "axios";
import { Box, Stack, Text, Image, Textarea, Button } from "@chakra-ui/react";
import { RiMagicLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";

import AuthContext from "../../context/AuthContext";

const TweetBox = () => {
    const { user, addUserdata } = useContext(AuthContext);
    const [tweet, setTweet] = useState("");

    async function onSendTweet() {
        try {
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/user/share/tweet?username=${user.username}`,
                { tweet },
            );

            addUserdata(data.user);
            setTweet("");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Stack alignItems="center" direction="row" justifyContent="space-between" p={3}>
                <Text color="_white" fontSize="20px" fontWeight="bold">
                    Inicio
                </Text>
                <Box color="_blue" fontSize="22px">
                    <RiMagicLine />
                </Box>
            </Stack>
            <Box
                borderBottomWidth="1px"
                borderColor="_borderColor"
                borderTopWidth="1px"
                paddingBottom="50px"
            >
                <Stack alignItems="start" direction="row" p={3} position="relative">
                    <Image
                        alt="profile-image"
                        borderRadius={9999}
                        height={12}
                        mr={3}
                        src="https://pbs.twimg.com/profile_images/1408592011628793863/VEj92Xaj_400x400.jpg"
                        width={12}
                    />
                    <Textarea
                        _focus={{ outline: "none" }}
                        _hover={{ borderColor: "#2c2f31" }}
                        borderBottomColor="_borderColor"
                        borderBottomWidth="1px"
                        borderLeft="none"
                        borderRadius={0}
                        borderRight="none"
                        borderTop="none"
                        color="_white"
                        fontSize="18px"
                        paddingX={0}
                        placeholder="¿Qué está pasando?"
                        sx={{ "::placeholder": { color: "#6e767d" } }}
                        value={tweet}
                        onChange={(e) => setTweet(e.target.value)}
                    />
                    <Stack
                        alignItems="center"
                        bottom="30px"
                        color="_blue"
                        direction="row"
                        fontSize="14px"
                        left="80px"
                        position="absolute"
                    >
                        <BiWorld />
                        <Text fontWeight="bold">Todos pueden responder</Text>
                    </Stack>
                </Stack>
                <Button
                    _hover={{ bg: "rgb(26, 145, 218)" }}
                    bg="_blue"
                    borderRadius={9999}
                    color="_white"
                    float="right"
                    fontSize="12px"
                    fontWeight="bold"
                    mr={3}
                    onClick={onSendTweet}
                >
                    Twittear
                </Button>
            </Box>
        </>
    );
};

export default TweetBox;

import { Box, Button, Stack, Text, Image } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import AuthContext from "../../context/AuthContext";

const Rightbar = () => {
    const { user } = useContext(AuthContext);
    const [usersToFollow, setUsersToFollow] = useState([]);

    async function getUsers() {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        try {
            if (user.username !== "") {
                const {
                    data: { users },
                } = await axios.get(`${API_URL}/api/user/get?username=${user.username}`);

                if (users.length > 2) {
                    users.sort(() => Math.random() - 0.5).splice(0, 3);
                    setUsersToFollow(users);
                } else {
                    setUsersToFollow(users);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers();
    }, [user.username]);

    return (
        <Box paddingY={3} width="35%">
            <Box bg="_background" borderRadius={20} margin="auto" overflow="hidden" width="90%">
                <Text
                    borderBottomColor="_gray"
                    borderBottomWidth="1px"
                    color="_white"
                    fontSize="18px"
                    fontWeight="bold"
                    paddingLeft={4}
                    paddingY={3}
                >
                    A quién seguir
                </Text>
                <Stack spacing={0}>
                    {usersToFollow.map((user, index) => (
                        <Stack
                            key={index}
                            alignItems="center"
                            borderBottomColor="_borderColor"
                            borderBottomWidth="1px"
                            direction="row"
                            justifyContent="space-between"
                            paddingX={4}
                            paddingY={4}
                        >
                            <Stack alignItems="center" direction="row">
                                <Image
                                    borderRadius={9999}
                                    height={12}
                                    src="https://pbs.twimg.com/profile_images/1408592011628793863/VEj92Xaj_400x400.jpg"
                                    width={12}
                                />
                                <Stack fontSize="15px" spacing={0}>
                                    <Text color="_white" fontWeight="bold">
                                        {user.name}
                                    </Text>
                                    <Text color="_textInput">@{user.username}</Text>
                                </Stack>
                            </Stack>
                            <Button
                                _hover={{ bg: "rgba(29, 161, 242, 0.1)" }}
                                bg="transparent"
                                borderColor="_blue"
                                borderRadius={9999}
                                borderWidth="1px"
                                color="_blue"
                                fontSize="15px"
                                size="sm"
                            >
                                Seguir
                            </Button>
                        </Stack>
                    ))}
                </Stack>
                <Text
                    _hover={{ bg: "rgba(255, 255, 255, 0.03)" }}
                    color="_blue"
                    cursor="pointer"
                    fontSize="15px"
                    paddingLeft={4}
                    paddingY={4}
                >
                    Mostrar más
                </Text>
            </Box>
        </Box>
    );
};

export default Rightbar;

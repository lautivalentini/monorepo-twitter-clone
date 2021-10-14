import { useContext } from "react";
import { Stack, Text, Image } from "@chakra-ui/react";

import AuthContext from "../../context/AuthContext";

const Tweets = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {(user.tweets || []).reverse().map((item) => (
                <Stack
                    key={item.id}
                    alignItems="flex-start"
                    borderBottomColor="_gray"
                    borderBottomWidth="1px"
                    direction="row"
                    p={4}
                >
                    <Image
                        alt="profile-image"
                        borderRadius={9999}
                        heigth={12}
                        src="https://pbs.twimg.com/profile_images/1408592011628793863/VEj92Xaj_400x400.jpg"
                        width={12}
                    />
                    <Stack spacing={0}>
                        <Stack alignItems="flex-start" direction="row">
                            <Text color="_white" fontSize="15px" fontWeight="bold">
                                {user.name}
                            </Text>
                            <Text color="_textInput" fontSize="15px">
                                @{user.username}
                            </Text>
                        </Stack>
                        <Text color="_white" fontSize="15px">
                            {item.tweet}
                        </Text>
                    </Stack>
                </Stack>
            ))}
        </>
    );
};

export default Tweets;

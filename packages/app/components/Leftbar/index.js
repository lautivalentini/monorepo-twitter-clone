import { Box, Stack, Text, Link as ChakraLink, Icon, Button } from "@chakra-ui/react";
import { BiHomeCircle, BiBookmark, BiDotsHorizontalRounded } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { RiFileList2Line } from "react-icons/ri";
import { BsBell, BsPerson, BsHash } from "react-icons/bs";
import Link from "next/link";

const icons = [
    {
        title: "Inicio",
        icon: BiHomeCircle,
        route: "/home",
    },
    {
        title: "Explorar",
        icon: BsHash,
        route: "/explore",
    },
    {
        title: "Notificaciones",
        icon: BsBell,
        route: "/notifications",
    },
    {
        title: "Mensajes",
        icon: HiOutlineMail,
        route: "/messages",
    },
    {
        title: "Guardados",
        icon: BiBookmark,
        route: "/bookmark",
    },
    {
        title: "Listas",
        icon: RiFileList2Line,
        route: "/lists",
    },
    {
        title: "Pefil",
        icon: BsPerson,
        route: "/profile",
    },
    {
        title: "Más opciones",
        icon: BiDotsHorizontalRounded,
        route: "/options",
    },
];

const Leftbar = () => {
    return (
        <Box paddingY={3} width="20%">
            <Stack spacing={7}>
                <ChakraLink as={Link} href="/home">
                    <Icon as={IoLogoTwitter} color="_white" cursor="pointer" height={8} width={8} />
                </ChakraLink>
                {icons.map((icon) => (
                    <ChakraLink key={icon.title} as={Link} href={icon.route}>
                        <Stack
                            _hover={{ color: "#1DA1F2" }}
                            alignItems="center"
                            color="_white"
                            cursor="pointer"
                            direction="row"
                            fontSize="18px"
                            fontWeight="bold"
                            spacing={4}
                        >
                            <Icon as={icon.icon} height={7} width={7} />
                            <Text>{icon.title}</Text>
                        </Stack>
                    </ChakraLink>
                ))}
                <Button
                    _hover={{ bg: "rgb(26, 145, 218)" }}
                    bg="_blue"
                    borderRadius={9999}
                    color="_white"
                    fontSize="12px"
                    fontWeight="bold"
                    margin="auto"
                    paddingY="22px"
                    width="90%"
                >
                    Tweet
                </Button>
            </Stack>
        </Box>
    );
};

export default Leftbar;

import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import AuthState from "../context/AuthState";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Twitter</title>
            </Head>
            <ChakraProvider theme={theme}>
                <AuthState>
                    <Component {...pageProps} />
                </AuthState>
            </ChakraProvider>
        </>
    );
};

export default MyApp;

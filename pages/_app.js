import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme";

import RegisterState from "../context/RegisterState";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Twitter</title>
      </Head>
      <ChakraProvider theme={theme}>
        <RegisterState>
          < Component {...pageProps} />
        </RegisterState>
      </ChakraProvider>
    </>
  )
}

export default MyApp
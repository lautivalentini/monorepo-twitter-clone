import Head from "next/head";

import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Twitter</title>
      </Head>
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
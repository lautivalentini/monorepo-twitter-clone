import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'verdana',
        bg: "#000000"
      },
    }),
  },
  colors: {
    _white: "#D9D9D9",
    _blue: "#1DA1F2",
    _black: "#000000",
    _gray: "#2f3336",
    _textInput: "#6e767d",
    _overlay: "#242d34"
  },
})

export default theme
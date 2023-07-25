"use client"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import Nav from "@/components/NavBar"
import SmallWithSocial from "@/components/Footer"

const theme = extendTheme({
  colors:{
    brand:{
      label: "#151515",
      100: "#5e17eb",
      200: "#1bd527",
      300: "#8956F0",
      400: "#5CEB65"
    }
  }
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Lingua Franca Asesorias</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Lingua Franca - Idiomas y Desarrollo" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <body>
        <ChakraProvider theme={theme}>
          <div>
            <Nav />
            {children}
            <SmallWithSocial />
          </div>
        </ChakraProvider>
      </body>
    </html>
  )
}

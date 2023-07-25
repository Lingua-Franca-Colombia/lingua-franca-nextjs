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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

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

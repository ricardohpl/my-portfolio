import React from 'react'
import { Box, Text, Link } from "@chakra-ui/react"

const Footer = () => {

    return (
        <Box
            background='menuBackground'
            backdropFilter='blur(25px)'
            borderRadius='8px'
            boxShadow='-0.7em 0.5em 1em rgba(27, 27, 27, 0.6)'
            paddingX={[4, 6]}
            paddingY={2}
            margin={4}
            minW={['300px', '300px', '400px', '500px']}
            maxW={['400px', '600px', 'none']}
            textAlign={['center', 'center', 'right']}
            marginX={[1, 1, 'auto']}
            fontSize={['xs', 'sm']}
            color='gray'
        >
            <Text fontSize={'inherit'} color={'inherit'}>
                Icones em <Link href="https://devicon.dev/" target="blank" fontWeight={700}>Devicons
                </Link> e <Link href="https://ionic.io/ionicons" target="blank" fontWeight={700}> Ionicons</Link>.
                Foto de background por Hasan Albari no site <Link href="https://www.pexels.com/" target="blank" fontWeight={700}>pexels</Link>.
            </Text>
            <Text fontSize={'inherit'} color={'inherit'}>Ricardo Pereira 2022 &copy; - Todos direitos reservados.</Text>
        </Box>
    )
}


export default Footer
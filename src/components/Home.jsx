import React from 'react'

import { Heading, Box, Flex } from "@chakra-ui/react"

import NavButton from './NavButtons/NavButton'
import ButtonHighlights from './NavButtons/ButtonHighlights'
import ContainerButtons from './NavButtons/ContainerButtons'

const Home = () => {
  return (
    <Flex
      justifyContent={'space-between'}
      flexDir={'column'}
      maxW={'80vw'} h='100%'
    >
      <Box
        padding={[6, 8]} 
        w={['100%', '90%', '100%', '100%']}
      >
        <Heading fontSize={['2xl', '3xl']} padding={[2, 1]}>Olá, seja bem-vindo!</Heading>
        <Heading fontSize={['2xl', '3xl']} padding={[2, 1]}>Sou Ricardo Pereira, <Box display={'inline'} color='highlights'>desenvolvedor web.</Box></Heading>
      </Box>
      <ContainerButtons>
        <NavButton to='/about' name='Saiba mais' />
        <ButtonHighlights to='/projects' name='Portfólio' />
      </ContainerButtons>
    </Flex>
  )
}

export default Home
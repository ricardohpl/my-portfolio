import React from 'react'

import { Flex, Text, Box } from "@chakra-ui/react"

import NavButton from './NavButtons/NavButton'
import ButtonHighlights from './NavButtons/ButtonHighlights'
import ContainerButtons from './NavButtons/ContainerButtons'
import TitleSections from './TitleSections'

const About = () => {
  return (
    <Flex flexDir={'column'} w='95%'>
      <TitleSections>Ricardo Pereira</TitleSections>
      <Box paddingX={['25px', '25px', '45px']} w={['100%']}>
        <Text marginY={4}>Formado na Fatec-SP, tenho mais de 12 anos de experiência na area de TI trabalhando com diferentes
          papéis. Atualmente estou trabalhando como
          Desenvolvedor Web mas já atuei como Administrador de Dados, Líder de Equipe,
          Product Owner e Analista de Negócios\Requisitos.
        </Text >
        <Text marginY={4}>Decidi focar como desenvolvedor pois adoro resolver problemas e codificar a solução, apesar de gostar também de realizar o levantamento de
          requisitos e definições das regras de negócio com clientes.
        </Text>
        <Text marginY={4}>Atuo principalmente no front-end, sigo estudando muito tanto front-end como back-end
          pois tenho o desejo de trabalhar como desenvolvedor full-stack futuramente.
        </Text>
      </Box>
      <ContainerButtons >
        <NavButton to='/skills' name='Minhas Skills' />
        <ButtonHighlights to='/projects' name='Portfólio' />
      </ContainerButtons>

    </Flex>
  )
}

export default About
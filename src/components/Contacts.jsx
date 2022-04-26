import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ButtonHighlights from './NavButtons/ButtonHighlights'
import ContainerButtons from './NavButtons/ContainerButtons'
import NavButton from './NavButtons/NavButton'
import Social from './Social'
import TitleSections from './TitleSections'

const Contacts = () => {
    return (
        <Box w='95%' >
            <TitleSections>Meus Contatos</TitleSections>
            <Flex flexDir={'column'} >
                <Flex 
                    flexDir={['column', 'column', 'row']}  
                    paddingX={['20px']} marginY='30px'
                >
                    <Text paddingBottom={4} paddingRight={[1, 3, 8]}>
                        Email:
                    </Text>
                    <Text> ricardopereira.hpl@gmail.com</Text>
                </Flex>

                <Social 
                    flexDir={['column', 'row', 'row']} flexDirSocial={['row']} 
                    textW={['99%', '85px', '115px']} 
                    marginX='0'
                    clickMenu={() => { return '' }} 
                />
            </Flex>
            <ContainerButtons>
                <NavButton to='/' name='Inicio' />
                <ButtonHighlights to='/projects' name='Portfólio' />
            </ContainerButtons>

        </Box>
    )
}

export default Contacts
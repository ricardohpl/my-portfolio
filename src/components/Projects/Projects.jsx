import React from 'react'

import { Box, Text, Flex, Link } from "@chakra-ui/react"

import NavButton from '../NavButtons/NavButton'
import ButtonHighlights from '../NavButtons/ButtonHighlights'
import ContainerButtons from '../NavButtons/ContainerButtons'
import ProjectsContainer from './ProjectsContainer'
import TitleSections from '../TitleSections'

const Projects = () => {
    return (
        <Flex flexDir='column'>
            <TitleSections>Portfólio</TitleSections>
            <Box
                paddingX='35px'
            >
                <Text>- Alguns projetos que atuei como desenvolvedor</Text>

                <ProjectsContainer
                    nameProject='Site Top Dog Apbt Show'
                    href='https://topdogapbtshow.netlify.app/'
                    srcImage={process.env.PUBLIC_URL + `/assets/img/home top dog.jpg`}
                >
                    <Text marginY={3}>- Site de divulgação do evento de exposição e esportes para cães com formulário de inscrição. </Text>
                    <Text>Desenvolvi todo o frontend com responsividade utilizando Next.js, Chakra UI e Framer Motion.</Text>
                    <Text>Também desenvolvi o backend aproveitando a estrutura de serviços que o Next.js disponibiliza e Node.js.</Text>
                </ProjectsContainer>

                <ProjectsContainer
                    nameProject='Site RL Cabelos'
                    href='https://www.rlcabelos.com.br/'
                    srcImage={process.env.PUBLIC_URL + `/assets/img/home rl cabelos.jpg`}
                >
                    <Text marginY={3}>- Homepage para salão de beleza divulgar serviços e captalizar novos clientes. </Text>
                    <Text>Desenvolvi todo o frontend com responsividade utilizando React.js, React Spring para animações e "Vanilla" CSS para estilos.</Text>
                </ProjectsContainer>


                <ProjectsContainer
                    nameProject='Este Portfólio'
                    href='https://ricardohpl.github.io/'
                    srcImage={process.env.PUBLIC_URL + `/assets/img/home portfolio ricardo.jpg`}
                >
                    <Text marginY={3}>- Meu portfólio para divulgar meus trabalhos realizados e ajudar na busca de novos desafios. </Text>
                    <Text>Desenvolvi todo o frontend com responsividade utilizando React.js, Chakra UI e Framer Motion.</Text>
                    <Link 
                        href='https://github.com/ricardohpl/my-portfolio' target='blank'
                        _hover={{outline: 'none'}}
                        _focus={{outline: 'none'}}
                        maxWidth={['130px', '150px', '180px']}
                        marginX={5}
                    >
                        <Box
                            color='lightgray'
                            marginY={5}
                            padding={[1, 1, 2]}
                            borderRadius='5px'
                            textAlign='center'
                            border=  '1px solid lightgray'
                            bg={'bgButtonMBG'}
                            fontSize={['12px', '14px', '16px']}

                            transition='all 0.6s'

                            _hover={{ color: 'highlights', bg: 'transparent', border: 'borderHighlights'}}

                            _active={{
                                opacity: '0.6',
                                boxShadow: 'inset 1px 1px 4px 0px rgba(0, 0, 0, 0.8)',
                                transform: 'scale(0.95)',
                            }}

                        >Ver Código Fonte</Box>
                    </Link>

                </ProjectsContainer>

            </Box>
            <ContainerButtons>
                <NavButton to='/skills' name='Minhas Skills' />
                <ButtonHighlights to='/contacts' name='Contatos' />
            </ContainerButtons>
        </Flex>
    )

}

export default Projects
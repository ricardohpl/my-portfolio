import React from 'react'

import { Flex, Box, } from "@chakra-ui/react"

import icons from '../icons.js'

import SkillsContainer from './SkillsContainer'
import SkillIcon from './SkillIcon.jsx'

import NavButton from '../NavButtons/NavButton.jsx'
import ButtonHighlights from '../NavButtons/ButtonHighlights.jsx'
import ContainerButtons from '../NavButtons/ContainerButtons.jsx'
import TitleSections from '../TitleSections.jsx'


const Skills = () => {


    return (
        <Box fontSize={'4xl'} w='100%'>
            <TitleSections>Minhas skills</TitleSections>
            <Flex flexWrap={'wrap'}>
                <SkillsContainer name='Front-end'>
                    <SkillIcon src={icons.javaScript} name='JavaScript'/>
                    <SkillIcon src={icons.html5} name='HTML5' />
                    <SkillIcon src={icons.css} name='CSS3' />
                </SkillsContainer>
                <SkillsContainer name='Back-end'>
                    <SkillIcon src={icons.nodeJs} name='Node JS' />
                </SkillsContainer>
                <SkillsContainer name='Frameworks'>
                    <SkillIcon src={icons.reactJs} name='React JS' />
                    <SkillIcon src={icons.nextJs} name='Next JS' bg='white'/>
                    <SkillIcon src={icons.tailwind} name='Tailwind CSS' />
                    <SkillIcon src={icons.express} name='Express' bg='white'/>
                </SkillsContainer>
                <SkillsContainer name='Databases'>
                    <SkillIcon src={icons.firebase} name='Firebase' />
                    <SkillIcon src={icons.mysql} name='My SQL' />
                    <SkillIcon src={icons.sqlServer} name='SQL Server' bg='white'/>
                </SkillsContainer>
                <SkillsContainer name='Ferramentas'>
                    <SkillIcon src={icons.git} name='Git' />
                    <SkillIcon src={icons.gitHub} name='Git Hub' bg='white'/>
                    <SkillIcon src={icons.vsCode} name='VS Code' />
                    <SkillIcon src={icons.webpack} name='Webpack' />
                    <SkillIcon src={icons.trello} name='Trello' />
                </SkillsContainer>
            </Flex>
            <ContainerButtons>
                <NavButton to='/contacts' name='Contatos' />
                <ButtonHighlights to='/projects' name='Portfólio' />
            </ContainerButtons>
        </Box>
    )
}

export default Skills
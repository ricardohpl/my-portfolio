import React from 'react'

import { Flex, } from "@chakra-ui/react"
import NavItem from './NavItem'
import Social from '../Social'

const NavBar = (props) => {
    return (
        <Flex
            flexDir='column'
            justifyContent='space-between'
            alignItems={'center'}
            h={props.h} w={props.w} 
            display={props.display}
            position={props.position}
            top={props.top}
            left={props.left}
            background={props.background}
            zIndex={props.zIndex}
            minH={['350px']}
        >
            <Flex
                h={props.menuH} w={'100%'}
                flexDir={'column'}
                justifyContent='space-around'
                alignItems={'center'}
                borderTop={props.border}
                borderBottom={props.border}
                flexWrap={'wrap'}
                minH={['200px', '200px', '350px']}
            >
                <NavItem to='/about' name='Sobre' color='white' bg='transparent' border='none' mouseHover={{ bg: 'bgButtonHighlights' }} clickMenu={props.clickMenu} />
                <NavItem to='/skills' name='Skills' color='white' bg='transparent' border='none' mouseHover={{ bg: 'bgButtonHighlights' }} clickMenu={props.clickMenu} />
                <NavItem to='/projects' name='Portfólio' color='white' bg='transparent' border='none' mouseHover={{ bg: 'bgButtonHighlights' }} clickMenu={props.clickMenu} />
                <NavItem to='/contacts' name='Contatos' color='white' bg='transparent' border='none' mouseHover={{ bg: 'bgButtonHighlights' }} clickMenu={props.clickMenu} />
            </Flex>
            <Social 
                flexDir={['column']} flexDirSocial={['row', 'row', 'column']} 
                marginX='auto'
                clickMenu={props.clickMenu}  
            />
        </Flex>

    )
}

export default NavBar
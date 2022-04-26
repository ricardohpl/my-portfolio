import React from 'react'

import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5"

import { Flex, Text, Icon, Link } from "@chakra-ui/react"

const Social = (props) => {
    return (
        <Flex
            flexDir={props.flexDir}
            alignItems={'center'}
            color='highlights'
            fontSize='4xl'
            flexWrap={'wrap'}
            maxW='650px'
            marginX={props.marginX}
        >
            <Text
                p={['20px']} 
                borderBottom={['none', 'none', props.border]}
                marginBottom='10px'
                w={props.textW}
                textAlign={'left'}
            >
                Social:
            </Text>
            <Flex
                flexDir={props.flexDirSocial}
            >

                <Link href='https://www.linkedin.com/in/ricardo-pereira-71b59624' target='blank' _focus={{outline: 'none'}} >
                    <Icon as={IoLogoLinkedin} marginY={2} marginX={5} onClick={() => props.clickMenu()} _hover={{ opacity: '0.8' }}  ></Icon>
                </Link>
                <Link href='https://www.instagram.com/ricardohpl/' target='blank' _focus={{outline: 'none'}} >
                    <Icon as={IoLogoInstagram} marginY={2} marginX={5} onClick={() => props.clickMenu()} _hover={{ opacity: '0.8' }}></Icon>
                </Link>
                <Link href='https://twitter.com/oPereiraaa' target='blank' _focus={{outline: 'none'}}>
                    <Icon as={IoLogoTwitter} marginY={2} marginX={5} onClick={() => props.clickMenu()} _hover={{ opacity: '0.8' }}></Icon>
                </Link>
            </Flex>
        </Flex>
    )
}

export default Social
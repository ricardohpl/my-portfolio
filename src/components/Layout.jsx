import React, { useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";

import { motion } from 'framer-motion';

import Footer from './Footer'
import Header from './Header'

import { Grid, GridItem, Flex, Icon, } from "@chakra-ui/react"
import NavBar from './NavMenu/NavBar'
import NavItem from './NavMenu/NavItem';

const Layout = (props) => {

    const [[displayMenuButton, displaySideBar], toggleSideBar] = useState([true, '100vw'])

    return (
        <Grid
            templateColumns={['1fr', '1fr', 'repeat(6, 1fr)']} gap={6}
            templateRows={'1fr'}
            minH='720px'
            w='100vw'
            backgroundImage={process.env.PUBLIC_URL + `/assets/img/pexels-hasan-albari-1229861.jpg`}
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'

            overflowX='hidden'

            overflowY='auto'
        >
            <GridItem
                h={['100px', '100px', '100vh']}
                background='menuBackground'
                borderRight='2px solid #111821'
                w={['100vw', '100vw', '100%']}
                position={'relative'}
                minH={['100px', '100px', '720px']}
            >
                <Flex
                    flexDir={['row', 'row', 'column']}
                    h='100%'
                    justifyContent={'space-around'} alignItems='center'
                >
                    <NavItem
                        to='/' name='Ricardo Pereira' color={['lightgray', 'lightgray', 'highlights']}
                        bg='transparent' border='none' mouseHover={{ bg: 'bgButtonClear' }}
                        clickMenu={() => toggleSideBar([true, '100vw'])}
                    />

                    {displayMenuButton ?
                        <Icon
                            as={IoMenu} color='lightgray' fontSize={'4xl'}
                            _hover={{ opacity: '0.7' }} cursor='pointer'
                            display={['block', 'block', 'none']}
                            onClick={() => toggleSideBar([false, '0'])}
                        />
                        :
                        <Icon
                            as={IoClose} color='lightgray' fontSize={'4xl'}
                            _hover={{ opacity: '0.7' }} cursor='pointer'
                            display={['block', 'block', 'none']}
                            onClick={() => toggleSideBar([true, '100vw'])}
                        />
                    }

                    <NavBar
                        h='100%'
                        menuH='40vh'
                        socialH='30vh'
                        w='100%'
                        border={'1px solid gray'}
                        display={['none', 'none', 'block']}
                        position='relative'
                        clickMenu={() => { return '' }}
                    />

                    <NavBar
                        h='45vh'
                        menuH='25vh'
                        socialH='15vh'
                        w='100vw'
                        border={'1px solid gray'}
                        display={['block', 'block', 'none']}
                        position='absolute'
                        top='100px'
                        left={displaySideBar}
                        background='menuBackground'
                        zIndex='9999'
                        clickMenu={() => toggleSideBar([true, '100vw'])}
                    />

                </Flex>
            </GridItem>

            <GridItem
                colSpan={[0, 0, 5]}
                minH={['720px']}
            >
                <Flex
                    flexDir={'column'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    h='100vh'
                    w='99.3%'
                    paddingX='5px'
                    minH={'inherit'}
                    overflowY='auto'
                >
                    <Header name={props.name} href={props.href} pageBack={props.pageBack} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={"exit"}
                        variants={{
                            exit: {
                                opacity: 0,
                                transition: { duration: 0.6, delay: 0.5 }
                            }
                        }}
                        transition={{ duration: 0.1 }}
                    >
                        <Flex
                            background='darkGlass'
                            backdropFilter='blur(15px)'
                            borderRadius='20px'
                            boxShadow='-0.7em -0.3em 0.8em rgba(27, 27, 27, 0.9)'

                            minH='30%'
                            minW='60%'
                            maxW={['90%', '80%', '72vw']}
                            marginY='25px'
                            marginX={['5%', 'auto', 'auto']}
                            padding={['8px', '8px', '15px']}
                        >
                            <motion.div
                                initial={{ y: -15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 15, opacity: 0, duration: 0.8 }}
                                transition={{ duration: 0.6 }}
                            >
                                {props.children}

                            </motion.div>
                        </Flex>
                    </motion.div>
                    <Footer />
                </Flex>
            </GridItem>
        </Grid >
    )
}

export default Layout
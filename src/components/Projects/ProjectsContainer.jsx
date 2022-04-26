import { Box, Flex, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'

const ProjectsContainer = (props) => {
    return (
        <Box
            marginTop='45px'
            borderTop='1px solid gray'
        >
            <Text
                background='lightGlass'
                backdropFilter='blur(5px)'
                boxShadow='-1.5em -0.8em 0.6em rgba(20, 20, 20, 0.8)'
                borderRadius='7%'
                width='250px'
                paddingY='5px'
                paddingX='10px'
                borderLeft='5px solid rgb(0, 225, 255)'
                marginY={8}
            >
                {props.nameProject}
            </Text>
            <Link 
                href={props.href} target='blank'
                _hover={{ outline: 'none' }}
            >
                <Img src={props.srcImage} w='45vw' minW='200px'></Img>
                <Text fontSize={['xs', 'sm', 'md']}>Click para visualizar e navegar pelo site</Text>
            </Link>
            <Flex
                flexDir={'column'}
                marginY={4}
            >
                {props.children}
            </Flex>
        </Box>
    )
}

export default ProjectsContainer
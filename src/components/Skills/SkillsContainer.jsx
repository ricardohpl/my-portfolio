import React from 'react'
import { Container, Box, Text } from '@chakra-ui/react'

const SkillsContainer = (props) => {
  return (
    <Container 
      w='230px'
      marginX={4} marginY={2}
    >
      <Text
        background='lightGlass'
        backdropFilter='blur(5px)'
        boxShadow='-1.5em -0.8em 0.6em rgba(20, 20, 20, 0.8)'
        borderRadius='9%'
        width='145px'
        paddingY='5px'
        paddingX='10px'
        borderLeft='5px solid rgb(0, 225, 255)'
        marginY={3}
      >
        {props.name}
      </Text>
      <Box
        padding={'5px'}
      >
        {props.children}
      </Box>
    </Container>
  )
}

export default SkillsContainer
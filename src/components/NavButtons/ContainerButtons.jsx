import { Box } from '@chakra-ui/react'
import React from 'react'

const ContainerButtons = (props) => {
    return (
        <Box marginY={[1, 5]} marginX={[5, 5, 20]} minW={['250px', '350px']}>
            {props.children}
        </Box>
    )
}

export default ContainerButtons
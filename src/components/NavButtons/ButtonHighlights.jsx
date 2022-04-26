import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const ButtonHighlights = (props) => {
    return (
        <Link to={props.to}  >
            <Box
                minW={['75px', '100px']}
                as='button'
                px='10px'
                py='12px'
                marginX={['2px', '5px',  '10px', '15px']}
                marginY={['10px', '15px']}
                borderRadius='5px'
                fontSize={['14px', '16px', '18px']}
                fontWeight='semibold'
                textAlign='center'
                outline='none'

                transition='all 0.4s cubic-bezier(.08,.52,.52,1)'

                border={'1px solid gray'}
                bg={'none'}
                color={'highlights'}

                _hover={{ bg: 'bgButtonMBG', color: 'gray' }}

                _active={{
                    opacity: '0.7',
                    boxShadow: 'inset 1px 1px 4px 0px rgba(0, 0, 0, 0.8)',
                    transform: 'scale(0.95)',
                }}
            >
                {props.name}
            </Box>
        </Link>
    )
}


export default ButtonHighlights
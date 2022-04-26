import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props) => {
    return (
        <Link to={props.to}  >
            <Box
                onClick={() => props.clickMenu()}
                minW='75px'
                as='button'
                px='10px'
                py='12px'
                marginX={['2px', '2px', '2px', '5px', '10px']}
                marginY={['15px']}
                borderRadius='5px'
                fontSize={['16px',  '18px']}
                fontWeight='semibold'
                textAlign='center'
                
                
                transition='all 0.4s cubic-bezier(.08,.52,.52,1)'
                
                border={props.border}
                bg={props.bg}
                color={props.color}

                _hover={props.mouseHover}

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

export default NavItem
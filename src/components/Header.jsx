import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const Header = (props) => {
    return (
        <Box
            w='95%'
            color='white'
            marginTop={['5px', '10px']}
            textAlign={'right'}

        >
            <Breadcrumb
            spacing='8px' separator='>'
            color='gray'
            >

                {props.pageBack  ?
                    <BreadcrumbItem>
                        <BreadcrumbLink href={'/'}>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    :
                    <></>
                }

                <BreadcrumbItem>
                    <BreadcrumbLink href={props.href}>{props.name}</BreadcrumbLink>
                </BreadcrumbItem>

            </Breadcrumb>
        </Box>
    )
}

export default Header
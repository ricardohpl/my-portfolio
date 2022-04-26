import { Img, Tooltip } from '@chakra-ui/react'
import React from 'react'


const SkillIcon = (props) => (
    <Tooltip label={props.name} >
        <Img 
            src={props.src} h={['36px', '40px', '46px']} margin='5px' display='inline-block' cursor='help'
            background={props.bg}
            borderRadius='5px'
            // borderRadius={props.borderRadius}
            _hover={{opacity: '0.8'}}
        />
    </Tooltip> 
)

export default SkillIcon
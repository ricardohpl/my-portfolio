import { Heading } from '@chakra-ui/react'
import React from 'react'

const TitleSections = (props) => {
  return (
    <Heading color='highlights'paddingX={[4, 45, 75]} paddingY={[8]} >{props.children}</Heading>
  )
}

export default TitleSections
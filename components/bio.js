import { Box, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioYear = ({ children }) => {
  const color = useColorModeValue('gray.600', 'gray.400')
  return (
    <span style={{ fontWeight: 'bold', marginRight: '1em', color }}>
      {children}
    </span>
  )
}

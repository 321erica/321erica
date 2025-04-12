import { Heading, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const HeaderStyle = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
`

const PageHeader = ({ children }) => {
  const color = useColorModeValue('gray.800', 'gray.200')
  
  return (
    <HeaderStyle>
      <Heading 
        as="h1" 
        fontSize={[28, 32, 40]} 
        fontWeight={400}
        color={color}
        letterSpacing="-0.02em"
        fontFamily="'Voyage', serif"
        mb={4}
      >
        {children}
      </Heading>
    </HeaderStyle>
  )
}

export default PageHeader 
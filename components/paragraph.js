import styled from '@emotion/styled'
import { useColorModeValue } from '@chakra-ui/react'

const ParagraphStyle = styled.p`
  text-align: justify;
  text-indent: 1em;
  hyphens: auto;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0;
  font-family: 'Satoshi', sans-serif;
`

const Paragraph = props => {
  const color = useColorModeValue('gray.700', 'gray.300')
  return <ParagraphStyle style={{ color }} {...props} />
}

export default Paragraph

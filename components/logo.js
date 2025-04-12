import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: 400;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  letter-spacing: -0.02em;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <FootprintIcon fill={useColorModeValue('#111111', '#f1f1f1')} />
        <Text
          color={useColorModeValue('gray.800', 'gray.100')}
          fontFamily="'Voyage', serif"
          fontWeight={400}
          ml={3}
        >
          Erica Xu
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo

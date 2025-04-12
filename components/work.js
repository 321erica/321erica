import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/">
      Projects
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => {
  const bg = useColorModeValue('gray.200', 'gray.700')
  const color = useColorModeValue('gray.800', 'gray.200')
  
  return (
    <Badge bg={bg} color={color} mr={2}>
      {children}
    </Badge>
  )
}

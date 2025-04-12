import { Box, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box 
      align="center" 
      opacity={0.6} 
      fontSize="sm"
      color={useColorModeValue('gray.600', 'gray.400')}
      mt={8}
      py={4}
      borderTop="1px solid"
      borderColor={useColorModeValue('#e5e5e5', '#444444')}
    >
      &copy; {new Date().getFullYear()} Erica Xu. All Rights Reserved.
    </Box>
  )
}

export default Footer

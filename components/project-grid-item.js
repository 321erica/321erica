import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/projects/${id}`}
      scroll={false}
      cursor="pointer"
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      transition="all 0.2s"
      bg={useColorModeValue('white', '#2c2c2c')}
      borderColor={useColorModeValue('#d1d1d1', '#444444')}
      borderWidth="1px"
      boxShadow="sm"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: 'md'
      }}
    >
      <Box 
        position="relative"
        w="100%"
        pt="70%" // 7:10 aspect ratio
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
        >
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        
        {/* Dark overlay that appears on hover */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg={useColorModeValue('rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.7)')}
          transition="all 0.3s"
          opacity="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _groupHover={{ opacity: 1 }}
        >
          <Text 
            fontSize="lg" 
            fontWeight="bold" 
            color={useColorModeValue('#f1f1f1', 'white')}
            px={4}
          >
            {title}
          </Text>
        </Box>
      </Box>

      <Box p={3} borderTop="1px solid" borderColor={useColorModeValue('#e5e5e5', '#444444')}>
        <LinkOverlay as="div" href={`/projects/${id}`}>
          <Text 
            mt={1} 
            fontSize="18px" 
            fontWeight={400}
            letterSpacing="-0.01em"
            color={useColorModeValue('#111111', '#f1f1f1')}
            fontFamily="'Voyage', serif"
          >
            {title}
          </Text>
        </LinkOverlay>
        <Text 
          fontSize="14px" 
          fontWeight={300}
          letterSpacing="0"
          color={useColorModeValue('gray.600', 'gray.400')}
          fontFamily="'Satoshi', sans-serif"
        >
          {children}
        </Text>
      </Box>
    </LinkBox>
  </Box>
)

export const ProjectGridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 0;
        transition: all 0.2s ease;
      }
      
      .chakra-linkbox:hover .grid-item-thumbnail {
        transform: scale(1.05);
      }
    `}
  />
) 
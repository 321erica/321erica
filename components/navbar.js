import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'gray.100')
  const activeBackground = useColorModeValue('gray.200', 'gray.700')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? activeBackground : undefined}
      color={active ? useColorModeValue('gray.900', 'white') : inactiveColor}
      borderRadius="0"
      fontWeight={400}
      letterSpacing="0"
      fontSize="16px"
      fontFamily="'Satoshi', sans-serif"
      textTransform="uppercase"
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('rgba(248, 248, 248, 0.8)', 'rgba(14, 14, 14, 0.8)')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      borderBottom={useColorModeValue('1px solid #d1d1d1', '1px solid #444444')}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="-0.03em" fontWeight={400} fontFamily="'Voyage', serif">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={6}
        >
          <LinkItem href="/" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/sketchbook" path={path}>
            Sketchbook
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                borderRadius="0"
              />
              <MenuList 
                bg={useColorModeValue('white', 'gray.800')}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                borderRadius="0"
              >
                <MenuItem 
                  as={MenuLink} 
                  href="/"
                  fontWeight={400}
                  fontFamily="'Satoshi', sans-serif"
                  textTransform="uppercase"
                  letterSpacing="0"
                  fontSize="14px"
                  borderRadius="0"
                  _hover={{
                    bg: useColorModeValue('gray.200', 'gray.700')
                  }}
                >
                  Projects
                </MenuItem>
                <MenuItem 
                  as={MenuLink} 
                  href="/sketchbook"
                  fontWeight={400}
                  fontFamily="'Satoshi', sans-serif"
                  textTransform="uppercase"
                  letterSpacing="0"
                  fontSize="14px"
                  borderRadius="0"
                  _hover={{
                    bg: useColorModeValue('gray.200', 'gray.700')
                  }}
                >
                  Sketchbook
                </MenuItem>
                <MenuItem 
                  as={MenuLink} 
                  href="/about"
                  fontWeight={400}
                  fontFamily="'Satoshi', sans-serif"
                  textTransform="uppercase"
                  letterSpacing="0"
                  fontSize="14px"
                  borderRadius="0"
                  _hover={{
                    bg: useColorModeValue('gray.200', 'gray.700')
                  }}
                >
                  About
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar

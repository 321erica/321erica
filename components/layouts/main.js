import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { GridItemStyle } from '../grid-item'
import { useRouter } from 'next/router'

const Main = ({ children, router }) => {
  const currentRouter = useRouter()
  const path = currentRouter.asPath
  
  // Use wider container for sketchbook and project detail pages
  const isWiderContainer = path === '/sketchbook' || path.startsWith('/projects/') || path.startsWith('/works/')
  
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Erica's homepage" />
        <meta name="author" content="Erica Xu" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Erica Xu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Erica Xu" />
        <meta name="og:title" content="Erica Xu" />
        <meta property="og:type" content="website" />
        <title>Erica Xu - Homepage</title>
      </Head>

      <GridItemStyle />
      <NavBar path={router.asPath} />

      <Container maxW={isWiderContainer ? "1200px" : "container.md"} pt={14} px={isWiderContainer ? [2, 4] : 4}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

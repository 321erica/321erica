import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import { ProjectGridItem } from '../components/project-grid-item'
import { GridItemStyle } from '../components/grid-item'

// Import project thumbnails
import thumbProject1 from '../public/images/works/inkdrop_eyecatch.png'
import thumbProject2 from '../public/images/works/walknote_eyecatch.png'
import thumbProject3 from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbProject4 from '../public/images/works/menkiki_eyecatch.png'
import thumbProject5 from '../public/images/works/margelo_eyecatch.png'
import thumbProject6 from '../public/images/works/modetokyo_eyecatch.png'

const Home = () => (
  <Layout>
    <Container maxW="container.md">
      <GridItemStyle />
      
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
        mb={8}
      >
        <Heading as="h1" fontSize={28} mb={6}>
          My Portfolio
        </Heading>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        <Section>
          <ProjectGridItem id="project1" title="Project 1" thumbnail={thumbProject1}>
            A beautiful design project
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="project2" title="Project 2" thumbnail={thumbProject2}>
            An interactive web application
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="project3" title="Project 3" thumbnail={thumbProject3}>
            A branding project
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="project4" title="Project 4" thumbnail={thumbProject4}>
            UX/UI design for mobile app
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="project5" title="Project 5" thumbnail={thumbProject5}>
            A product design project
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="project6" title="Project 6" thumbnail={thumbProject6}>
            Web design for a magazine
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

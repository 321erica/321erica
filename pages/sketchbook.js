import { Container, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkImage } from '../components/work'
import P from '../components/paragraph'
import PageHeader from '../components/page-header'
import styled from '@emotion/styled'

// Using work images as placeholder sketches
const sketches = [
  '/images/works/inkdrop_01.png',
  '/images/works/walknote_02.png',
  '/images/works/the-four-painters_01.jpg',
  '/images/works/menkiki_02.png',
  '/images/works/margelo_01.png',
  '/images/works/modetokyo_02.jpg',
  '/images/works/inkdrop_02.png',
  '/images/works/walknote_01.png',
  '/images/works/the-four-painters_02.jpg'
]

// Repeat the sketches array to have more content
const allSketches = [...sketches, ...sketches, ...sketches]

// Create a styled component for the masonry grid
const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  grid-auto-flow: dense;
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

const MasonryItem = styled(Box)`
  break-inside: avoid;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const Sketchbook = () => (
  <Layout title="Sketchbook">
    <Container maxW="container.md">
      <PageHeader>Sketchbook</PageHeader>
      
      <Box mb={8}>
        <P>
          A collection of sketches, drawings, and visual explorations that inspire my work and document my creative process.
        </P>
      </Box>

      {/* Pinterest-style masonry layout */}
      <MasonryGrid mb={8}>
        {allSketches.map((src, index) => (
          <MasonryItem 
            key={index}
            borderRadius="lg" 
            overflow="hidden"
            borderWidth="1px"
            borderColor={useColorModeValue('#d1d1d1', '#444444')}
            boxShadow="sm"
            // Random heights to create masonry effect
            style={{ 
              gridRow: `span ${Math.floor(Math.random() * 2) + 1}`
            }}
          >
            <WorkImage src={src} alt={`Sketch ${index + 1}`} />
          </MasonryItem>
        ))}
      </MasonryGrid>
    </Container>
  </Layout>
)

export default Sketchbook
export { getServerSideProps } from '../components/chakra' 
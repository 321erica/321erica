import { Container, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { WorkImage } from '../components/work'
import P from '../components/paragraph'
import PageHeader from '../components/page-header'
import MasonryGrid from '../components/masonry-grid'

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

// Enhanced column layout for wider display
const sketchbookColumns = {
  default: 4, // 4 columns on large desktop
  1100: 3,    // 3 columns on desktop
  900: 2,     // 2 columns on medium screens
  500: 1      // 1 column on small screens
}

const Sketchbook = () => (
  <Layout title="Sketchbook">
    <Container>
      <PageHeader>Sketchbook</PageHeader>
      
      <Box mb={8} maxW="container.md">
        <P>
          A collection of sketches, drawings, and visual explorations that inspire my work and document my creative process.
        </P>
      </Box>

      {/* Using the masonry grid layout with enhanced column configuration */}
      <MasonryGrid columnCount={sketchbookColumns}>
        {allSketches.map((src, index) => (
          <WorkImage 
            key={index} 
            src={src} 
            alt={`Sketch ${index + 1}`} 
          />
        ))}
      </MasonryGrid>
    </Container>
  </Layout>
)

export default Sketchbook
export { getServerSideProps } from '../components/chakra' 
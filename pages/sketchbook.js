import { Container, Heading, SimpleGrid, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkImage } from '../components/work'
import P from '../components/paragraph'

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

const Sketchbook = () => (
  <Layout title="Sketchbook">
    <Container maxW="container.md">
      <Box mb={8}>
        <Heading as="h1" fontSize={28} mb={4} textAlign="center" color={useColorModeValue('gray.800', 'white')}>
          Sketchbook
        </Heading>
        <P>
          A collection of sketches, drawings, and visual explorations that inspire my work and document my creative process.
        </P>
      </Box>

      {/* Pinterest-style masonry layout */}
      <SimpleGrid 
        columns={[1, 2, 3]} 
        spacing={6}
        mb={8}
      >
        {sketches.map((src, index) => (
          <Section key={index}>
            <Box 
              borderRadius="lg" 
              overflow="hidden" 
              mb={index % 3 === 0 ? 12 : index % 3 === 1 ? 6 : 8}
              borderWidth="1px"
              borderColor={useColorModeValue('#d1d1d1', '#444444')}
              boxShadow="sm"
            >
              <WorkImage src={src} alt={`Sketch ${index + 1}`} />
            </Box>
          </Section>
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Sketchbook
export { getServerSideProps } from '../components/chakra' 
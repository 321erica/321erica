import { useRouter } from 'next/router'
import { Container, SimpleGrid, Box, Text, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import PageHeader from '../../components/page-header'

// Example projects data (in a real app, this would be fetched from a database)
const projects = {
  project1: {
    title: 'Project 1',
    description: 'A beautiful design project with a focus on modern aesthetics and usability.',
    images: [
      '/images/works/inkdrop_01.png',
      '/images/works/inkdrop_02.png'
    ]
  },
  project2: {
    title: 'Project 2',
    description: 'An interactive web application that pushes the boundaries of user experience.',
    images: [
      '/images/works/walknote_01.png',
      '/images/works/walknote_02.png'
    ]
  },
  project3: {
    title: 'Project 3',
    description: 'A branding project for a company looking to establish a strong visual identity.',
    images: [
      '/images/works/the-four-painters_01.jpg',
      '/images/works/the-four-painters_02.jpg'
    ]
  },
  project4: {
    title: 'Project 4',
    description: 'UX/UI design for a mobile application that simplifies complex tasks.',
    images: [
      '/images/works/menkiki_01.png',
      '/images/works/menkiki_02.png'
    ]
  },
  project5: {
    title: 'Project 5',
    description: 'A product design project that combines functionality with beautiful aesthetics.',
    images: [
      '/images/works/margelo_01.png',
      '/images/works/margelo_02.png'
    ]
  },
  project6: {
    title: 'Project 6',
    description: 'Web design for a digital magazine with a focus on readability and visual appeal.',
    images: [
      '/images/works/modetokyo_01.jpg',
      '/images/works/modetokyo_02.jpg'
    ]
  }
}

const ProjectPage = () => {
  const router = useRouter()
  const { id } = router.query
  const project = projects[id]

  if (!project) {
    return (
      <Layout title="Project Not Found">
        <Container>
          <PageHeader>Project not found</PageHeader>
          <Text>The project you're looking for does not exist.</Text>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout title={project.title}>
      <Container maxW="container.md">
        <PageHeader>{project.title}</PageHeader>
        
        <Box mb={8}>
          <P>{project.description}</P>
        </Box>

        {/* Masonry layout for project images */}
        <SimpleGrid 
          columns={[1, 1, 2]} 
          spacing={6}
          mb={8}
        >
          {project.images.map((src, index) => (
            <Section key={index}>
              <Box 
                borderRadius="lg" 
                overflow="hidden" 
                borderWidth="1px"
                borderColor={useColorModeValue('#d1d1d1', '#444444')}
                boxShadow="sm"
              >
                <WorkImage src={src} alt={`${project.title} image ${index + 1}`} />
              </Box>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default ProjectPage
export { getServerSideProps } from '../../components/chakra' 
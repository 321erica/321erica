import { useRouter } from 'next/router'
import { Container, Box, Text, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import PageHeader from '../../components/page-header'
import MasonryGrid from '../../components/masonry-grid'

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

// Enhanced column layout for wider display
const projectDetailColumns = {
  default: 4, // 4 columns on large desktop
  1100: 3,    // 3 columns on desktop
  900: 2,     // 2 columns on medium screens
  500: 1      // 1 column on small screens
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
      <Container>
        <PageHeader>{project.title}</PageHeader>
        
        <Box mb={8} maxW="container.md">
          <P>{project.description}</P>
        </Box>

        {/* Using enhanced masonry layout for project images */}
        <MasonryGrid columnCount={projectDetailColumns}>
          {project.images.map((src, index) => (
            <WorkImage
              key={index}
              src={src}
              alt={`${project.title} image ${index + 1}`}
            />
          ))}
        </MasonryGrid>
      </Container>
    </Layout>
  )
}

export default ProjectPage
export { getServerSideProps } from '../../components/chakra' 
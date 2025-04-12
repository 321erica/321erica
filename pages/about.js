import { Container, Heading, SimpleGrid, Box, Text, Flex, Tag, useColorModeValue } from '@chakra-ui/react'
import { WorkImage } from '../components/work'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import P from '../components/paragraph'
import PageHeader from '../components/page-header'

// List of skills/tools
const skills = [
  { name: 'UI/UX Design', color: 'gray' },
  { name: 'Web Development', color: 'gray' },
  { name: 'Graphic Design', color: 'gray' },
  { name: 'Branding', color: 'gray' },
  { name: 'Motion Design', color: 'gray' },
  { name: 'Typography', color: 'gray' },
  { name: 'Figma', color: 'gray' },
  { name: 'Photoshop', color: 'gray' },
  { name: 'Illustrator', color: 'gray' },
  { name: 'React', color: 'gray' },
  { name: 'Next.js', color: 'gray' },
  { name: 'Tailwind CSS', color: 'gray' }
]

const About = () => (
  <Layout title="About">
    <Container maxW="container.md">
      <PageHeader>About Me</PageHeader>

      {/* Project-style image (not a portrait) */}
      <Box 
        mb={12} 
        borderRadius="lg" 
        overflow="hidden"
        boxShadow="lg"
        borderWidth="1px"
        borderColor={useColorModeValue('#d1d1d1', '#444444')}
      >
        <WorkImage 
          src="/images/works/the-four-painters_01.jpg"
          alt="Workspace image" 
        />
      </Box>

      {/* Descriptive text blocks */}
      <Section>
        <Heading 
          as="h3" 
          variant="section-title" 
          mb={4} 
          fontSize={24}
          fontWeight={400}
          letterSpacing="-0.02em"
          color={useColorModeValue('gray.800', 'white')}
          fontFamily="'Voyage', serif"
          textTransform="none"
        >
          Who I Am
        </Heading>
        <P>
          I'm a digital designer and developer focused on creating beautiful, functional, and user-friendly digital experiences. With a passion for the intersection of technology and design, I craft solutions that not only look great but also solve real problems.
        </P>
      </Section>

      <Section delay={0.1}>
        <Heading 
          as="h3" 
          variant="section-title" 
          mb={4} 
          fontSize={24}
          fontWeight={400}
          letterSpacing="-0.02em"
          color={useColorModeValue('gray.800', 'white')}
          fontFamily="'Voyage', serif"
          textTransform="none"
        >
          My Approach
        </Heading>
        <P>
          I believe in a thoughtful design process that begins with understanding the problem, researching user needs, and exploring creative solutions. My work is guided by principles of simplicity, accessibility, and attention to detail.
        </P>
      </Section>

      <Section delay={0.2}>
        <Heading 
          as="h3" 
          variant="section-title" 
          mb={4} 
          fontSize={24}
          fontWeight={400}
          letterSpacing="-0.02em"
          color={useColorModeValue('gray.800', 'white')}
          fontFamily="'Voyage', serif"
          textTransform="none"
        >
          Tools & Skills
        </Heading>
        <Flex flexWrap="wrap" gap={3} mb={8}>
          {skills.map((skill, index) => (
            <Tag 
              key={index} 
              size="md" 
              bg="transparent"
              color={useColorModeValue('gray.800', 'gray.200')}
              borderRadius="none"
              borderBottom="1px solid"
              borderColor={useColorModeValue('gray.300', 'gray.600')}
              fontWeight={300}
              letterSpacing="0.02em"
              textTransform="uppercase"
              fontFamily="'Satoshi', sans-serif"
              fontSize="13px"
              mb={3}
              px={2}
              py={1}
            >
              {skill.name}
            </Tag>
          ))}
        </Flex>
      </Section>
    </Container>
  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra' 
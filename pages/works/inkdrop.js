import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import WorkImagesGallery from '../../components/work-images-gallery'

// Enhanced column layout for wider display
const workDetailColumns = {
  default: 4, // 4 columns on large desktop
  1100: 3,    // 3 columns on desktop
  900: 2,     // 2 columns on medium screens
  500: 1      // 1 column on small screens
}

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Box maxW="container.md">
        <Title>
          Inkdrop <Badge>2016-</Badge>
        </Title>
        <P>
          A Markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support. The life-time revenue is more than $300k.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/">
              https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I've Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        {/* Video iframe outside the grid layout */}
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>
      
      {/* Using enhanced masonry layout for work images */}
      <WorkImagesGallery
        images={[
          '/images/works/inkdrop_01.png',
          '/images/works/inkdrop_02.png'
        ]}
        alt="Inkdrop"
        columnCount={workDetailColumns}
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

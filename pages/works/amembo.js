import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import WorkImagesGallery from '../../components/work-images-gallery'

// Standard column layout: 3 on desktop, 2 on medium, 1 on small
const workDetailColumns = {
  default: 3, // 3 columns on desktop
  900: 2,     // 2 columns on medium screens
  500: 1      // 1 column on small screens
}

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>
        amembo <Badge>2005-2008</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/amembo_icon.png" alt="icon" />
      </Center>
      <P>
        P2P private file sharing tool with MSN Messenger integration for Windows
      </P>
      <P>
        「MSN Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>ファイル転送がサイズ制限無く高速に出来ます。</ListItem>
        <ListItem>複数のコンピュータ間で同時に通信が出来ます。</ListItem>
        <ListItem>
          簡単接続機能により、面倒な接続作業を自動で行います。
        </ListItem>
        <ListItem>
          一つのポート開放だけで、様々な通信が出来る強力なプロトコル。
        </ListItem>
        <ListItem>
          IM機能を装備しています。会話中に写真を表示したりもできます。
        </ListItem>
        <ListItem>
          ファイル共有機能で、設定した公開フォルダを相手に見せることが出来ます。
        </ListItem>
        <ListItem>MSN/Windowsメッセンジャーからの招待で接続できます。</ListItem>
        <ListItem>
          画面転送機能で、相手に自分のデスクトップを見せることが出来ます。
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows 2000/XP</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Delphi</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
            v0.5.15.123
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2008/03/23</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://w.atwiki.jp/amembo/">使い方wiki</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://forest.watch.impress.co.jp/article/2006/01/18/amembo.html">
            <Badge mr={2}>窓の杜</Badge>
            「MSN
            Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      {/* Using standard masonry layout for work images */}
      <WorkImagesGallery
        images={[
          '/images/works/amembo_01.gif',
          '/images/works/amembo_02.gif',
          '/images/works/amembo_03.jpg',
          '/images/works/amembo_04.jpg'
        ]}
        alt="amembo"
        columnCount={workDetailColumns}
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

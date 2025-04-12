import { WorkImage } from './work'
import MasonryGrid from './masonry-grid'

// Standard column layout: 3 on desktop, 2 on medium, 1 on small
const columnConfig = {
  default: 3, // 3 columns on desktop
  900: 2,     // 2 columns on medium screens
  500: 1      // 1 column on small screens
}

const WallpaperThumbnailList = ({ numOfImages, urlForImage, alt }) => {
  return (
    <MasonryGrid columnCount={columnConfig}>
      {Array.from(Array(numOfImages).keys())
        .map(i => i + 1)
        .map(i => (
          <WorkImage key={i} src={urlForImage(i)} alt={`${alt} ${i}`} />
        ))}
    </MasonryGrid>
  )
}

export default WallpaperThumbnailList

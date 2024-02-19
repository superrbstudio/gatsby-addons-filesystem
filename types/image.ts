import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"


export enum ImageLayout {
  none,
  cover,
  contain,
}

interface Image {
  alt: string
  gatsbyImageData: IGatsbyImageData
}

export const query = graphql`
  fragment Image on ImageType {
    alt
    file {
      childImageSharp {
        gatsbyImageData(
          width: 200
          breakpoints: [25, 750, 1080, 1366, 1920, 2560, 3840, 4096, 5120]
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Image

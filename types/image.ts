import { graphql } from "gatsby"

export enum ImageLayout {
  none,
  cover,
  contain,
}

interface Image {
  alt: string
  fluid: {
    src: string
    base64?: string
    srcSet?: string
  }
}

export const query = graphql`
  fragment Image on Image {
    alt
  }
`

export default Image

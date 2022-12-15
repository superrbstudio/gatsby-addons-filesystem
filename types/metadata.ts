import { graphql } from "gatsby"
import Image from "./image"

interface Metadata {
  meta_description: string
  meta_navigation_title: string
  meta_robots: string
  meta_title: string
  meta_image: Image
  meta_author: string
}

export const query = graphql`
  fragment Metadata on Metadata {
    meta_description
    meta_navigation_title
    meta_robots
    meta_title
    meta_image {
      ...Image
    }
    meta_author
  }
`

export default Metadata

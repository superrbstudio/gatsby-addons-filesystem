import { graphql } from "gatsby"

interface Link {
  document?: string
  link_type?: string
  type?: string
  uid?: string
  url?: string
}

export const query = graphql`
  fragment Link on LinkType {
    link_type
    type
    uid
    url
  }
`

export default Link

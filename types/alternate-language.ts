import { graphql } from "gatsby"

interface AlternateLanguage {
  lang: string
  type: string
  uid: string
}

export const query = graphql`
  fragment AlternateLanguage on AlternateLanguageType {
    lang
    type
    uid
  }
`

export default AlternateLanguage

import AlternateLanguage from "./alternate-language"
import Metadata from "./metadata"
import { Language } from "ProjectRoot/src/utils/translations"
import { graphql } from "gatsby"

export interface PageData {
  page_title: string
  [key: string]: any
}

export interface PageStub {
  id: string
  uid: string
  lang: Language
  type: string
}

interface Page extends PageStub {
  _previewable: string
  tags: string[]
  first_publication_date: string
  last_publication_date: string
  alternate_languages: AlternateLanguage[]
  data: Metadata & PageData
}

export const query = graphql`
  fragment PageData on PageData {
    ...Metadata
    page_title
  }

  fragment PageStub on Page {
    id
    uid
    lang
    type: __typename
  }

  fragment Page on Page {
    ...PageStub
    alternate_languages {
      ...AlternateLanguage
    }
    tags
    first_publication_date
    last_publication_date
    data {
      ... on PageData {
        ...PageData
      }
    }
  }
`

export default Page

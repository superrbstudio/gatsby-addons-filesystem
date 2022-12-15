import React, { memo } from "react"
import { RichText as RichTextType } from "../../types"

interface Props {
  field: RichTextType["richText"]
}

const RichText = ({ field }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: field }} />
}

export default memo(RichText)

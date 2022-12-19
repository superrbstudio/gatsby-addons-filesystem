import React, { memo } from "react"
import { RichText as RichTextType } from "../../types"

interface Props {
  field: RichTextType["richText"]
  className: string
}

const RichText = ({ field, className = "" }: Props) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: field }} />
  )
}

export default memo(RichText)

import React, { ForwardedRef, forwardRef, memo } from "react"
import { RichText as RichTextType } from "../../types"

interface Props {
  field: RichTextType["richText"]
  className: string
}

const RichText = forwardRef(
  ({ field, className = "" }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: field }}
        ref={ref}
      />
    )
  }
)

export default memo(RichText)

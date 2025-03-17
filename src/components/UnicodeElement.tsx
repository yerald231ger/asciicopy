import { UnicodeBlockElement } from './UnicodeBlockElement'

interface UnicodeBlock {
  code: string
  glyph: string
  description: string
}

interface UnicodeElementProps {
  title: string
  blocks: UnicodeBlock[]
}

export function UnicodeElement({ title, blocks }: UnicodeElementProps) {
  if (!Array.isArray(blocks)) {
    return <div>Error: blocks is not an array</div>
  }

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5">
        {blocks.map((block) => (
          <UnicodeBlockElement key={block.code} block={block} />
        ))}
      </div>
    </div>
  )
}
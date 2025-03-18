import { useState } from 'react'

interface UnicodeBlock {
  code: string
  glyph: string
  description: string
}

interface UnicodeBlockElementProps {
  block: UnicodeBlock
}

export function UnicodeBlockElement({ block }: UnicodeBlockElementProps) {
  const [copiedBlock, setCopiedBlock] = useState<string | null>(null)

  const handleCopy = async (glyph: string, code: string) => {
    try {
      await navigator.clipboard.writeText(glyph)
      setCopiedBlock(code)
      setTimeout(() => setCopiedBlock(null), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div
      onClick={() => handleCopy(block.glyph, block.code)}
      className="relative p-1.5 bg-gray-50 rounded-lg border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer group"
    >
      <span className="text-xl block mb-0.5">{block.glyph}</span>
      <p className="text-[9px] font-medium text-gray-900 truncate">{block.description}</p>
      <p className="text-[8px] text-gray-500">{block.code}</p>

      {/* Copied indicator */}
      <div
        className={`
          absolute top-0.5 right-0.5 px-1 py-0.5 bg-blue-600 text-white text-[8px] rounded
          transition-all duration-200
          ${copiedBlock === block.code
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2'
          }
        `}
      >
        Copied!
      </div>
    </div>
  )
}

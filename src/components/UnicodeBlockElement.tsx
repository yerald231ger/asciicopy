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
      className="relative aspect-square w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-lg border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer group"
    >
      <span className="text-5xl flex-1 flex items-center justify-center">{block.glyph}</span>
      <p className="text-[12px] text-gray-600 mt-1">{block.code}</p>

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

import { useState } from 'react'

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
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {blocks.map((block) => (
          <div 
            key={block.code} 
            onClick={() => handleCopy(block.glyph, block.code)}
            className="relative p-2 bg-gray-50 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer group"
          >
            <span className="text-2xl block mb-1">{block.glyph}</span>
            <p className="text-xs font-medium text-gray-900 truncate">{block.description}</p>
            <p className="text-[10px] text-gray-500">{block.code}</p>
            
            {/* Copied indicator */}
            <div 
              className={`
                absolute top-1 right-1 px-1.5 py-0.5 bg-blue-600 text-white text-[10px] rounded
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
        ))}
      </div>
    </div>
  )
} 
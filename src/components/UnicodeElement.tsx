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
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blocks.map((block) => (
          <div 
            key={block.code} 
            onClick={() => handleCopy(block.glyph, block.code)}
            className="relative p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer group"
          >
            <span className="text-4xl block mb-2">{block.glyph}</span>
            <p className="text-sm font-medium text-gray-900">{block.description}</p>
            <p className="text-xs text-gray-500">{block.code}</p>
            
            {/* Copied indicator */}
            <div 
              className={`
                absolute top-2 right-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-md
                transition-all duration-200
                ${copiedBlock === block.code 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-2'
                }
              `}
            >
              Copied!
            </div>

            {/* Hover indicator */}
            <div 
              className={`
                absolute inset-0 flex items-center justify-center bg-black/5 rounded-lg
                opacity-0 group-hover:opacity-100 transition-opacity duration-200
              `}
            >
              <span className="text-sm font-medium text-gray-900">Click to copy</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
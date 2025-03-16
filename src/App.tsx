import { useState } from 'react'
import './App.css'
import { UnicodeElement } from './components/UnicodeElement'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('overview')

  const blockElements = {
    blocks: [
      { code: 'U+2580', glyph: '▀', description: 'Upper half block' },
      { code: 'U+2584', glyph: '▄', description: 'Lower half block' },
      { code: 'U+2588', glyph: '█', description: 'Full block' },
      { code: 'U+258C', glyph: '▌', description: 'Left half block' },
      { code: 'U+2590', glyph: '▐', description: 'Right half block' },
    ],
    gradients: [
      { code: 'U+2581', glyph: '▁', description: 'Lower one eighth block' },
      { code: 'U+2582', glyph: '▂', description: 'Lower one quarter block' },
      { code: 'U+2583', glyph: '▃', description: 'Lower three eighths block' },
      { code: 'U+2585', glyph: '▅', description: 'Lower five eighths block' },
      { code: 'U+2586', glyph: '▆', description: 'Lower three quarters block' },
      { code: 'U+2587', glyph: '▇', description: 'Lower seven eighths block' },
    ],
    shades: [
      { code: 'U+2591', glyph: '░', description: 'Light shade' },
      { code: 'U+2592', glyph: '▒', description: 'Medium shade' },
      { code: 'U+2593', glyph: '▓', description: 'Dark shade' },
    ],
    quadrants: [
      { code: 'U+2596', glyph: '▖', description: 'Quadrant lower left' },
      { code: 'U+2597', glyph: '▗', description: 'Quadrant lower right' },
      { code: 'U+2598', glyph: '▘', description: 'Quadrant upper left' },
      { code: 'U+259D', glyph: '▝', description: 'Quadrant upper right' },
      { code: 'U+259A', glyph: '▚', description: 'Quadrant upper left and lower right' },
      { code: 'U+259E', glyph: '▞', description: 'Quadrant upper right and lower left' },
    ]
  }

  const categories = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'blocks', name: 'Block Elements', icon: '▀' },
    { id: 'contacts', name: 'Contacts', icon: '👥' },
    { id: 'bills', name: 'Bills', icon: '💰' },
    { id: 'expenses', name: 'Expenses', icon: '📋' },
    { id: 'banking', name: 'Banking', icon: '🏦' },
    { id: 'taxes', name: 'Taxes', icon: '📑' },
    { id: 'accounting', name: 'Accounting', icon: '📊' },
  ]

  const renderContent = () => {
    if (selectedCategory === 'blocks') {
      return (
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Block Elements</h2>
            <div className="space-y-8">
              <UnicodeElement title="Basic Blocks" blocks={blockElements.blocks} />
              <UnicodeElement title="Gradient Blocks" blocks={blockElements.gradients} />
              <UnicodeElement title="Shades" blocks={blockElements.shades} />
              <UnicodeElement title="Quadrant Blocks" blocks={blockElements.quadrants} />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="p-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6">{
            categories.find(cat => cat.id === selectedCategory)?.name || 'Overview'
          }</h2>
          {/* Sample content similar to the image */}
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-4">Name</th>
                <th className="pb-4">Total pay (per annum)</th>
                <th className="pb-4">Tax 20%</th>
                <th className="pb-4">NI</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data */}
              <tr className="border-t border-gray-100">
                <td className="py-4">Stacey Bobb</td>
                <td>$1,900.00</td>
                <td>$300.00</td>
                <td>$314.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen">
        {/* Sidebar - Fixed */}
        <aside className="fixed inset-y-0 left-0 w-64 bg-gray">
          <div className="flex flex-col h-full">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">▚</span>
                </div>
                <h1 className="text-xl font-semibold text-gray-900">AsciiCopy</h1>
              </div>
            </div>
            <nav className="mt-4 p-3 space-y-2 flex-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center px-4 py-2.5 text-left transition-all duration-200 rounded-lg transform hover:translate-x-1 hover:-skew-x-1 ${
                    selectedCategory === category.id 
                      ? 'text-blue-600 bg-white shadow-sm font-medium translate-x-1 -skew-x-1' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <span className="transform hover:skew-x-1">{category.name}</span>
                </button>
              ))}
            </nav>
            {/* Company selector at bottom */}
            <div className="p-4 border-t border-gray-200">
              <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent hover:bg-[#f5f5f5]">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">▚</span>
                </div>
                <span className="text-sm text-gray-700">Ascii Copy, Inc</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content - Scrollable */}
        <main className="flex-1 ml-64">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App

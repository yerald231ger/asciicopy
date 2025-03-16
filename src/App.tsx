import { useState } from 'react'
import './App.css'
import { UnicodeElement } from './components/UnicodeElement'
import { blockElements } from './data/blockElements'
import { CategoryButton } from './components/CategoryButton' // Import the new component

function App() {
  const [selectedCategory, setSelectedCategory] = useState('blocks')

  const categories = [
    { id: 'blocks', name: 'Block Elements', icon: '▀' },
    { id: 'geometric', name: 'Geometric Shapes', icon: '◆' },
    { id: 'latin', name: 'Latin', icon: 'Ā' }
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

    if (selectedCategory === 'geometric') {
      return (
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Geometric Shapes</h2>
            <div className="space-y-8">
              <UnicodeElement title="Geometric Shapes" blocks={blockElements.geometric} />
            </div>
          </div>
        </div>
      )
    }

    if (selectedCategory === 'latin') {
      return (
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Latin Characters</h2>
            <div className="space-y-8">
              <UnicodeElement title="Latin Characters" blocks={blockElements.latin} />
            </div>
          </div>
        </div>
      )
    }

    return null
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
                <CategoryButton
                  key={category.id}
                  category={category}
                  isSelected={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                />
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

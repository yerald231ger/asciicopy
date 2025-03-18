import { useState, useEffect } from 'react'
import './App.css'
import { UnicodeElement } from './components/UnicodeElement'
import { blockElements } from './data/blockElements'
import { CategoryButton } from './components/CategoryButton' // Import the new component

function App() {
  const [selectedCategory, setSelectedCategory] = useState('blocks')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Add state for sidebar visibility

  useEffect(() => {
    document.title = "AsciiCopy - Copy and use ASCII and Unicode characters easily";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "AsciiCopy - Copy and use ASCII and Unicode characters easily.");
    }
  }, []);

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
              <UnicodeElement title="Basic Latin" blocks={blockElements.latin.basic} />
              <UnicodeElement title="Latin-1 Supplement" blocks={blockElements.latin.latin1} />
              <UnicodeElement title="Latin Extended-A" blocks={blockElements.latin.latinExtA} />
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white rounded-md sm:hidden hover:bg-gray-300 focus:outline-none focus:ring-2"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar visibility
      >
        <svg className="w-6 h-6" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      {/* Sidebar - Fixed */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
        <div className={`h-full px-3 py-4 overflow-y-auto ${isSidebarOpen ? 'border-r border-gray-200 bg-gray-100' : ''} `}>
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
                onClick={() => {
                  setSelectedCategory(category.id)
                  setIsSidebarOpen(false) // Close sidebar on category selection
                }}
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
      <main onClick={() => setIsSidebarOpen(false)} className="sm:ml-0 sm:pl-64 transition-all duration-200">
        {renderContent()}
      </main>
    </>
  )
}

export default App

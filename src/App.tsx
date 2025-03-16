import { useState } from 'react'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('dashboard')

  const categories = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'projects', name: 'Projects', icon: '📁' },
    { id: 'tasks', name: 'Tasks', icon: '✓' },
    { id: 'messages', name: 'Messages', icon: '✉️' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ]

  const renderContent = () => {
    switch (selectedCategory) {
      case 'dashboard':
        return <div className="p-6"><h2 className="text-2xl font-bold">Dashboard Content</h2></div>
      case 'projects':
        return <div className="p-6"><h2 className="text-2xl font-bold">Projects Content</h2></div>
      case 'tasks':
        return <div className="p-6"><h2 className="text-2xl font-bold">Tasks Content</h2></div>
      case 'messages':
        return <div className="p-6"><h2 className="text-2xl font-bold">Messages Content</h2></div>
      case 'settings':
        return <div className="p-6"><h2 className="text-2xl font-bold">Settings Content</h2></div>
      default:
        return <div className="p-6"><h2 className="text-2xl font-bold">Select a category</h2></div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">My App</h1>
        </div>
        <nav className="mt-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                selectedCategory === category.id ? 'bg-sky-50 text-sky-700' : 'text-gray-700'
              }`}
            >
              <span className="mr-3">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  )
}

export default App

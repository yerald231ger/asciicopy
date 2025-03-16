import { useState } from 'react'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('dashboard')

  const categories = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'contacts', name: 'Contacts', icon: '👥' },
    { id: 'bills', name: 'Bills', icon: '💰' },
    { id: 'expenses', name: 'Expenses', icon: '📋' },
    { id: 'banking', name: 'Banking', icon: '🏦' },
    { id: 'taxes', name: 'Taxes', icon: '📑' },
    { id: 'accounting', name: 'Accounting', icon: '📊' },
  ]

  const renderContent = () => {
    return (
      <div className="p-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6">Payroll</h2>
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
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray">
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">▚</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">AsciiCopy</h1>
            </div>
          </div>
          <nav className="mt-4 p-3 space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full flex items-center px-4 py-2.5 text-left transition-all duration-200 rounded-lg ${
                  selectedCategory === category.id 
                    ? 'text-blue-600 bg-white shadow-sm font-medium' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm'
                }`}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </nav>
          {/* Company selector at bottom */}
          <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-gray-200">
            <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 bg-transparent hover:bg-[#f5f5f5]">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">▚</span>
              </div>
              <span className="text-sm text-gray-700">Ascii Copy, Inc</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App

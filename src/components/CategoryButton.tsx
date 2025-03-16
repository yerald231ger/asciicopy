interface CategoryButtonProps {
  category: { id: string, name: string, icon: string }
  isSelected: boolean
  onClick: () => void
}

export function CategoryButton({ category, isSelected, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-2.5 text-left transition-all duration-200 rounded-lg transform hover:translate-x-1 hover:-skew-x-1 ${
        isSelected 
          ? 'text-blue-600 bg-white shadow-sm font-medium translate-x-1 -skew-x-1' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm'
      }`}
    >
      <span className="transform hover:skew-x-1">{category.name}</span>
    </button>
  )
}

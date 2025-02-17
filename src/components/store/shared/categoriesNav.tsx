import { useState } from 'react'
import categories, { Category } from '../data/navForItems'

// Adjust import path as needed

const CategoryComponent = ({
  category,
  level = 0,
}: {
  category: Category
  level?: number
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = !!category.children?.length

  return (
    <div>
      <div>
        {hasChildren && (
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '−' : '+'}
          </button>
        )}
        <span style={{ fontWeight: level === 0 ? 'bold' : 'normal' }}>
          {category.name}
        </span>
      </div>

      {isOpen && hasChildren && (
        <div>
          {category.children?.map((child) => (
            <CategoryComponent
              key={child.name}
              category={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const CategoryList = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Product Categories</h1>
      {categories.map((category) => (
        <CategoryComponent key={category.name} category={category} level={0} />
      ))}
    </div>
  )
}

export default CategoryList

import React from 'react'
import { Category, CategoryPillProps } from '@/types'

const CategoryPill: React.FC<CategoryPillProps> = ({ category }) => {
  const categoryStyles: Record<Category | 'Default', string> = {
    Work: 'bg-blue-600 text-blue-100',
    Personal: 'bg-green-600 text-green-100',
    Default: 'bg-gray-600 text-gray-100',
  };

  const style = categoryStyles[category] || categoryStyles.Default;
  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${style}`}>
      {category}
    </span>
  );
}

export default CategoryPill;
import React from 'react';
import { categories, FilterControlsProps } from '@/types';

const FilterControls: React.FC<FilterControlsProps> = ({
  filter,
  setFilter,
}) => {
  return (
    <div className="flex justify-center gap-2 mb-8">
      <button onClick={() => setFilter('All')} className={`px-4 py-2 rounded-md text-sm font-medium transition ${filter === 'All' ? 'bg-indigo-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>All</button>
      {categories.map(cat => (
        <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-md text-sm font-medium transition ${filter === cat ? 'bg-indigo-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>{cat}</button>
      ))}
    </div>
  );
}

export default FilterControls;
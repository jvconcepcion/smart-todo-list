import React from 'react';
import { categories, Category, AddTaskFormProps } from '../types';

const AddTaskForm: React.FC<AddTaskFormProps> = ({
  newTaskText,
  setNewTaskText,
  newTaskCategory,
  setNewTaskCategory,
  handleAddTask,
}) => {

  return (
    <form onSubmit={handleAddTask} className="mb-8 p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow bg-gray-700 border-2 border-gray-600 rounded-md px-4 py-2 text-white focus-input"
      />
      <div className="flex gap-4">
        <select
          value={newTaskCategory}
          onChange={(e) => setNewTaskCategory(e.target.value as Category)}
          className="bg-gray-700 border-2 border-gray-600 rounded-md px-4 py-2 text-white focus-input"
        >
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <button type="submit" className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-700 w-full sm:w-auto focus-btn">
          Add Task
        </button>
      </div>
    </form>
  )
}

export default AddTaskForm;
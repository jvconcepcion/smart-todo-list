import { AddTaskForm, FilterControls } from '@/components';
import { useTodos } from './hooks';

function App() {

  const {
    newTaskText,
    newTaskCategory,
    filter,
    setNewTaskText,
    setNewTaskCategory,
    setFilter,
    handleAddTask,
    filteredTasks,
  } = useTodos();

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center my-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Smart ToDo
          </h1>
          <p className="text-gray-400 mt-2">A Enhanced to-do list, beautifully organized.</p>
        </header>
      </div>

      <AddTaskForm
        newTaskText={newTaskText}
        setNewTaskText={setNewTaskText}
        newTaskCategory={newTaskCategory}
        setNewTaskCategory={setNewTaskCategory}
        handleAddTask={handleAddTask}
      />

      <FilterControls filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default App;

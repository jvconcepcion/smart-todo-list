export const categories = ['Personal', 'Work'] as const;

export type Category = typeof categories[number];

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: Category;
}

export interface CategoryPillProps {
  category: Category;
}

export interface AddTaskFormProps {
  newTaskText: string;
  setNewTaskText: (text: string) => void;
  newTaskCategory: Category;
  setNewTaskCategory: (category: Category) => void;
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface FilterControlsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export interface SortableTaskItemProps {
  task: Task;
  isEditing: boolean;
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
  startEditing: (id: string, currentText: string) => void;
  setEditingTaskText: (id: string, newText: string) => void;
  saveEdit: (id: string) => void;
}

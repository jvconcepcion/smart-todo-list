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
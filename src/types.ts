export const categories = ['Personal', 'Work'] as const;

export type Category = typeof categories[number];

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: Category;
}

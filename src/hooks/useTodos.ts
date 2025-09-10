import { useState, useEffect, useMemo } from 'react';
import { Task, Category } from '@/types';

export default function useTodos() {
  // state management
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState<Category>('Personal');
  const [filter, setFilter] = useState('All');
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  // data persistence
  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0 || localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      text: newTaskText.trim(),
      completed: false,
      category: newTaskCategory,
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
    setNewTaskText('');
  };

    // filtering
  const filteredTasks = useMemo(() => {
    if (filter === 'All') return tasks;
    return tasks.filter(task => task.category === filter);
  }, [tasks, filter]);

  return {
    // derived state
    newTaskText,
    newTaskCategory,
    filter,

    // state setters & handlers
    setNewTaskText,
    setNewTaskCategory,
    setFilter,
    handleAddTask,
    filteredTasks,
  }
}

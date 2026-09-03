type Task = {
    id: number;
    title: string;
    description: string;
    category: string;
    assignee: string;
    priority: 'High' | 'Medium' | 'Low';
    status: TaskStatus;
}

type TaskStatus = 'todo' | 'doing' | 'done';

export type { Task, TaskStatus };
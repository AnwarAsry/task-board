interface ITaskCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    assignee: string;
    priority: 'High' | 'Medium' | 'Low';
    status?: 'todo' | 'doing' | 'done';
}

const priorityConfig = {
    High: { badge: 'border border-red-200 text-red-700 bg-red-100', bar: 'border-l-red-500' },
    Medium: { badge: 'border border-amber-200 text-amber-700 bg-amber-100', bar: 'border-l-amber-400' },
    Low: { badge: 'border border-green-200 text-green-700 bg-green-100', bar: 'border-l-green-500' },
};

export const TaskCard = ({ id, title, description, category, assignee, priority, status }: ITaskCardProps) => {
    const isDone = status === 'done';
    const { badge, bar } = priorityConfig[priority];
    return (
        <article id={id.toString()} className={`p-4 flex flex-col gap-2 border-l-4 border border-gray-300 rounded-lg bg-white ${bar}`}>

            <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 border rounded-full border-indigo-100 text-xs font-medium text-indigo-600 bg-indigo-50">
                    {category}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${badge}`}>
                    {priority}
                </span>
            </div>

            <h3 className={`text-lg font-semibold text-gray-900 ${isDone ? 'line-through text-gray-400!' : ''}`}>
                {title}
            </h3>

            <p className="text-sm text-gray-600 ">{description}</p>

            <p className="mt-1 text-sm text-gray-700">
                <span className="font-medium">Ansvarig:</span> {assignee}
            </p>
        </article>
    );
}
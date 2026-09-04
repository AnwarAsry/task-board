import './App.css'
import { Column } from './components/Column';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm';
import { TaskCard } from './components/TaskCard';
import type { Task } from './types/Task';

const tasks: Task[] = [
	{
		id: 1,
		title: "Some Task",
		description: "Description of the task goes here.",
		category: "Utveckling",
		assignee: "John Doe",
		priority: "High",
		status: "todo"
	},
	{
		id: 2,
		title: "Another Task",
		description: "Description of another task goes here.",
		category: "Design",
		assignee: "Amina Ali",
		priority: "High",
		status: "doing"
	},
	{
		id: 3,
		title: "Yet Another Task",
		description: "Description of yet another task goes here.",
		category: "QA",
		assignee: "Joakim Larsson",
		priority: "Low",
		status: "done"
	},
	{
		id: 4,
		title: "Fourth Task",
		description: "Description of the fourth task goes here.",
		category: "Utveckling",
		assignee: "John Doe",
		priority: "Low",
		status: "todo"
	},
	{
		id: 5,
		title: "Fifth Task",
		description: "Description of the fifth task goes here.",
		category: "Design",
		assignee: "Amina Ali",
		priority: "Medium",
		status: "doing"
	},
	{
		id: 6,
		title: "Sixth Task",
		description: "Description of the sixth task goes here.",
		category: "QA",
		assignee: "Joakim Larsson",
		priority: "High",
		status: "done"
	},
	{
		id: 7,
		title: "Seventh Task",
		description: "Description of the seventh task goes here.",
		category: "Utveckling",
		assignee: "John Doe",
		priority: "Medium",
		status: "todo"
	},
	{
		id: 8,
		title: "Eighth Task",
		description: "Description of the eighth task goes here.",
		category: "Design",
		assignee: "Amina Ali",
		priority: "High",
		status: "doing"
	},
	{
		id: 9,
		title: "Ninth Task",
		description: "Description of the ninth task goes here.",
		category: "QA",
		assignee: "Joakim Larsson",
		priority: "Low",
		status: "done"
	}
];

function App() {
	const todos: Task[] = tasks.filter(task => task.status === "todo");
	const doing: Task[] = tasks.filter(task => task.status === "doing");
	const done: Task[] = tasks.filter(task => task.status === "done");

	return <>
		<Header />
		<main className="max-w-7xl w-full mx-auto px-2 sm:px-4 lg:px-6 py-10 space-y-10">
			<section>
				<NewTaskForm />
			</section>
			<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Column title="Todo">
					{
						todos.map(task => (
							<TaskCard key={task.id} {...task} />
						))
					}
				</Column>
				<Column title="Doing">
					{
						doing.map(task => (
							<TaskCard key={task.id} {...task} />
						))
					}
				</Column>
				<Column title="Done">
					{
						done.map(task => (
							<TaskCard key={task.id} {...task} />
						))
					}
				</Column>
			</section>
		</main>
		<Footer />
	</>;
}

export default App

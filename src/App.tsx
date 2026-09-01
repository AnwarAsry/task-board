import './App.css'
import { Column } from './components/Column';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { TaskCard } from './components/TaskCard';

function App() {
	return <>
		<Header />
		<main>
			<Column title="Todo">
				<TaskCard id={1} title="Some Task" description="Description of the task goes here." category="Utveckling" assignee="John Doe" priority="High" />
			</Column>
			<Column title="Doing">
				<TaskCard id={2} title="Another Task" description="Description of another task goes here." category="Design" assignee="Amina Ali" priority="Medium" />
			</Column>
			<Column title="Done">
				<TaskCard id={3} title="Yet Another Task" description="Description of yet another task goes here." category="QA" assignee="Joakim Larsson" priority="Low" />
			</Column>
		</main>
		<Footer />
	</>;
}

export default App

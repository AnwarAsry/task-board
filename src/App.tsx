import './App.css'
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { TaskCard } from './components/TaskCard';

function App() {
	return <>
		<Header />
		<main>
			<section>
				<TaskCard id={1} title="Some Task" description="Description of the task goes here." category="Utveckling" assignee="John Doe" priority="High" />
				<TaskCard id={2} title="Another Task" description="Description of another task goes here." category="Design" assignee="Amina Ali" priority="Medium" />
				<TaskCard id={3} title="Yet Another Task" description="Description of yet another task goes here." category="QA" assignee="Joakim Larsson" priority="Low" />
			</section>
		</main>
		<Footer />
	</>;
}

export default App

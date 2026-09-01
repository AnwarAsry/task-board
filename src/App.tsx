import './App.css'
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { TaskCard } from './components/TaskCard';

function App() {
	return <>
		<Header />
		<main>
			<section>
				<TaskCard />
			</section>
		</main>
		<Footer />
	</>;
}

export default App

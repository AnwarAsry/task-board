import styles from '../css/header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h3>JUV25S - Utveckling av webbapplikationer</h3>
            <h1>Task Board</h1>
            <p>Min första react-app med vite i kursen. Uppgiften är att skapa en enkel task board-applikation.</p>
        </header>
    );
}
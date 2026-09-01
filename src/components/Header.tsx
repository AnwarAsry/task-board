import styles from '../css/header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h3>JUV25S - Utveckling av webbapplikationer</h3>
            <h1>Task Board</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </header>
    );
}
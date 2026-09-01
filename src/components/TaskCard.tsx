import styles from '../css/taskCard.module.css'

export const TaskCard = () => {
    return (
        <article className={styles.taskcard}>
            <span className={styles.category}>Kategori</span>
            <h3>Task Title</h3>
            <p className={styles.description}>Description of the task goes here.</p>
            <p className={styles.assignedTo}>Assigned to: John Doe</p>
            <p className={styles.priority}>Priority: High</p>
        </article>
    )
}
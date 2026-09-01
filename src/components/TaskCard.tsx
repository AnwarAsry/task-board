import styles from '../css/taskCard.module.css'

interface ITaskCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    assignee: string;
    priority: 'High' | 'Medium' | 'Low';
}

export const TaskCard = ({ id, title, description, category, assignee, priority }: ITaskCardProps) => {
    return (
        <article id={id.toString()} className={styles.taskcard}>
            <span className={styles.category}>{category}</span>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.assignedTo}>Ansvarig: {assignee}</p>
            <p className={styles[priority.toLowerCase()]}>Priority: {priority}</p>
        </article>
    )
}
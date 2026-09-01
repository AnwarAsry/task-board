import styles from '../css/section.module.css'

interface IColumnProps {
    title: string;
    children?: React.ReactNode;
}

export const Column = ({ title, children }: IColumnProps) => {
    return (
        <section className={styles.section}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
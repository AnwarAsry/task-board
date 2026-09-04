interface IColumnProps {
    title: string;
    children?: React.ReactNode;
}

export const Column = ({ title, children }: IColumnProps) => {
    return (
        <section className="min-h-50 p-4 flex flex-col gap-3 rounded-xl">
            <h2 className="text-sm font-semibold text-gray-500 tracking-widest px-1">
                {title.toUpperCase()}
            </h2>
            {children}
        </section>
    );
}
export const Header = () => {
    return (
        <header className="px-2 sm:px-4 lg:px-6 py-10 text-white bg-indigo-500">
            <div className="w-fit mx-auto">
                <h3 className="mb-2 text-sm font-medium text-indigo-100">JUV25S - Utveckling av webbapplikationer</h3>
                <h1 className="mb-3 text-4xl sm:text-5xl font-bold">Task Board</h1>
                <p className="max-w-xl mx-auto text-base">Min första react-app med vite i kursen. Uppgiften är att skapa en enkel task board-applikation.</p>
            </div>
        </header>
    );
}
import { useState } from "react";

const inputClass = `w-full px-3 py-2 border rounded-md border-gray-300 text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition`;
const labelClass = "mb-1 block text-base font-medium text-gray-700";

export const NewTaskForm = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [taskCategory, setTaskCategory] = useState("");
    const [taskAssignee, setTaskAssignee] = useState("");
    const [taskPriority, setTaskPriority] = useState("Medium");

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Task Title:', taskTitle);
        console.log('Task Details:', taskDetails);
        console.log('Task Category:', taskCategory);
        console.log('Task Assignee:', taskAssignee);
        console.log('Task Priority:', taskPriority);

        setTaskTitle("");
        setTaskDetails("");
        setTaskCategory("");
        setTaskAssignee("");
        setTaskPriority("Medium");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-100 w-full mx-auto p-6 rounded-xl border border-gray-200 bg-white space-y-5">
            <div>
                <label htmlFor="taskTitle" className={labelClass}>Task Title:</label>
                <input
                    id="taskTitle"
                    type="text"
                    value={taskTitle}
                    className={inputClass}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="taskDetails" className={labelClass}>Task Details:</label>
                <textarea
                    id="taskDetails"
                    placeholder="Enter task details"
                    value={taskDetails}
                    className={inputClass}
                    onChange={(e) => setTaskDetails(e.target.value)}
                />
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
                <div className="flex-1">
                    <label htmlFor="taskCategory" className={labelClass}>Kategori:</label>
                    <input
                        id="taskCategory"
                        type="text"
                        value={taskCategory}
                        className={inputClass}
                        onChange={(e) => setTaskCategory(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="taskPriority" className={labelClass}>Prioritet:</label>
                    <select id="taskPriority" value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)} className={inputClass}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="taskAssignee" className={labelClass}>Ansvarig:</label>
                <input
                    id="taskAssignee"
                    type="text"
                    value={taskAssignee}
                    className={inputClass}
                    onChange={(e) => setTaskAssignee(e.target.value)}
                />
            </div>
            <button type="submit" className="cursor-pointer px-5 py-2 rounded-md text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150">
                Skapa task
            </button>
        </form>
    );
}
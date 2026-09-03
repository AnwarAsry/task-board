import { expect, test } from "vitest";
import { TaskCard } from "../components/TaskCard";
import { render, screen } from "@testing-library/react";

test("renders the task card component", () => {
    render(<TaskCard id={1} title="Test Task" description="This is a test task." category="Personal" assignee="John Doe" priority="Medium" />);

    expect(screen.getByRole("heading", { name: "Test Task" })).toBeInTheDocument();
    expect(screen.getByText("This is a test task.")).toBeInTheDocument();
    expect(screen.getByText("Personal")).toBeInTheDocument();
    expect(screen.getByText("Ansvarig: John Doe")).toBeInTheDocument();
    expect(screen.getByText("Priority: Medium")).toBeInTheDocument();
});
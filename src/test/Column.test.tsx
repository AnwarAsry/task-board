import { beforeEach, describe, expect, it } from "vitest";
import { Column } from "../components/Column";
import { render, screen } from "@testing-library/react";
import { TaskCard } from "../components/TaskCard";

describe("Column", () => {

    beforeEach(() => render(<Column title="Test Column">
        <TaskCard id={1} title="Test Task" description="This is a test task." category="Personal" assignee="John Doe" priority="Medium" />;
    </Column>));

    it("renders column with correct title", () => {
        expect(screen.getByRole("heading", { name: "Test Column" })).toBeInTheDocument();
    });

    it("renders column with children", () => {
        expect(screen.getByRole("heading", { name: "Test Task" })).toBeInTheDocument();
        expect(screen.getByText("This is a test task.")).toBeInTheDocument();
        expect(screen.getByText("Personal")).toBeInTheDocument();
        expect(screen.getByText("Ansvarig: John Doe")).toBeInTheDocument();
        expect(screen.getByText("Priority: Medium")).toBeInTheDocument();
    });
});
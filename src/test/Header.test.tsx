import { beforeEach, describe, expect, it, test } from "vitest";
import { Header } from "../components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {

    beforeEach(() => render(<Header />));

    test("renders the header component by checking the heading", () => {
        expect(screen.getByRole("heading", { name: "Task Board" })).toBeInTheDocument();
    });

    it("renders the description paragraph", () => {
        expect(screen.getByText("Min första react-app med vite i kursen. Uppgiften är att skapa en enkel task board-applikation.")).toBeInTheDocument();
    });
});
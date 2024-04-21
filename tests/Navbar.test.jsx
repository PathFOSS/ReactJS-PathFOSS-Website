
import { describe, expect } from "vitest";
import Navbar from "../src/components/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
    test("should render title and images", () => {
        render(<Navbar/>);
        expect(screen.getByText(/PathFOSS/i));
        expect(screen.getByText(/Portfolio/i));
        expect(screen.getAllByRole("img"));
    });
});
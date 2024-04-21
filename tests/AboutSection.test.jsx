
import { describe, expect } from "vitest";
import AboutSection from "../src/components/AboutSection";
import { render, screen } from "@testing-library/react";

describe("AboutSection", () => {
    test("should render title, text, and icon", () => {
        render(<AboutSection/>);
        expect(screen.getByText(/About PathFOSS/i));
        expect(screen.getByText(/My name is Patrick/i));
        expect(screen.getByText(/info@pathfoss.com/i));
        expect(screen.getByRole("img"));
    });
});
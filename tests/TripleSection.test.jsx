
import { describe, expect } from "vitest";
import TripleSection from "../src/components/TripleSection";
import { render, screen } from "@testing-library/react";

describe("TripleSection", () => {
    test("should render all images and titles, ", () => {
        render(<TripleSection/>);
        expect(screen.getAllByText(/Freedom/i));
        expect(screen.getAllByText(/Privacy/i));
        expect(screen.getAllByText(/Minimalism/i));
        expect(screen.getAllByRole("img"));
    });
});
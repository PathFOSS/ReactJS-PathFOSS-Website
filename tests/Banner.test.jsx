
import { describe, expect } from "vitest";
import Banner from "../src/components/Banner";
import { render, screen } from "@testing-library/react";

describe("Banner", () => {
    test("should render title, text, and images", () => {
        render(<Banner/>);
        expect(screen.getByText(/Free and Open Source/i));
        expect(screen.getByText(/Coding for positive impact/i));
        expect(screen.getByText(/Sensible solutions for self-improvement and finance/i));
        expect(screen.getAllByRole("img"));
    });
});
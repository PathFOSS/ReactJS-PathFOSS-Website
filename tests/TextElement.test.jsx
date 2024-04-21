
import { describe, expect } from "vitest";
import TextElement from "../src/components/TextElement";
import { render, screen } from "@testing-library/react";

describe("TextElement", () => {
    test("should render title, text, and image based on props passed", () => {
        render(<TextElement image="" title="title" text="text"/>);
        expect(screen.getByText(/title/i));
        expect(screen.getByText(/text/i));
        expect(screen.getByRole("img"));
    });
});
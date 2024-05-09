
import { describe, expect } from "vitest";
import Footer from "../src/components/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
    test("should render titles, texts, and links", () => {
        render(<Footer/>);
        expect(screen.getAllByText(/PathFOSS/i));
        expect(screen.getByText(/Sensible tech solutions since 2023/i));
        expect(screen.getByText(/PathFOSS.com | GPLv3 Licensed Website/i));
        expect(screen.getByText(/Browse/i));
        expect(screen.getByText(/GitHub/i));
        expect(screen.getByText(/Email/i));
        expect(screen.getAllByRole("link"));
    });
});
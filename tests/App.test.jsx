
import { describe, expect } from "vitest";
import App from "../src/App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
    test("should render all page components", () => {
        render(<App/>);
        expect(screen.getByText(/Portfolio/i));
        expect(screen.getByText(/Coding for positive impact/i));
        expect(screen.getByText(/Made for you with passion and perseverance/i));
        expect(screen.getByText(/About PathFOSS/i));
        expect(screen.getByText(/PathFOSS.com | GPLv3 Licensed Website/i));
    });
});
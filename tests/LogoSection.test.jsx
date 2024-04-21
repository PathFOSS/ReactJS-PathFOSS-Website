
import { describe, expect } from "vitest";
import LogoSection from "../src/components/LogoSection";
import { render, screen } from "@testing-library/react";

describe("LogoSection", () => {
    test("should render both divs", () => {
        render(<LogoSection/>);
        expect(screen.getAllByRole("generic"));
    });
});
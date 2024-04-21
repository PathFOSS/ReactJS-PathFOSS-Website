
import { describe, expect } from "vitest";
import LogoSlider from "../src/components/LogoSlider";
import { render, screen } from "@testing-library/react";

describe("LogoSlider", () => {
    test("should render both divs", () => {
        render(<LogoSlider/>);
        expect(screen.getAllByRole("generic"));
    });
});
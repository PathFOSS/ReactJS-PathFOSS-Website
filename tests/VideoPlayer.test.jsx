
import { describe, expect } from "vitest";
import VideoPlayer from "../src/components/VideoPlayer";
import { render, screen } from "@testing-library/react";

describe("VideoPlayer", () => {
    test("should render all divs, ", () => {
        render(<VideoPlayer/>);
        expect(screen.getAllByRole("generic"));
    });
});
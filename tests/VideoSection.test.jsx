
import { describe, expect } from "vitest";
import VideoSection from "../src/components/VideoSection";
import { render, screen } from "@testing-library/react";

describe("VideoSection", () => {
    test("should render title, text, divs, and links when video is right-aligned, ", () => {

        render(<VideoSection 
            title="title"
            video=""
            textfirst={false}
            github="github"
            website="website"
            languages="languages"
            text="text"
        />);

        expect(screen.getAllByRole("generic"));
        expect(screen.getAllByRole("button"));
        expect(screen.getAllByRole("link"));
        expect(screen.getByText(/title/i));
        expect(screen.getByText(/text/i));
        expect(screen.getByText(/GitHub/i));
        expect(screen.getByText(/Visit Site/i));
        expect(screen.getByText(/languages/i));
    });

    test("should render title, text, divs, and links when video is left-aligned, ", () => {
        
        render(<VideoSection 
            title="title"
            video=""
            textfirst={true}
            github="github"
            website="website"
            languages="languages"
            text="text"
        />);

        expect(screen.getAllByRole("generic"));
        expect(screen.getAllByRole("button"));
        expect(screen.getAllByRole("link"));
        expect(screen.getByText(/title/i));
        expect(screen.getByText(/text/i));
        expect(screen.getByText(/GitHub/i));
        expect(screen.getByText(/Visit Site/i));
        expect(screen.getByText(/languages/i));
    });
});
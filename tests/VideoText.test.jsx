
import { describe, expect } from "vitest";
import VideoText from "../src/components/VideoText";
import { render, screen } from "@testing-library/react";

describe("VideoText", () => {

    test("should render title, languages, text, and links with 'Visit Site' ", () => {
        render(<VideoText 
            title="title"
            github="github"
            download=""
            website="website"
            languages="languages"
            text="text"
        />);
        expect(screen.getAllByRole("button"));
        expect(screen.getAllByRole("link"));
        expect(screen.getByText(/title/i));
        expect(screen.getByText(/text/i));
        expect(screen.getByText(/GitHub/i));
        expect(screen.getByText(/Visit Site/i));
        expect(screen.getByText(/languages/i));
    });

    test("should render title, languages, text, and links with 'Download APK' ", () => {
        render(<VideoText 
            title="title"
            github="github"
            download="download"
            website="website"
            languages="languages"
            text="text"
        />);
        expect(screen.getAllByRole("button"));
        expect(screen.getAllByRole("link"));
        expect(screen.getByText(/title/i));
        expect(screen.getByText(/text/i));
        expect(screen.getByText(/GitHub/i));
        expect(screen.getByText(/Download APK/i));
        expect(screen.getByText(/languages/i));
    });
});
import CreateEventPage from "./CreateEventPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("renders AddEventForm", () => {
    render(
        <BrowserRouter>
        <CreateEventPage />
        </BrowserRouter>
    );
    const linkElement = screen.getByPlaceholderText('Title of Event');
    expect(linkElement).toBeInTheDocument();
    });
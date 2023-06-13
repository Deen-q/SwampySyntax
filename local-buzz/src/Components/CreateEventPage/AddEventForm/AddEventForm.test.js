import AddEventForm from "./AddEventForm";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("renders AddEventForm component", () => {
    render(
    <BrowserRouter>
        <AddEventForm />
    </BrowserRouter>);
    const linkElement = screen.getByPlaceholderText('Title of Event');
    expect(linkElement).toBeInTheDocument();
    });

// test('when submit button is clicked, handleSubmit function is called', () => {
//     const handleSubmit = jest.fn();
//     const addNewEvent = jest.fn();
//     render(
//     <BrowserRouter>
//     {/*the code below creates a mock function for the handleSubmit and the addNewEvent (using jest.fn)*/}
//     <AddEventForm handleSubmit={handleSubmit} addNewEvent={addNewEvent}/>
//     {/*handleSubmit and addNewEvent are being passed as props*/}
//     </BrowserRouter>);
//     fireEvent.click(screen.getByDisplayValue('Submit'));
//     expect(handleSubmit).toHaveBeenCalledTimes(1);
//     expect(addNewEvent).toHaveBeenCalledTimes(1);
//     });

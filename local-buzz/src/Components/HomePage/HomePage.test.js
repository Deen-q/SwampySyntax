import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import {render, screen} from "@testing-library/react";


//test that the CreateEventBtn is rendered
test('tests the CreateEventBtn is being rendered',() => {
render (
<BrowserRouter> 
<HomePage/>
</BrowserRouter>);

const CreateEventBtn = screen.getByText(/Create Event/i);

expect(CreateEventBtn).toBeInTheDocument();
});

// Below: required in the EventCard.js for the test to pass!
// '?' is 'Optional Chaining' bypasses the error from undefined. It is still undefined, however.

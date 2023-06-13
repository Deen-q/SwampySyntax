import AddEventForm from "./AddEventForm";
import { render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("renders AddEventForm component", () => {
  render(
    <BrowserRouter>
      <AddEventForm />
    </BrowserRouter>
  );
  const linkElement = screen.getByPlaceholderText("Title of Event");
  expect(linkElement).toBeInTheDocument();
});

// test("when submit button is clicked, handleSubmit function is called", () => {
//   const handleSubmit = jest.fn();
//   const addNewEvent = jest.fn();
//   render(
//     <BrowserRouter>
//       <AddEventForm handleSubmit={handleSubmit} addNewEvent={addNewEvent} />
//     </BrowserRouter>
//   );

//   const submitButton = screen.getByRole("button", { name: "Submit" });
//   fireEvent.click(submitButton);

//   expect(handleSubmit).toHaveBeenCalledTimes(1);
//   expect(addNewEvent).toHaveBeenCalledTimes(1);
// });

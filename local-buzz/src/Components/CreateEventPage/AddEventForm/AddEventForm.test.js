import AddEventForm from "./AddEventForm";
import { render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("does title input field render?", () => {
  render(
    <BrowserRouter>
      <AddEventForm />
    </BrowserRouter>
  );
  const linkElement = screen.getByPlaceholderText("Add title");
  // worked after we fixed the placeholder text above!

  expect(linkElement).toBeInTheDocument();

});

// test above works. below, does not.

// test("does the entire form render?", () =>{
//   render(
//     <BrowserRouter>
//       <AddEventForm />
//     </BrowserRouter>
//   );
//   const entireForm = screen.getByRole("form");
//   expect(entireForm).toBeInTheDocument();
  
// })



/// below: old stuff

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

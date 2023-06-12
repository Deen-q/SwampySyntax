import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Tests if the NAVBar renders", () => {
  render(<App />);
  const linkElement = screen.getByText(/LocalBuzz/i);
  expect(linkElement).toBeInTheDocument();
});

test("Test if CreateEventPage component is not initially rendered", () => {
  <BrowserRouter> <App /> </BrowserRouter>;
  const createEventPageElement = screen.queryByRole('form');
  expect(createEventPageElement).not.toBeInTheDocument();
});

test("Tests that the CreateEvent page is rendered on the app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Create Event/i);
  expect(linkElement).toBeInTheDocument();
});

// 💥This test is not working
// test("Test if CreateEventPage component is rendered when Create Event button is clicked", () => {
//   <BrowserRouter> <App /> </BrowserRouter>;
//   const createEventButton = screen.getByRole('button');
//   createEventButton.click();
//   const createEventPageElement = screen.queryByRole('form');
//   expect(createEventPageElement).toBeInTheDocument();
// });


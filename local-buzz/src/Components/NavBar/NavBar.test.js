// npm run test -- -t '/thePath'
import NavBar from "./NavBar";
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test("is logo and search bar rendered?", () => {
  render(
  <BrowserRouter>
  <NavBar />
  </BrowserRouter>);
  
  const logoElement = screen.getByText(/LocalBuzz/i);
  const searchBarElement = screen.getByAltText(/Search Icon/);
  
  expect(logoElement).toBeInTheDocument();
  expect(searchBarElement).toBeInTheDocument();
});

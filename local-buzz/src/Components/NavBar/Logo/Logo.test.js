import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './Logo';

test ("Does the logo appear?", () => {
    render(
      <BrowserRouter>
        <Logo/>
      </BrowserRouter>
    );
    const logoElement = screen.getByText(/LocalBuzz/i);
    expect(logoElement).toBeInTheDocument();
});
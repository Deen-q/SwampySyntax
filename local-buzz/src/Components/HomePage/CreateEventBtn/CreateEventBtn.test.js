import CreateEventBtn from './CreateEventBtn';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('renders CreateEventBtn component', () => {
    render(
        <BrowserRouter>
            <CreateEventBtn />
        </BrowserRouter>
    );
    const linkElement = screen.getByText('Create Event +');
    expect(linkElement).toBeInTheDocument();
});
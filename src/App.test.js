import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from 'App';

test('renders without crashing', () => {
    const { getByText } = render(<App />);
    const title = getByText(/Neogiphy/i);
    expect(title).toBeInTheDocument();
});

test('home render as expected', async () => {
    render(<App />);

    const lastSearchTitle = await screen.findByText('Your last search was for');
    expect(lastSearchTitle).toBeVisible();
});

test('search works as expected', async () => {
    render(<App />);

    // Get the elements to make the gifs search
    const searchInput = await screen.findByRole('textbox');
    const button = await screen.findByRole('button');
    
    // Fire the search event.
    fireEvent.change(searchInput, { target: { value: 'coffee' } });
    fireEvent.click(button);

    // The keyword must be on the DOM.
    const title = await screen.findByText('coffee');
    expect(title).toBeVisible();
});

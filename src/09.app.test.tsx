import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './07.app';

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);

    await screen.findByText(/Signed in as/);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(
      await screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
  });
});

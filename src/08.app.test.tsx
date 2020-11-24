import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import App from './07.app';

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);

    await screen.findByText(/Signed in as/);

    screen.debug();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(
      await screen.findByText(/Searches for JavaScript/)
    ).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import App from './07.app';

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    screen.debug();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

    screen.debug();
  });
});

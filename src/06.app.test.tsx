import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import App from './04.app';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    return expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});

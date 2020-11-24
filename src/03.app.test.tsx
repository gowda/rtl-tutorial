import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './03.app';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    return screen.debug();
  });
});

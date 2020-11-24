import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Search from './07.search';

describe('Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn();

    render(
      <Search value='' onChange={onChange}>
        Search:
      </Search>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

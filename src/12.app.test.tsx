import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './12.app';

jest.mock('axios');
const mockedAxios: jest.Mocked<typeof axios> = axios as any;

describe('App', () => {
  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<App />);

    await userEvent.click(await screen.findByRole('button'));

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(2);
  });

  test('fetches stories from an API and fails', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    const message = await screen.findByText(/Something went wrong/);

    expect(message).toBeInTheDocument();
  });
});

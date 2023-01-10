import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Page404 } from ".";

const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<typeof import('react-router-dom')>('react-router-dom')),
  useNavigate: () => mockedUseNavigate,
}));

test('can be rendered', () => {
  render(<Page404 />);
});

test('has a clickable component to go back', async () => {
  render(<Page404 />);
  const component = screen.getByTestId('go-back');
  await userEvent.click(component);
  expect(mockedUseNavigate).toHaveBeenCalledWith(-1);
});

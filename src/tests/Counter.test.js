import { fireEvent, render, screen } from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const count = screen.getByText(/1/i);
  expect(count).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const count = screen.getByText(/-1/i);
  expect(count).toBeInTheDocument();
});

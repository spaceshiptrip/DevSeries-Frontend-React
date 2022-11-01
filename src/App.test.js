import { render, screen } from '@testing-library/react';
import App from './App';

test('renders employee information link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Employee Information Table/i);
  expect(linkElement).toBeInTheDocument();
});

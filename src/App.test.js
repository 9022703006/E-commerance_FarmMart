import { render, screen } from '@testing-library/react';
import App from './App';
import Animals from './Pages/Home_Pages/View_animals/Animals';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

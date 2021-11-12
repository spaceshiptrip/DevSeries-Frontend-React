import { render, screen} from '@testing-library/react'

import App from './App.js';
import testJson from './components/LocalPosts/local.json'


// test('check local json equality',() => {
//     expect(App.getLocalJson()).toBe(testJson);
// })

test('renders table', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello, React/i);
  expect (textElement).toBeInTheDocument();
})


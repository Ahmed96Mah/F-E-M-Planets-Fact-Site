import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 element', (): void => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const mainHeader = screen.getByText('THE PLANETS', {selector: 'h1'});
  expect(mainHeader).toBeInTheDocument();
});

test('renders menu image', (): void => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const menuImg = screen.getAllByAltText('menu');
  expect(menuImg[0]).toBeInTheDocument();
});

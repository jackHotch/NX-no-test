import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from './page';

describe('About', () => {
  it('should render about page', () => {
    render(<About />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});

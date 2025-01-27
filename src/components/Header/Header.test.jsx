import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { PageContainer } from '../PageContainer/PageContainer';
import { BrowserRouter } from 'react-router-dom';

describe('Header tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PageContainer />
      </BrowserRouter>
    );
  });
  it('Header is rendered', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
  it('Header has an image of the brand logo with the alt text: "Trendy Threads Logo"', () => {
    expect(screen.getByAltText(/trendy threads logo/i)).toBeInTheDocument();
  });
  it('Header contains a navbar element', () => {
    const navbar = screen.getByRole('navigation');
    expect(screen.getByRole('banner')).toContainElement(navbar);
  });
});

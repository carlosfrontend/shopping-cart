import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { PageContainer } from '../PageContainer/PageContainer';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PageContainer />
      </BrowserRouter>
    );
  });
  it('Navbar element contains a list of items', () => {
    const navbar = screen.getByRole('navigation');
    const list = screen.getByRole('list');
    expect(navbar).toContainElement(list);
  });

  it('There are a link with the text "Home"', () => {
    expect(
      screen.getByRole('link', {
        name: /home/i
      }).textContent
    ).matches(/home/i);
  });

  it('There are a link with the text "Shop"', () => {
    expect(
      screen.getByRole('link', {
        name: /shop/i
      }).textContent
    ).matches(/shop/i);
  });

  it('There is a link with an svg image of a shopping cart and the title "Shopping Cart"', () => {
    const cartLink = screen.getByRole('link', { name: /0/i });
    const cartLogo = screen.getByTestId('cart-logo');

    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toContainElement(cartLogo);
    expect(
      screen
        .getByRole('link', {
          name: /0/i
        })
        .getAttribute('title')
    ).matches(/shopping cart/i);
  });
});

import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { HomePage } from './HomePage';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  it('renders an h1 tag with the text "Welcome our store!"', () => {
    expect(
      screen.getByRole('heading', { name: /welcome our store!/i }).textContent
    ).toMatch(/welcome our store!/i);
  });

  it('renders the subtitle "Lots of new items are waiting for you"', () => {
    const subtitle = screen.getByRole('heading', {
      name: /lots of new items are waiting for you/i
    });

    expect(subtitle.textContent).matches(
      /lots of new items are waiting for you/i
    );
  });

  it('renders a link whith the text "Go to shop"', () => {
    expect(
      screen.getByRole('link', {
        name: /go to shop/i
      }).textContent
    ).toEqual('Go to shop');
  });

  it('renders an article tag that contains four images', () => {
    expect(screen.getByRole('article')).toBeInTheDocument();

    expect(screen.getByAltText(/some sneakers/i).getAttribute('alt')).toMatch(
      /some sneakers/i
    );

    expect(
      screen.getByAltText(/a bottle of perfume/i).getAttribute('alt')
    ).matches(/a bottle of perfume/i);

    expect(
      screen.getByAltText(/a girl in a sweatshirt\./i).getAttribute('alt')
    ).toEqual('A girl in a sweatshirt.');
    
    expect(
      screen.getByRole('img', {
        name: /a hand holding a smartphone and its case\./i
      })
    ).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { ShoppingPage } from '../ShoppingPage/ShoppingPage';
import { BrowserRouter } from 'react-router-dom';

describe('Shopping Page tests', () => {
  const cartContext = {};

  cartContext.cartItemsNumber = 0;
  render(
    <BrowserRouter>
      <ShoppingPage />
    </BrowserRouter>
  );

  it('render something', () => {});
});

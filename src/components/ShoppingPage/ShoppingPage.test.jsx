import { render, screen, waitFor } from '@testing-library/react';
import { ShoppingPage } from './ShoppingPage';  // Asumiendo que este es el nombre del archivo
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useProducts } from '../../hooks/useProducts';
import { useOutletContext } from 'react-router-dom';


vi.mock('../../hooks/useProducts');
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useOutletContext: vi.fn(),
}));

describe('ShoppingPage tests', () => {
    const mockCartContext = {
        cartItemsNumber: 0,
        setCartItemsNumber: vi.fn(),
        store: [],
        setStore: vi.fn(),
      };
    
      beforeEach(() => {
        useOutletContext.mockReturnValue(mockCartContext);
      });
      it('should render loading state when data is loading', () => {
        
        useProducts.mockReturnValue({
          products: [],
          loading: true,
          error: null,
        });
    
        render(<ShoppingPage />);
        const loading = screen.getByText('Loading ...')
        expect(loading).toBeInTheDocument();
      });

      it('should render error state when there is an error', () => {
        useProducts.mockReturnValue({
            products: [],
            loading: false,
            error: 'Network error' ,
          });
        render(<ShoppingPage/>)
     expect(screen.getByText('A network error was encountered')).toBeInTheDocument()
      })
      it('should render the products when data is available', async () => {
        const mockProducts = [
          { id: 1, title: 'Product 1', price: 100 },
          { id: 2, title: 'Product 2', price: 200 },
        ];
        
        useProducts.mockReturnValue({
          products: mockProducts,
          loading: false,
          error: null,
        });
    
        render(<ShoppingPage />);
        expect(screen.getByText('Shopping page')).toBeInTheDocument();
        await waitFor(() => {
          expect(screen.getByText('Product 1')).toBeInTheDocument();
          expect(screen.getByText('Product 2')).toBeInTheDocument();
        });
      });
})

import { useEffect, useState } from 'react';
import { getProductsAndUpdateStates } from '../services/getProductsAndUpdateStates';

export const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    () => getProductsAndUpdateStates({ setProducts, setLoading, setError }),
    []
  );

  return { products, loading, error };
};

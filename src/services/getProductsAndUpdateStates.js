import { getProducts } from './getProducts';

export const getProductsAndUpdateStates = ({
  setProducts,
  setLoading,
  setError
}) => {
  getProducts()
    .then((res) => {
      setError(null);
      if (res.status >= 400) {
        throw new Error('Server error');
      }

      return res.json();
    })
    .then((res) => setProducts(res))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
};

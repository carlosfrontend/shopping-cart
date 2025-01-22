export const getProducts = async () => {
  return fetch(import.meta.env.VITE_PRODUCTS_ENDPOINT);
};

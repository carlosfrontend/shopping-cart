import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products`, {
        mode: "cors",
      })
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("server error");
          }

          return res.json();
        })
        .then((res) => {
          setData(res);
          setTitle("All our products");
        })
        .catch((error) => setError(error))
        .finally(setLoading(false));
    }, []);

    return { data, error, loading, title };
  };

  const { data, error, loading, title } = useData();

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <ErrorPage />;
  } else {
    return (
      <div className={styles.productsContainer}>
        <h1 className={styles.title}>{title}</h1>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
};

export default ShopPage;

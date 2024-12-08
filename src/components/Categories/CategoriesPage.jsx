import { useParams } from "react-router-dom";
import styles from "./CategoriesPage.module.css";
import { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";

const CategoriesPage = () => {
  const { name } = useParams();

  const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${name}`, {
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
          setTitle(res[0].category.toUpperCase());
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
      <div className={styles.categoriesContainer}>
        <h1 className={styles.title}>{title}</h1>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
};

export default CategoriesPage;

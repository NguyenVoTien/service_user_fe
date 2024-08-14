import React from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  const revalidator = useRevalidator();

  React.useEffect(() => {
    const interval = setInterval(() => {
      revalidator.revalidate();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (revalidator.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return <h1>Products</h1>;
};

export default Products;

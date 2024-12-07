import React from "react";
import Product from "./Product";

const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div className="mt-[20px] md:mx-[60px] flex flex-wrap ">
      {products
        ? products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        : "Loading..."}
    </div>
  );
};

export default ProductsList;

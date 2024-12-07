import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductCategories } from "../redux/slice/categorySlice";
import ProductsList from "./ProductsList";
import { fetchProducts } from "../redux/slice/productSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(fetchProductCategories());
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);

  return (
    <div>
      <h1>Product Categories</h1>
      <div className="flex justify-around ">
        {categories
          ? categories.map((category, id) => {
              return (
                <p
                  key={id}
                  className="p-[5px] capitalize border-b-4 border-indigo-500 hover:scale-105"
                >
                  {category}
                </p>
              );
            })
          : "Loading categories..."}
      </div>
      {products ? <ProductsList products={products} /> : "Loading products..."}
    </div>
  );
};

export default Homepage;

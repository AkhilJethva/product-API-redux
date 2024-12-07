import React from "react";

const Product = ({ product }) => {
  return (
    <div className="h-[350px] w-[300px] p-[10px] m-[20px] rounded-[10px] bg-[#f2f2f2] flex flex-col justify-evenly items-center">
      <h3 className="line-clamp-2">{product.title}</h3>
      <img
        className="rounded-[5px] w-[150px] h-[150px] mt-[5px] mix-blend-darken"
        src={product.image}
      />
      <p className="hidden text-xs mt-[5px] line-clamp-3">
        {product.description}
      </p>
      <button className="bg-orange-300 w-full h-[40px] mt-[5px] hover:invert">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

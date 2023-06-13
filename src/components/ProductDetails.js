import React, { useEffect } from "react";


const ProductDetails = () => {


  return (
    <div>
      <div className="product-main">
        <img
          className="product-img"
          src="https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/01cd0948-c40f-4ccf-a66a-6478710b361d/image.jpg"
        ></img>
        <div>
          <h1 style={{ color: "black" }}>Name</h1>
          <h3>brand</h3>
          <h2>3</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from "react";

function Products({
  product,
  productImg,
  description,
  price,
  discountPrice,
  percentage,
  stock,
  handleAddToCart,
}) {
  return (
    <>
      <div className="">
        <div className="productBox">
          <div className="productImg">
            <img src={productImg} alt={product} />
          </div>
          <h3>{product}</h3>
          <h4>{description}</h4>
          <h2>Ugx. {price}</h2>
          <div className="discountPrice">
            <strike>Ugx. {discountPrice}</strike>
            <p>{percentage}</p>
          </div>

          {stock !== "Out Of Stock" && stock !== "" && (
            <div className="stock" id="stock">
              <p>{stock}</p>
            </div>
          )}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Products;

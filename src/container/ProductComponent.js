import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div class="col-md-4" key={id}>
        <Link to={`/product/${id}`}>
          <div class="card" style={{ width: "20rem" }}>
            <div class="card-body">
              <img
                class="card-img-top"
                src={image}
                style={{ height: "300px" }}
                alt=""
              />
            </div>
            <div class="card-footer">
              <p>{title}</p>
              <p>{price}</p>
              <p>{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div class="container">
        <div class="row">{renderList}</div>
      </div>
    </>
  );
};
export default ProductComponent;

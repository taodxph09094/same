import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      {/* <Link to={`/product/${product._id}`}> */}
      <div className="product__item">
        <div
          className="product__item__pic set-bg"
          // data-setbg="img/product/product-1.jpg"
          style={{
            backgroundImage: `url(${product.images[0].url})`,
          }}
        >
          <ul className="product__item__pic__hover">
            <li>
              <a href="#">
                <i className="fa fa-heart" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-cart" />
              </a>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h6>
          <h5>{`${product.price}`}</h5>
          <Rating {...options} />
          <h5>({product.numOfReviews} Đánh giá)</h5>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ProductCard;

import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../pages/Home/ProductCard";
const NewProduct = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Sản phẩm mới</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".oranges">Oranges</li>
                <li data-filter=".fresh-meat">Fresh Meat</li>
                <li data-filter=".vegetables">Vegetables</li>
                <li data-filter=".fastfood">Fastfood</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          {/* <div className="col-lg-3 col-md-4 col-sm-6  ">
            <div className="featured__item">
              <div
                className="featured__item__pic set-bg"
                style={{
                  backgroundImage: `url("img/featured/feature-1.jpg")`,
                }}
                data-setbg="img/featured/feature-1.jpg"
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-retweet" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default NewProduct;

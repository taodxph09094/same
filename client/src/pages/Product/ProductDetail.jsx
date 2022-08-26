import React, { Fragment, useEffect, useState } from "react";
import Menu from "../../components/header/Menu";
import Loader from "../../components/Loader/Loader";
import ProductDesc from "./ProductDesc";
import Carousel from "react-material-ui-carousel";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import { useParams } from "react-router-dom";
import Review from "./Review";
import { useAlert } from "react-alert";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { addItemsToCart } from "../../actions/cartAction";
import ProductInfo from "./ProductInfo";
import "./style.css";
const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const options = {
    // size: "large",
    value: product?.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Đã thêm sách vào giỏ");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Đánh giá thành công");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, reviewError, success]);

  return (
    <>
      {/* <Loader /> */}

      <Menu />
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  {product?.images &&
                    product?.images.map((item, i) => (
                      <img
                        className="product__details__pic__item--large"
                        key={i}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <Rating
                  name="hover-feedback"
                  value={product?.ratings}
                  precision={0.5}
                />
                <span className="detailsBlock-2-span">
                  ({product?.numOfReviews} Đánh giá)
                </span>
                <h3>{product?.name}</h3>
                <div className="product__details__price">
                  {product?.price} đ
                </div>

                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <div className="detailsBlock-3-1-1">
                        <button onClick={decreaseQuantity}>-</button>
                        <input readOnly type="number" value={quantity} />
                        <button onClick={increaseQuantity}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="primary-btn"
                  disabled={product?.Stock < 1 ? true : false}
                  onClick={addToCartHandler}
                >
                  Thêm vào giỏ
                </button>
                <a href="#" className="heart-icon">
                  <span className="icon_heart_alt" />
                </a>
                <button className="primary-btn" onClick={submitReviewToggle}>
                  Bình luận ( đánh giá )
                </button>
                <Dialog
                  aria-labelledby="simple-dialog-title"
                  open={open}
                  onClose={submitReviewToggle}
                >
                  <DialogTitle>Xác nhận</DialogTitle>
                  <DialogContent className="submitDialog">
                    <Rating
                      onChange={(e) => setRating(e.target.value)}
                      value={rating}
                      size="large"
                    />

                    <textarea
                      className="submitDialogTextArea"
                      cols="30"
                      rows="2"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={submitReviewToggle} color="secondary">
                      Hủy
                    </Button>
                    <Button onClick={reviewSubmitHandler} color="primary">
                      Xác nhận
                    </Button>
                  </DialogActions>
                </Dialog>
                <ul>
                  <li>
                    <b>Availability</b> <span>In Stock</span>
                  </li>
                  <li>
                    <b>Shipping</b>{" "}
                    <span>
                      01 day shipping. <samp>Free pickup today</samp>
                    </span>
                  </li>
                  <li>
                    <b>Weight</b> <span>0.5 kg</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Mô tả sản phẩm
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Cấu hình chi tiết
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      Đánh giá <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    {/* <ProductDesc />  */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${product.description}`,
                      }}
                    ></div>
                  </div>
                  <div className="tab-pane " id="tabs-2" role="tabpanel">
                    {/* <ProductInfo /> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${product.info}`,
                      }}
                    ></div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    {/* <ProductReview /> */}
                    {product.reviews && product.reviews[0] ? (
                      <div className="reviews">
                        {product.reviews &&
                          product.reviews.map((review) => (
                            <Review key={review._id} review={review} />
                          ))}
                      </div>
                    ) : (
                      <p className="noReviews">Không có đánh giá</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

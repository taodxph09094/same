import React, { Fragment } from "react";
import Menu from "../../components/header/Menu";
import Loader from "../../components/Loader/Loader";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import "./cart.css";
const Cart = ({ history }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };
  return (
    <>
      <Loader />
      <Menu />
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
        style={{
          backgroundImage: `url("img/breadcrumb.jpg")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Shopping Cart</h2>
                <div className="breadcrumb__option">
                  <a href="/">Home</a>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>Không có sản phẩm nào trong giỏ hàng</Typography>
          <Link to="/products">Xem các sản phẩm khác</Link>
        </div>
      ) : (
        <section className="shoping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__table">
                  <div className="cartHeader">
                    <p>Thông tin </p>
                    <p>Số lượng</p>
                    <p>Tổng tiền</p>
                  </div>

                  {cartItems &&
                    cartItems.map((item) => (
                      <div className="cartContainer" key={item.product}>
                        <CartItem
                          item={item}
                          deleteCartItems={deleteCartItems}
                        />
                        <div className="cartInput">
                          <button
                            onClick={() =>
                              decreaseQuantity(item.product, item.quantity)
                            }
                          >
                            -
                          </button>
                          <p class="quantityItem" style={{ margin: "10px" }}>
                            {item.quantity}{" "}
                          </p>
                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.product,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <p className="cartSubtotal">{`${
                          item.price * item.quantity
                        }`}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__btns">
                  <a href="/products" className="primary-btn cart-btn">
                    CONTINUE SHOPPING
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__continue">
                  <div className="shoping__discount">
                    <h5>Discount Codes</h5>
                    <form action="#">
                      <input type="text" placeholder="Enter your coupon code" />
                      <button type="submit" className="site-btn">
                        APPLY COUPON
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__checkout">
                  <h5>Cart Total</h5>
                  <ul>
                    <li>
                      Subtotal <span>$454.98</span>
                    </li>
                    <li>
                      Total <span>$454.98</span>
                    </li>
                  </ul>
                  <a href="#" className="primary-btn">
                    PROCEED TO CHECKOUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;

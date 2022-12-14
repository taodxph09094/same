import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
const Menu = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <a href="/">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                <li className="active">
                  <a href="/">Trang chủ</a>
                </li>
                <li>
                  <a href="./shop-grid.html">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Kiểm tra đơn </a>
                </li>
                <li>
                  <a href="./contact">Liên hệ</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-heart" /> <span>1</span>
                  </a>
                </li>
                <li>
                  <a href="/cart">
                    <i className="fa fa-shopping-bag" />{" "}
                    <span>{cartItems.length}</span>
                  </a>
                </li>
              </ul>
              <div className="header__cart__price">
                Tổng tiền: <span>$150.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="humberger__open">
          <i className="fa fa-bars" />
        </div>
      </div>
    </>
  );
};

export default Menu;

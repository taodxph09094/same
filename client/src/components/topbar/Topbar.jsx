import React from "react";

const Topbar = () => {
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="header__top__left">
                <ul>
                  <li>
                    <i className="fa fa-envelope" /> hello@gmail.com
                  </li>
                  <li>Miễn phí ship với đơn hàng từ $99</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="header__top__right">
                <div className="header__top__right__social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </div>
                <div className="header__top__right__auth">
                  <a href="#">
                    <i className="fa fa-user" /> Đăng nhập
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

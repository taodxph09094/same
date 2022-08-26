import React from "react";
import Banner from "../Banner/Banner";
import Search from "../Search/Search";

const Sidebar = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars" />
                <a href="/products">
                  <span>Tất cả sản phẩm</span>
                </a>
              </div>
              <ul>
                <li>
                  <a href="#">Điện thoại</a>
                </li>
                <li>
                  <a href="#">Laptop</a>
                </li>
                <li>
                  <a href="#">Máy tính bảng</a>
                </li>
                <li>
                  <a href="#">Tai nghe</a>
                </li>
                <li>
                  <a href="#">Loa</a>
                </li>
                <li>
                  <a href="#">Đồng hồ</a>
                </li>
                <li>
                  <a href="#">Phụ kiện</a>
                </li>
                <li>
                  <a href="#">Màn hình</a>
                </li>
                <li>
                  <a href="#">PC</a>
                </li>
                <li>
                  <a href="#">Thu cũ</a>
                </li>
                <li>
                  <a href="#">Hàng cũ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            {/* search */}
            <Search />
            <Banner />
            {/* banner */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

import React from "react";

const Search = () => {
  return (
    <div className="hero__search">
      <div className="hero__search__form">
        <form action="#">
          <div className="hero__search__categories">
            Tất cả sản phẩm
            <span className="arrow_carrot-down" />
          </div>
          <input type="text" placeholder="Bạn muốn tìm gì ?" />
          <button type="submit" className="site-btn">
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="hero__search__phone">
        <div className="hero__search__phone__icon">
          <i className="fa fa-phone" />
        </div>
        <div className="hero__search__phone__text">
          <h5>+84 321 321 321</h5>
          <span>Hỗ trợ 24/7</span>
        </div>
      </div>
    </div>
  );
};

export default Search;

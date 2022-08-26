import React from "react";
import Search from "../Search/Search";

const Sideb = () => {
  return (
    <>
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
              </div>
            </div>
            <div className="col-lg-9">
              {/* search */}
              <Search />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sideb;

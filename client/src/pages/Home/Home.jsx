import React from "react";
import BannerSmall from "../../components/Banner/BannerSmall";
import LatestProduct from "../../components/Product/LatestProduct";
import NewProduct from "../../components/Product/NewProduct";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/header/Header";
import SlideBar from "../../components/Slidebar/SlideBar";
const Home = () => {
  return (
    <>
      <Loader />
      <Header />
      <SlideBar />
      <NewProduct />
      <BannerSmall />
      {/* <LatestProduct /> */}
    </>
  );
};

export default Home;

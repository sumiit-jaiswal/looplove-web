// Home.js
import React, { useEffect, useContext,useState } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {


 
  const { categories, setCategories, products, setProducts, banners, setBanners} = useContext(Context);




  useEffect(() => {
    getCategories();
    getProducts();
    getBanners();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  const getBanners = () => {
    fetchDataFromApi("/api/banners?populate=*").then((res) => {
      console.log(res);
      setBanners(res);
    });
  };

  

  
  
  return (
    <div>
      <Banner banners={banners} />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} catHeadingText="Shop by Category" />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;

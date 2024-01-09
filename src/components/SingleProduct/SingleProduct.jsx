import { useState, useContext } from "react";
import Cart from "../Cart/Cart";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { FaCartPlus, FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SingleProduct.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { uploadCart } from "../../utils/api";

const SingleProduct = () => {
  const { isAuthenticated } = useAuth0();
  const { sub } = useContext(Context);

  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);

  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);
  const navigate = useNavigate();

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return;
  const product = data?.data?.[0]?.attributes;

  const carouselimg = product?.img;
  const handleShare = () => {
    const shareData = {
      title: product.title,
      text: `Check out this product: ${product.title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error(`Error sharing: ${error.message}`));
    } else {
      console.error("Web Share API not supported on this browser");
    }
  };

  

  

  return (
    <>
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbwidth={60}
                className="productCarousel"
              >
                {carouselimg?.data?.map((item) => (
                  <img
                    key={item.id}
                    src={
                      process.env.REACT_APP_LOOPLOVE_URL + item?.attributes?.url
                    }
                    alt=""
                  />
                ))}
              </Carousel>
            </div>

            <div className="right">
              <span className="name">{product?.title}</span>
              <span className="price"> &#8377;{product?.price}</span>
              <span className="desc"> {product?.desc}</span>
              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span onClick={decrement}>-</span>
                  <span>{quantity}</span>
                  <span onClick={increment}>+</span>
                </div>
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    handleAddToCart(data?.data?.[0], quantity);
                    setQuantity(1);
                    uploadCart(sub, id, quantity, isAuthenticated);
                  }}
                >
                  <FaCartPlus size={20} />
                  ADD TO CART
                </button>
              </div>
              <div className="buy-now">
                <button
                  className="buy-now-button"
                  onClick={() => {
                    handleAddToCart(data?.data?.[0], quantity);
                    setQuantity(1);
                    setShowCart(true);
                    uploadCart(sub, id, quantity, isAuthenticated);
                  }}
                >
                  BUY NOW
                </button>
              </div>
              <span className="divider" />
              <div className="info-item">
                <div className="text-bold">
                  Category :{" "}
                  <span
                    onClick={() =>
                      navigate(`/category/${product?.categories?.data?.[0].id}`)
                    }
                  >
                    {product?.categories?.data?.[0]?.attributes?.title}
                  </span>
                </div>
                <div className="text-bold" onClick={handleShare}>
                  Share :
                  <span className="social-icons">
                    <FaShareAlt size={25} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <RelatedProducts
            productId={id}
            categoryId={product?.categories?.data?.[0]?.id}
          />
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default SingleProduct;

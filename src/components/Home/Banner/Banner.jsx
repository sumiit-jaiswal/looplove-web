import "./Banner.scss";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Banner = ({ banners }) => {
  const navigate = useNavigate();
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleBannerClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleCarouselChange = (index) => {
    const productId = banners?.data?.[index]?.attributes?.productId;
    setSelectedProductId(productId);
  };

  const handleBuyNowClick = () => {
    if (selectedProductId) {
      navigate(`/product/${selectedProductId}`);
    }
  };

  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <span className="banner-heading">Most Selling</span>
          <div className="ctas">
            <div className="banner-cta v2" onClick={handleBuyNowClick}>
              Buy Now
            </div>
          </div>
        </div>

        <div className="banner-img">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            interval={5000}
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(clickHandler, hasPrev) => (
              <div className=" arrow-back" onClick={clickHandler}>
                <BiArrowBack className="arrow-back-icon" />
              </div>
            )}
            renderArrowNext={(clickHandler, hasNext) => (
              <div className=" arrow-next" onClick={clickHandler}>
                <BiArrowBack className="arrow-next-icon" />
              </div>
            )}
            onChange={handleCarouselChange}
          >
            {banners?.data?.map((item) => (
              <div
                key={item.id}
                onClick={() => handleBannerClick(item?.attributes?.productId)}
              >
                <div className="carousel-text">
                  <p className="carousel-title">{item?.attributes?.title}</p>
                  <p className="carousel-price">
                    &#8377;{item?.attributes?.price}
                  </p>
                </div>
                <img
                  src={
                    process.env.REACT_APP_LOOPLOVE_URL +
                    item?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;

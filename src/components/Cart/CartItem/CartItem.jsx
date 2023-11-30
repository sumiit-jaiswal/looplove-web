import { MdClose } from "react-icons/md";
// import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";
import { useContext, useState } from "react";
import { Context } from "../../../utils/context";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { uploadCart } from "../../../utils/api";

const CartItem = ({ authUserId, authUserDetails }) => {
  const { isAuthenticated } = useAuth0();
  const { sub } = useContext(Context);
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);
  console.log("fffffffffffff", authUserDetails);

  const fetchAndRemoveFromCart = async (item) => {
    // const cartItems = authUserDetails?.cartitems || [];

    try {
    } catch (error) {
      console.error("Error in Promise.all:", error);
    }
  };

  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img
              src={
                process.env.REACT_APP_LOOPLOVE_URL +
                item?.attributes?.img?.data?.[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => {
                handleRemoveFromCart(item);
                fetchAndRemoveFromCart(item);
                uploadCart(sub,item.id, 0, isAuthenticated);
              }}
            />
            <div className="quantity-buttons">
              <span
                onClick={() => {
                  handleCartProductQuantity("dec", item);
                  uploadCart(sub,item.id, -1, isAuthenticated);

                }}
              >
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span
                onClick={() => {
                  handleCartProductQuantity("inc", item);
                  uploadCart(sub, item.id, 1, isAuthenticated);
                }}
              >
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#8377;{item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;

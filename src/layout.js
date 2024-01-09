// Layout.js
import { Context } from './utils/context';
import React, { useEffect, useState, useContext, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { fetchDataApi, fetchCartDetailsApi } from './utils/api';
const Layout = ({ children }) => {

  console.log('start');
  const { isAuthenticated } = useAuth0();
  const { sub } = useContext(Context);
  const [authUserId, setAuthUserId] = useState(null);
  const [authUserDetails, setAuthUserDetails] = useState(null);
  const { handleAddToCart } = useContext(Context);
  const fetchAndAddToCartCompleted = useRef(false);




  const fetchData = async (subtoken) => {
    try {
      console.log('Fetching data for subtoken:', subtoken);
      const response = await fetchDataApi.post( "/api/authusers/findauthser",
        {
          subtoken,
        }
      );
      
      const receivedAuthUserId = response.data.authUserId;
      console.log('Received authUserId:', receivedAuthUserId);

      setAuthUserId(receivedAuthUserId);

    } catch (error) {
      console.error('Error fetching authuser: react', error);
    }
  };

  const fetchCartDetails = async (authUserId) => {
    try {
      const response = await fetchCartDetailsApi.get( `/api/authusers/findcart/${authUserId}`
      );

      const receivedAuthUserDetails = response.data.cartDetails;
      console.log('Received authUserDetails:', receivedAuthUserDetails);

      setAuthUserDetails(receivedAuthUserDetails);


    } catch (error) {
      console.error('Error fetching AuthUser details: react', error);
    }
  };
  console.log('ye dekho1', fetchAndAddToCartCompleted);


  const fetchAndAddToCart = async () => {
    const cartItems = authUserDetails?.cartitems || [];

    try {
      // Use Promise.all to wait for all asynchronous operations to complete
      await Promise.all(
        cartItems.map(async (cartItem) => {
          const prodid = cartItem.prodid;
          const quant = cartItem.quant;

          const response = await fetchCartDetailsApi.get(`/api/products?populate=*&filters[id]=${prodid}`
          );
          const productData = response.data?.data?.[0];
          console.log('dekh', prodid);
          console.log('productData', productData);
          handleAddToCart(productData, quant);
          console.log('after adding to cart');
          console.log('dekh dobaara', prodid);
        })
      );

      // All asynchronous operations completed
      fetchAndAddToCartCompleted.current = true;
    } catch (error) {
      console.error('Error in Promise.all:', error);
    }
  };



  useEffect(() => {
    if (isAuthenticated) {

      console.log('Fetching data for sub:', sub);
      fetchData(sub);
    }
  }, [isAuthenticated, sub]);



  useEffect(() => {
    // If authUserId is available, fetch AuthUser details
    if (authUserId) {
      fetchCartDetails(authUserId);
    }
  }, [authUserId]);

  useEffect(() => {
    if (!fetchAndAddToCartCompleted.current && authUserDetails) {
      fetchAndAddToCart();
    }
  }, [authUserDetails]);


  console.log(" baad wala", authUserDetails);
  //   const prodIds = authUserDetails?.cartitems.map(cartItem => cartItem.prodid);
  //   const quant = authUserDetails?.cartitems.map(cartItem => cartItem.quant);
  // // Logging the array of prodid values
  // console.log('Product IDs:', prodIds);
  // console.log('quant:', quant);

  // const { data } = useFetch(`/api/products?populate=*&[filters][id]=${prodid}`);

  // const cartItems = authUserDetails?.cartitems || [];

  // Use Promise.all to wait for all asynchronous operations to complete
  // Promise.all(cartItems.map(async (cartItem) => {
  //   const prodid = cartItem.prodid;
  //   const quant = cartItem.quant;

  //   try {
  //     const response = await axios.get(process.env.REACT_APP_LOOPLOVE_URL + `/api/products?populate=*&filters[id]=${prodid}`);
  //     const productData = response.data?.data?.[0];

  //     // Now, you have productData and quant, you can call handleAddToCart
  //     handleAddToCart(productData, quant);
  //   } catch (error) {
  //     console.error(`Error fetching product details for prodid ${prodid}:`, error);
  //   }
  // }))
  //   .catch(error => console.error('Error in Promise.all:', error));






  return (
    <div className='layout'>
      {/* Render common layout elements */}
      {children}
    </div>
  );
};

export default Layout;

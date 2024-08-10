import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_LOOPLOVE_STRAPI_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_LOOPLOVE_URL + url, params);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// custom api functions

export const uploadCartApi = axios.create({
  baseURL: process.env.REACT_APP_LOOPLOVE_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_LOOPLOVE_STRAPI_APP_KEY,
  },
});

export const fetchDataApi = axios.create({
  baseURL: process.env.REACT_APP_LOOPLOVE_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_LOOPLOVE_STRAPI_APP_KEY,
  },
});

export const fetchCartDetailsApi = axios.create({
  baseURL: process.env.REACT_APP_LOOPLOVE_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_LOOPLOVE_STRAPI_APP_KEY,
  },
});

export const uploadCart = async (subtoken, prodid, quant, isAuthenticated) => {

  console.log("permission for carrtt additionnn")
  if (isAuthenticated) {
    try {
      console.log("Request payload:", {
        subtoken,
        prodid,
        quant,
      });
      const response = await uploadCartApi.post("/api/cartitems/add",
        {
          subtoken,
          prodid,
          quant,
        }
      );

      console.log(prodid);
      console.log("itna toh chla hai");
      console.log(quant);
      console.log("itna toh chla hai");
      console.log("Response:", response);
      console.log("Added to cart:", response.data);
    } catch (error) {
      console.error("Error adding to cart: react", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error setting up the request:", error.message);
      }
    }
  }
};

export const addOrderApi = axios.create({
  baseURL: process.env.REACT_APP_LOOPLOVE_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_LOOPLOVE_STRAPI_APP_KEY,
  },
});

export const updateOrderApi = axios.create({
  baseURL: process.env.REACT_APP_LOOPLOVE_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_LOOPLOVE_STRAPI_APP_KEY,
  },
});

export const addOrder = async (subtoken, products, amount) => {

  try {
    const response = await addOrderApi.post("/api/orders/pre", {

      subtoken,
      products,
      amount,
    });
    console.log("resss", response);

  } catch (err) {
    console.log(err);
  }
};





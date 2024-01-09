import React, { useState, useContext } from "react";
import axios from "axios";
import "./CheckoutForm.scss";
import { Context } from "../../utils/context";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchDataApi , updateOrderApi} from "../../utils/api";
const CheckoutForm = () => {
  const { cartItems, cartSubTotal } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [loading2, setLoading2] = useState(false);
  const { sub } = useContext(Context);
  const [authUserId, setAuthUserId] = useState(null);
  const {isAuthenticated,loginWithRedirect}=useAuth0();

console.log("authuser mil gya",authUserId);
  const data = {
    name: "sumitjais",
    amount: 1,
    number: "9599399438",
    MUID: "MUID123",
    transactionId: "MT7850590068188104",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch authUserId and wait for the operation to complete
      if(isAuthenticated){
        await fetchData(sub);
  
      // After fetching authUserId, proceed with the rest of the logic
      loading();
      }
      else{
        loginWithRedirect();
      }
      
    } catch (error) {
      console.error('Error during form submission: ', error);
    }
    
    // Add more functions as needed
  };
  const loading = () => {
  

    // Add your form submission logic here
    // For example, you can make an API call or perform any other actions

    setLoading2(true);

    // Simulate an asynchronous operation (remove in your actual implementation)
    setTimeout(() => {
      setLoading2(false);
      // Reset form fields after submission
      setName("");
      setEmail("");
      setPhoneNumber("");
      setAddressLine1("");
      setAddressLine2("");
      setCity("");
      setState("");
      setPincode("");
    }, 2000);
  };

  console.log("subtoken checkout",sub);
  const fetchData = async (subtoken) => {
    try {
      console.log('Fetching data for subtoken:', subtoken);
      const response = await fetchDataApi.post( `/api/authusers/findauthser`,
        {
          subtoken,
        }
      );
      
      const receivedAuthUserId = response.data.authUserId;
      console.log('Received authUserId:', receivedAuthUserId);
      setAuthUserId(receivedAuthUserId);
      updateOrder(receivedAuthUserId);

      

    } catch (error) {
      console.error('Error fetching authuser: react', error);
    }
  };


  const updateOrder = async (authUserId) => {
    // Function 2 logic
    console.log('Executing submitFunction2');
    console.log("name",name);
    console.log("subtoken checkouuuuuuuuut",sub);
    console.log(authUserId,"authidddddd mil gya")
    try {
         const response = await updateOrderApi.post(`/api/orders/update`,
        {
          authUserId,
          name,
          email,
          phoneNumber,
          addressLine1,
          addressLine2,
          city,
          state,
          pincode,
        }
      );
        console.log("response of  updating order",response);
    
    } catch (error) {
      console.error("Error processing update order react: ", error);
    } 


  };

  const handlePayment = async (e) => {
    try {
      setLoading2(true);

      const response = await axios.post(
        process.env.REACT_APP_LOOPLOVE_URL + `/api/orders/payment`,
        {
          ...data,
        }
      );

      const redirectUrl = response.data;
      window.location.href = redirectUrl;
    } catch (error) {
      console.error("Error processing payment: ", error);
    } 
  };

  const handlePincodeChange = (e) => {
    const inputPincode = e.target.value;

    // Allow only digits and limit to 6 characters
    const sanitizedPincode = inputPincode.replace(/\D/g, '').slice(0, 6);

    setPincode(sanitizedPincode);
  };


  return (
    <div className="checkout-form">
      <div className="checkout-container">
        <div className="product-list">
          <h2>Your Products</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="product-item">
              <img
                src={
                  process.env.REACT_APP_LOOPLOVE_URL +
                  item?.attributes?.img?.data?.[0]?.attributes?.url
                }
              />
              <div className="product-details">
                <h3>{item.attributes.title}</h3>
                <p>Quantity: {item.attributes.quantity}</p>
              </div>
              <p className="end">₹{item.attributes.price * item.attributes.quantity}</p>
            </div>
          ))}
          <div className="subtotal">
            <p>Subtotal:</p>
            <p>₹{cartSubTotal}</p>
          </div>
        </div>

        <div className="checkout-form-container">
          <h2>Checkout</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />

            <label htmlFor="address1">Address Line 1:</label>
            <input
              type="text"
              id="address1"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              required
            />

            <label htmlFor="address2">Address Line 2:</label>
            <input
              type="text"
              id="address2"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />

            <label htmlFor="city">City/Town:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />

            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <label htmlFor="pincode">Pincode:</label>
            <input
              type="text"
              id="pincode"
              value={pincode}
              onChange={handlePincodeChange}
              maxLength="6" // Set maximum length to 6
              pattern="\d*" // Allow only digits
              title="Please enter only digits"
              required
            />

            <button type="submit" disabled={loading2}>
              {loading2 ? "Processing..." : "We are on testing mode"}
            </button>
            <p>we are not accepting orders for now as we are on testing mode right now.</p>
            <p>--------</p>
            <p>we will be back soon</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

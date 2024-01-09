// Order.jsx
import React, { useEffect, useState } from "react";
import "./Order.scss"; // Create this file for styling if needed
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // Assume you have an API endpoint or data source for fetching orders
  // useEffect(() => {
  //   // Fetch orders from your API or data source
  //   // Update the state with the fetched orders
  //   // Example:
  //   const fetchedOrders = [
  //     {
  //       id: 1,
  //       products: [
  //         { id: 101, name: "Product A", photo: "product_a.jpg" },
  //         { id: 102, name: "Product B", photo: "product_b.jpg" },
  //       ],
  //       deliveryStatus: "Shipped",
  //       trackingLink: "https://example.com/tracking/123",
  //     },
  //     {
  //       id: 2,
  //       products: [{ id: 103, name: "Product C", photo: "product_c.jpg" }],
  //       deliveryStatus: "Processing",
  //       trackingLink: "https://example.com/tracking/456",
  //     },
  //     // ... more orders
  //   ];

  //   setOrders(fetchedOrders);
  // }, []);

  return (
    <div className="order-container">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <div className="no-order">
          <p className="heading">No orders available</p>
          <p className="back-link" onClick={() => navigate("/")}>continue shopping</p>
        </div>
      ) : (
        <ul className="orders-list">
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <h3>Order #{order.id}</h3>
              <ul className="products-list">
                {order.products.map((product) => (
                  <li key={product.id} className="product-item">
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="product-photo"
                    />
                    <span className="product-name">{product.name}</span>
                  </li>
                ))}
              </ul>
              <div className="delivery-info">
                <span className="delivery-status">{`Delivery Status: ${order.deliveryStatus}`}</span>
                <a
                  href={order.trackingLink}
                  className="tracking-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Track Your Order
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Order;

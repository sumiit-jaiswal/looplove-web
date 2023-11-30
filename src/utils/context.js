import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Context = createContext();

const AppContext = ({ children }) => {

  const { user, getIdTokenClaims } = useAuth0();

  const [sub, setSub] = useState(null);
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [banners, setBanners] = useState();
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems?.map((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      let items = [...prevItems];
      let index = items?.findIndex((p) => p.id === product?.id);
  
      if (index !== -1) {
        items[index].attributes.quantity += quantity;
      } else {
        product.attributes.quantity = quantity;
        items = [...items, product];
      }
  
      return items;
    });
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== product?.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };


  useEffect(() => {
    const fetchSubFromAuth0 = async () => {
      if (user) {
        const idToken = await getIdTokenClaims();
        const subValue = idToken.sub;
        setSub(subValue);
        
        // Now you can use the 'sub' to make requests to your Strapi backend
      }
    };

    fetchSubFromAuth0();
  }, [user, getIdTokenClaims]);

  

  

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        banners,
        setBanners,
        cartItems,
        setCartItems,
        handleAddToCart,
        cartCount,
        handleRemoveFromCart,
        showCart,
        setShowCart,
        handleCartProductQuantity,
        cartSubTotal,
        sub,
        setSub,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default AppContext;

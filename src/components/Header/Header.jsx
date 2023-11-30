import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import logo from "../../assets/web-logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.scss";
const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);

  const handlescroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
  }, []);


  // auth 0 functions

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const isImg =() => {

    
    return user.picture;

  };

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="left" onClick={() => navigate("/")}>
            <img className="website-logo" src={logo} alt="" />

            <div className="website-name">LoopLove</div>
          </div>

          <ul className="center">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/categories")}>Categories</li>
          </ul>

          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            {/* <span className="wishlist-icon" >
            <AiOutlineHeart /><span>4</span>
            </span> */}
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            {!isAuthenticated && <div className="loginout login heart"  onClick={() => loginWithRedirect()}>
              <span>Login</span>
            </div>}

            {isAuthenticated && <div className="loginout profile"  onClick={() => navigate("/profile")}>
            {isImg && <img src={user.picture} alt="" className="profile-picture" />}
            {!isImg && <span>{user.given_name}</span>}
            </div>}

          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;

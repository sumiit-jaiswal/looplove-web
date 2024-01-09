import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import About from "./components/About/about";
import Catpage from "./components/Catpage/Catpage";
import AppContext from "./utils/context";
import Profile from "./components/Profile/Profile"
import Layout from "./layout";
import CheckoutForm from "./components/checkout/CheckoutForm";
import Success from "./Payment/Success";
import Failure from "./Payment/Failure";
import Order from "./components/Order/Order";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy/PrivacyPolicy";
import Terms from "./components/Policies/Terms/Terms";
import ReturnRefund from "./components/Policies/ReturnRefund/ReturnRefund";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Layout>

                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<Category />} />
                        <Route path="/product/:id" element={<SingleProduct />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/categories" element={<Catpage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/checkout" element={<CheckoutForm/>}/>
                        <Route path="/order" element={<Order />} />
                        <Route path="/success" element={<Success />} />
                        <Route path="/failure" element={<Failure />} />
                        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
                        <Route path="/Terms-Conditions" element={<Terms />} />
                        <Route path="/Return-Refund" element={<ReturnRefund />} />
                    </Routes>
                    <Newsletter />
                    <Footer />
                </Layout>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
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
                    </Routes>
                    <Newsletter />
                    <Footer />
                </Layout>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
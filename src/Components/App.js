import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../Styles/GlobalStyle.js";
import AuthSelector from "./AuthSelect.js";
import SignIn from "./Sign-In/SignIn.js";
import SignUp from "./Sign-Up/SignUp.js";
import Home from "./Home/Home.js";
import Product from "./Products/Product.js";

export default function App() {

    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AuthSelector />} ></Route>
                    <Route path="/sign-in" element={<SignIn />} ></Route>
                    <Route path="/sign-up" element={<SignUp />} ></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/:productId" element={<Product />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
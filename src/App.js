import React, { useEffect,  useContext } from "react";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import BlogScreen from "./screen/blogScreen";
import HomeScreen from "./screen/homeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserContext from "./provider/userProvider";
import ProductScreenArt from "./screen/productScreen/artAndCraft";
import ProductScreenChange from "./screen/productScreen/changeAndAccessories";
import ProductScreenHealth from "./screen/productScreen/healthAndBeauty";
import ProductScreenPottery from "./screen/productScreen/pottery";
import ProductScreenOthers from "./screen/productScreen/otherCategories";
import LoginScreen from "./screen/loginScreen";
import RegisterScreen from "./screen/registerScreen";
import CustomerRegisterAccount from "./screen/registerScreen/customerAccount";
import SellerRegisterAccount from "./screen/registerScreen/sellerAccount";
import CustomerLoginAccount from "./screen/loginScreen/customerAccount";
import SellerLoginAccount from "./screen/loginScreen/sellerAccount";
import ForgotPasswordScreen from "./screen/forgotPassword";
import ResetPasswordScreen from "./screen/resetPassword";
import ProfileScreen from "./screen/profileScreen";
import ProfileOverView from "./screen/profileScreen/overview";
import EditProfile from "./screen/profileScreen/editProfile";
import StockReports from "./screen/profileScreen/stockReports";
import ProfileProduct from "./screen/profileScreen/profileProduct";
import AccountVerifcationScreen from "./screen/accountVerifation";
import SlideShow from './component/newSlider'
function App() {
  const {state, USER} = useContext(UserContext)

  const recoverDataFunc = async()  =>{
    await USER.recoverData();
  }
  useEffect(() => {
    
    recoverDataFunc()
  }, [state]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/productScreenChange"
            element={<ProductScreenChange />}
          />
          <Route
            path="/productScreenHealth"
            element={<ProductScreenHealth />}
          />
          <Route path="/productScreenArt" element={<ProductScreenArt />} />
          <Route
            path="/productScreenPottery"
            element={<ProductScreenPottery />}
          />
          <Route
            path="/productScreenOthers"
            element={<ProductScreenOthers />}
          />
          <Route path="/blogScreen" element={<BlogScreen />} />
          <Route path="/forgotPassword" element={<ForgotPasswordScreen />} />
          <Route path="/resetPassword" element={<ResetPasswordScreen />} />
          <Route path="/verifyAccount" element={<AccountVerifcationScreen />} />
          {/* ========registerScreen====== */}
          <Route path="/registerScreen" element={<RegisterScreen />}>
            <Route
              path="customerRegisterAccount"
              element={<CustomerRegisterAccount />}
            />
            <Route
              path="sellerRegisterAccount"
              element={<SellerRegisterAccount />}
            />
          </Route>
          {/* =========loginScreen====== */}
          <Route path="/loginScreen" element={ <LoginScreen />}>
            <Route
              path="customerLoginAccount"
              element={<CustomerLoginAccount />}
            />
            <Route path="sellerLoginAccount" element={<SellerLoginAccount />} />
          </Route>
          {/* =====profileScreen==== */}
          <Route
            path="/profileScreen"
            element={state.token ? <ProfileScreen /> : <Navigate to="/" />}
          >
            <Route path="overview" element={<ProfileOverView />} />
            <Route path="stockReports" element={<StockReports />} />
            <Route path="profileProduct" element={<ProfileProduct />} />
            <Route path="editProfile" element={<EditProfile />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      ,
    </div>
  );
}

export default App;

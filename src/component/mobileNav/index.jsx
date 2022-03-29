import React, { useState } from "react";
import "./style.css";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [showLeftBar, setShowLeftBar] = useState(false);
  const [showRightBar, setShowRightBar] = useState(false);

  const handleLeftBar = () => {
    setShowLeftBar(!showLeftBar);
    setShowRightBar(false);
  };
  const handleRightBar = () => {
    setShowRightBar(!showRightBar);
    setShowLeftBar(false);
  };
  return (
    <div className="mobileNav">
      <div className="mobileNavTop">
        <Link to="/">
          <img src={bestWishLogo} className="bestWishLogo" />
        </Link>
        <div className="hamburgerContainer">
          <div className="" onClick={handleLeftBar}>
            <i className="fa fa-bars leftBar" aria-hidden="true"></i>
          </div>
          <div className="" onClick={handleRightBar}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div
        className="mobileNavBottomLeft"
        style={{ display: showLeftBar ? "flex" : "none" }}
      >
        <div className="mobileNavLeftList">
          <l1 className="mobileNavLink">Product</l1>
          <l1 className="mobileNavLink">Blog</l1>
          <l1 className="mobileNavLink">Help</l1>
          <l1 className="mobileNavLink">Account</l1>
          <l1 className="mobileNavLink">Cart</l1>
        </div>
      </div>
      <div
        className="mobileNavBottomRight"
        style={{ display: showRightBar ? "flex" : "none" }}
      >
        <div className="mobileNavRightList">
          <l1 className="mobileNavLink">Clothing & Accessories</l1>
          <l1 className="mobileNavLink">Healht & Beauty</l1>
          <l1 className="mobileNavLink">Art & Craft</l1>
          <l1 className="mobileNavLink">Pottery</l1>
          <l1 className="mobileNavLink">Other Categories</l1>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

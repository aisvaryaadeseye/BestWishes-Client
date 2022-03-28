import React, { useState, useEffect, useContext } from "react";
import { NavbarStyled } from "./style";
import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import UserContext from "../../provider/userProvider";
import customerImg from "../../assets/images/customerImg.jpg";

import { Link, useNavigate } from "react-router-dom";
import TopRightNav from "../topRightNav";

import profileIIMG from "../../assets/images/profileIIMG.png";

const Navbar = () => {
  const {state} = useContext(UserContext)

  return (
    <NavbarStyled>
      <div className="navbarTop">
        <Link to="/">
          <img src={bestWishLogo} className="bestWishLogo" />
        </Link>
        <div className="sarchbarContainer">
          <div className="searchContainer">
            <i className="fa fa-search"></i>

            <input type="text" placeholder="Serach" />
          </div>
          <div className="searchBtn">
            <button>Search</button>
          </div>
        </div>

        <div className="navBarLinkLists">
          <div className="accountContainer">
            <TopRightNav user={state.token} />
            {state.token ? (
              <Link to="/profileScreen/overview">
                <div className="userImgContainer">
                  <img src={customerImg} className="userImg" alt="" />
                </div>
              </Link>
            ) : (
              <div className="userImgContainer">
                <img src={profileIIMG} className="userImg" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="navbarBottom">
        <ul className="navbarBottomnavBarLinks">
          <Link to="/productScreenChange" className="navbarBottomLink">
            Clothings & Accessories
          </Link>

          <Link to="/productScreenHealth" className="navbarBottomLink">
            Health & Beauty
          </Link>

          <Link to="/productScreenHealth" className="navbarBottomLink">
            Art & Craft
          </Link>

          <Link to="/productScreenHealth" className="navbarBottomLink">
            Pottery
          </Link>

          <Link to="/productScreenHealth" className="navbarBottomLink">
            Other Categories
          </Link>
        </ul>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;

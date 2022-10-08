import React from "react";
import "../Cascading-Style-Sheets/Navbar.css";
import { BsSearch } from "react-icons/bs";
import wallet from "../assets/wallet.png";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setClick(true);
  };
  const handleClick2 = () => {
    setOpen(true);
  };

  const dropDownMenu = ["Sign in for Creators", "Sign in for Users"];
  const dropDownMenu2 = ["Sign up for Creators", "Sign up for Users"];
  const menu = dropDownMenu.map((item) => <li>{item}</li>);
  const menu2 = dropDownMenu2.map((item) => <li>{item}</li>);
  return (
    <>
      <div className="nav">
        <input type="search" name="" id="" placeholder="Search" />
        <BsSearch className="search-img" />
        <button onClick={handleClick}>Sign In</button>

        <button onClick={handleClick2}>Sign Up</button>
        <img src={wallet} height={45} width={45} alt="" />
        <div className="account"></div>
      </div>
      <div className="dropdown-sign-in-click">{click ? menu : " "}</div>
      <div className="dropdown-sign-up-click">{open ? menu2 : " "}</div>
    </>
  );
};

export default Navbar;

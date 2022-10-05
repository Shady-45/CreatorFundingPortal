import React from "react";
import "../Cascading-Style-Sheets/Navbar.css";
import { BsSearch } from "react-icons/bs";
import wallet from "../assets/wallet.png";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <input type="search" name="" id="" placeholder="Search" />
        <BsSearch className="search-img" />
        <button>Sign Up</button>
        <img src={wallet} height={45} width={45} alt="" />
        <span className="avatar"></span>
      </div>
    </>
  );
};

export default Navbar;

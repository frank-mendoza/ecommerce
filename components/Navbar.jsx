import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, openCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link passHref href="/">JSM Headphones</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={openCart}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">
          {totalQuantities}
          </span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;

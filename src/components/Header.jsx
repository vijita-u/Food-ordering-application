import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useLocation } from "react-router-dom";
import OnlineStatus from "./OnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  let location = useLocation();

  // Subscribe to the store
  const cartData = useSelector((store) => store.cart.items);

  const sumArray = (arr) => {
    return arr.reduce((sum, current) => sum + current.quantity, 0);
  }

  // console.log(cartData, sumArray(cartData));


  return (
    <header className="h-[6rem] flex items-center justify-between">
      <p className="font-logo text-[3rem] text-accent font-bold">Honger</p>
      <nav className="flex justify-between items-center">
        <ul className="flex gap-10">
          <li
            className={
              location.pathname == "/" ? "list-selected" : "list-primary"
            }
          >
            <Link to={"/"}>Home</Link>
          </li>
          {/* <li className={location.pathname == "/about" ? "list-selected": "list-primary"}><Link to={"/about"}>About</Link></li> */}
          <li
            className={
              location.pathname == "/contact" ? "list-selected" : "list-primary"
            }
          >
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-7 relative">
        <Link
          to="/cart"
          className={
            location.pathname == "/cart" ? "list-selected" : "list-primary"
          }
        >
          <ShoppingCartOutlinedIcon />
          <small className="absolute bottom-4 text-accent font-bold text-[14px]">{sumArray(cartData)}</small>
        </Link>
        <button className="btn-primary">Log In</button>
      </div>
      <OnlineStatus />
    </header>
  );
};

export default Header;

import React, { useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  return (
    <header className="h-[6rem] flex items-center justify-between">
      <p className="font-logo text-[3rem] text-accent font-bold">Honger</p>
      <nav className="flex justify-between items-center">
        <ul className="flex gap-10">
          <li className={location.pathname == "/" ? "list-selected": "list-primary"}><Link to={"/"}>Home</Link></li>
          <li className={location.pathname == "/about" ? "list-selected": "list-primary"}><Link to={"/about"}>About</Link></li>
          <li className={location.pathname == "/contact" ? "list-selected": "list-primary"}><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
          <Link to="/cart" className={location.pathname == "/cart" ? "list-selected": "list-primary"}>
            <ShoppingCartOutlinedIcon />
          </Link>
          <button className="btn-primary">Log In</button>
        </div>
    </header>
  );
};

export default Header;

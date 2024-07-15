import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <header className="h-[6rem] flex items-center justify-between">
      <p className="font-logo text-[3rem] text-accent font-bold">Honger</p>
      <nav className="flex justify-between items-center">
        <ul className="flex gap-10">
          <li className="list-primary">Home</li>
          <li className="list-primary">About us</li>
          <li className="list-primary">Contact</li>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
          <div>
            <ShoppingCartOutlinedIcon />
          </div>
          <button className="btn-primary">Log In</button>
        </div>
    </header>
  );
};

export default Header;

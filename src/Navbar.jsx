import React from "react";
import { BsBell } from "react-icons/bs";
import Logo from "././assets/logo.png";

const Navbar = () => {
  return (
    <nav className="py-6 ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        {/* <!-- Logo --> */}
        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[165px]"
            src={Logo}
            alt="logo"
          />
        </a>
        {/* <!-- Notification --> */}
        <BsBell className="w-8 h-8 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;

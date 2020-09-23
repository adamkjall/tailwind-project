import React from "react";

const Navbar = () => (
  <div className="bg-blue-400 flex justify-between px-12 py-4">
    <div className="logo-container">
      <img src="" alt="logo" className="logo" />
    </div>

    <nav className="space-x-5">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Sign in</a>
      <a href="">Sign up</a>
    </nav>
  </div>
);

export default Navbar;

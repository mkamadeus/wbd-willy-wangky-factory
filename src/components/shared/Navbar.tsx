import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between shadow-lg p-4 w-screen">
      <div>Logo</div>
      <div className="flex flex-col">
        <div>mkamadeus</div>
        <div>Logout</div>
      </div>
    </nav>
  );
};

export default Navbar;

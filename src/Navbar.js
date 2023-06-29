import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/Home">Home</Link>
      <Link to="/HelloWorld">Gif Search</Link>
    </>
  );
};

export default Navbar;

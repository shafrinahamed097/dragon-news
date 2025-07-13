import React from "react";
import { Link } from "react-router-dom";
import userICon from '../../assets/user.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to='/'>Home</Link>
        <Link to='/career'>Career</Link>
        <Link to='/about'>About</Link>
      </div>
      <div className="login">
        <div className="flex gap-2 items-center">
          <img src={userICon} alt="" />
          <button className="btn bg-[#d72050] rounded">login</button>
        </div>

      </div>

    </div>
    
  );
};

export default Navbar;

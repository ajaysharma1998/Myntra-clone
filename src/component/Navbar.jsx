import React from "react";
import Myntralogo from "./images/Myntralogo.png";
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Navbar = () => {
  return (
    <div className="headerbox">
      <div className="imgbox">
        <img className="logo" src={Myntralogo} alt="logo" />
      </div>
     <div className="parabox">
     <div >
        <p className="para">Men</p>
      </div>
      <div>
        <p className="para">Kids</p>
      </div>
      <div>
        <p className="para">Women</p>
      </div>
      <div>
        <p className="para">home & living</p>
      </div>
      <div>
        <p className="para">Beauty</p>
      </div>
      <div>
        <p className="para">Studio</p>
      </div>
     </div>
     <div className="inputbox">
      <span> <SearchIcon/></span>
      <input type="text" placeholder="search for products, brands and more.." />
     </div>
     <div className="bagProfile">
     <div className="acc">
      <div>
        <AccountBoxIcon/>
      </div>
      <p>Profile</p>
     </div>
     <div>
      <div>
        <FavoriteBorderIcon />
      </div>
      <p>Wishlist</p>
     </div>
     <div>
      <div>
        <ShoppingBagIcon/>
      </div>
      <p>Bag</p>
     </div>
     </div>
    </div>
  );
};

export default Navbar;

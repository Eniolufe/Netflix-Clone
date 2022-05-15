import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY >= 100 ? true : false);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <div className={`nav ${isScrolled && "scrolled"}`}>
      <img
        className="nav_logo"
        src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="NETFLIX"
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="AVATAR"
      />
    </div>
  );
}

export default Nav;

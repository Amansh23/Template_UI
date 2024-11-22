import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav_main_container">
      <div className="Nav_left_container">
        <img
          className=""
          src="https://static.wixstatic.com/media/01cae3_062a013607b24f5d9d7401587de37dfb~mv2.png/v1/fill/w_68,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NIMBLENEST%20LOGO.png"
        />
      </div>
      <div className="Nav_right_container">
        <Link className="Nav_right_Links">Home</Link>
        <Link className="Nav_right_Links">About</Link>
        <Link className="Nav_right_Links">Services</Link>
        <Link className="Nav_right_Links">Portfolio</Link>
        <Link className="Nav_right_Links">Contact</Link>
      </div>
      <div className="Nav_menu_container">
        <span>
          <i class="bi bi-list"></i>
        </span>
      </div>
    </div>
  );
}

export default Nav
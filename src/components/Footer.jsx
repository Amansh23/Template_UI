import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer_main_container">
      <div className="Footer_main_Left">
        <img
          src="https://static.wixstatic.com/media/01cae3_062a013607b24f5d9d7401587de37dfb~mv2.png/v1/fill/w_173,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NIMBLENEST%20LOGO.png"
          alt="Footer Logo"
        />
      </div>
      <div className="Footer_main_right">
        <div className="Footer_main_right_left_div">
          <div className="Footer_main_right_section">
            <Link className="Footer_main_right_section_link">Linkedin</Link>
            <Link className="Footer_main_right_section_link">Facebook</Link>
            <Link className="Footer_main_right_section_link">Twitter</Link>
            <Link className="Footer_main_right_section_link">Instagram</Link>
          </div>
          <div className="Footer_main_right_section">
            <Link className="Footer_main_right_section_link">
              Privacy Policy
            </Link>
            <Link className="Footer_main_right_section_link">Terms of Use</Link>
          </div>
        </div>
        <div className="Footer_main_right_section">
          <Link className="Footer_main_right_section_link">
            @2024 by Nimblenestdesign.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer
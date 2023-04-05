import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="flex">
      <div className="flex justify-around items-center p-8 w-full bg-slate-200 gap-11">
        All rights reserved © 2023
        <div className=" flex gap-4 text-2xl font-bold cursor-pointer">
          <a href="https://www.instagram.com/" target="blank">
            <FiInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100085458046949"
            target="blank"
          >
            {" "}
            <FaFacebookF />
          </a>

          <a href="https://twitter.com/SaadShamsi09" target="blank">
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/saad-shamsi-4b92a6232/"
            target="blank"
          >
            {" "}
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

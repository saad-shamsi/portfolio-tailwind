import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <div className='flex'>
  <div className='flex justify-around items-center p-8 w-full bg-slate-200 gap-11'>
    All rights reserved
    <div className=" flex gap-4 text-2xl font-bold cursor-pointer">
                      <FiInstagram />
                      <FaFacebookF />
                      <FaTwitter />
                      <BsLinkedin />
                    </div>
  </div>
  </div>
  )
}

export default Footer
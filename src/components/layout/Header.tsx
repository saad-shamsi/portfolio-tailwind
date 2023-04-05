import React from "react";
import { IoIosHome } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { RiContactsFill } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  return (
    <div className="w-full  flex justify-center ">
      <div
        className=" py-6  px-8 flex gap-8 fixed bottom-10  
    font-bold text-2xl rounded-full cursor-pointer bg-[#001845] text-[#2f6690] filter drop-shadow-lg z-10"
      >
        <a href="#home">
          {" "}
          <IoIosHome />
        </a>
        <a href="#experience">
          <BsPersonWorkspace />
        </a>
        <div>
          {" "}
          <a href="#project">
            <CgWebsite />
          </a>
        </div>
        <div>
          <a href="#about">
            <RiInformationLine />
          </a>
        </div>
        <div>
          <a href="#contact">
            <RiContactsFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
{
  /* <div  className=' py-6 px-8 flex gap-8 fixed bottom-10   right-[40%] mx-auto
   font-bold text-3xl rounded-full cursor-pointer bg-glass filter drop-shadow-lg'> */
}

//     bg-black/20 h-[96px] backdrop-blur-2xl cursor-pointer rounded-full max-w-[460px]
//                      mx-auto px-5 flex justify-between items-center text-2xl text-white/50

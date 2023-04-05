import React from "react";
import Logo from "@/components/assets/logo-bg.png";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex  min-w-fit mx-auto md:pl-28 pl-none px-5 justify-center md:justify-start  bg-black wrapper p-2">
      <div>
        <h2 className="text-4xl justify-center md:justify-start font-semibold text-white py-2 cursor-pointer">
          Portfolio.
        </h2>
        {/* <Image src={Logo} alt='developer logo' className='w-20 h-14 ' ></Image > */}
      </div>
    </header>
  );
};

export default Header;

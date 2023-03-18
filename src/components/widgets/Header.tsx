import React from "react";
import Logo from "@/components/assets/logo-bg.png";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex  md:justify-start  justify-center bg-black wrapper p-3">
      <div>
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-500 via-blue-600 to-orange-500">
          Portfolio.
        </h2>
        {/* <Image src={Logo} alt='developer logo' className='w-20 h-14 ' ></Image > */}
      </div>
    </header>
  );
};

export default Header;
